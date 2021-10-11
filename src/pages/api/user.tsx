import { uri, dbName } from "../../../lib/database";
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); // Simple validator for the request body and the required data on the endpoints
const bcrypt = require('bcrypt'); // Hashing and verifying a password
const v4 = require('uuid').v4; // Create random ids for users
const jwt = require('jsonwebtoken'); // Create secure session for front-end
const jwtSecret = 'SUPERSECRETE20220';

const saltRounds = 10;
//const uri = 'mongodb://localhost:27017';
//const dbName = 'simple-login-db';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function findUser(db, email, callback) {
    const collection = db.collection('user');
    collection.findOne({email}, callback);
}
  
function createUser(db, email, password, callback) {
    const collection = db.collection('user');
    bcrypt.hash(password, saltRounds, function(hash) {
        // Store hash in your password DB.
        collection.insertOne(
            {
                userId: v4(),
                email,
                password: hash,
            },
            function(err, userCreated) {
                assert.equal(err, null);
                callback(userCreated);
            },
        );
    });
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        /// signup
        try{
            assert.notEqual(null, req.body.email, 'Please enter email');
            assert.notEqual(null, req.body.password, 'Please enter password');
        } catch(bodyError) {
            res.status(403).json({error: true, message: bodyError.message});
        }
    // Verify email does not exist already in the database
    client.connect(function(err) { 
        assert.equal(null, err);
        console.log("MongoDB server connected");
        const db = client.db(dbName);
        const email = req.body.email;
        const password = req.body.password;

        findUser(db, email, function(err, user) {
            if (err) {
                res.status(500).json({error: true, message: 'Unable to find user'}); // Internal Server Error
                return;
            }
            if (!user){
                // Create the user
                createUser(db, email, password, function(createResult) {
                    if (createResult.ops.length === 1) {
                        const user = createResult.ops[0];
                        const token = jwt.sign(
                            {userId: user.userId, email: user.email},
                            jwtSecret,
                            {
                                expiresIn: 3000, // 50 minutes
                            },
                        );
                        res.status(200).json({token});
                        return;
                    }
                });
            } else {
                // User does exist
                res.status(403).json({error: true, message: 'Email already exist'}); // Forbidden, refusing the request to create user
                return;
            }
        });
    })
    }
};

