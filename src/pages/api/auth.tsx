import { uri, dbName, assert, bcrypt, jwt, jwtSecret } from "../../../lib/database";
import type { NextApiRequest, NextApiResponse } from 'next';

// The endpoint that the frontend hits when the users logins.

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

function findUser(db, email, callback) {
    const collection = db.collection('user');
    collection.findOne({ email }, callback);
}

function authUser(db, email, password, hash, callback) {
    const collection = db.collection('user');
    bcrypt.compare(password, hash, callback);
    console.log("User Logged In");
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        //Login 
        try {
            assert.notEqual(null, req.body.email, 'Email required');
            assert.notEqual(null, req.body.password, 'Password required');
        } catch (bodyError) {
            res.status(403).send(bodyError.message);
        }

        client.connect(function (err) {
            assert.equal(null, err);
            console.log('Connected to MongoDB server =>');
            const db = client.db(dbName);
            const email = req.body.email;
            const password = req.body.password;

            findUser(db, email, function (err, user) {
                if (err) {
                    res.status(500).json({ error: true, message: 'Error finding User' });
                    return;
                }
                if (!user) {
                    res.status(404).json({ error: true, message: 'User not found' });
                    return;
                } else {
                    authUser(db, email, password, user.password, function (err, match) {
                        if (err) {
                            res.status(500).json({ error: true, message: 'Auth Failed' });
                        }
                        if (match) {
                            const token = jwt.sign(
                                { userId: user.userId, email: user.email },
                                jwtSecret,
                                {
                                    expiresIn: 3000, //50 minutes
                                },
                            );
                            res.status(200).json({ token });
                            return;
                        } else {
                            res.status(401).json({ error: true, message: 'Auth Failed' });
                            return;
                        }
                    });
                }
            });
        });
    } else {
        // Handle any other HTTP method
        res.statusCode = 401;
        res.end();
    }
};