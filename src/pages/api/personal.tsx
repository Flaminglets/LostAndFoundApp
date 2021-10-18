import { jwt, jwtSecret } from "../../../lib/database";
import type { NextApiRequest, NextApiResponse } from 'next';

//The endpoint that will get hit and retrieve the user data if it is logged in correctly.

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        if (!('token' in req.cookies)) {
            res.status(401).json({ message: 'Unable to auth' });
            return;
        }
        let decoded;
        const token = req.cookies.token;
        if (token) {
            try {
                decoded = jwt.verify(token, jwtSecret);
            } catch (e) {
                console.error(e);
            }
        }

        if (decoded) {
            res.json(decoded);
            return;
        } else {
            res.status(401).json({ message: 'Unable to auth' });
        }
    }
};