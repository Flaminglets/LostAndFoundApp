/*
By Yoonseo @Flaminglets
api for getting all the posts that certain user created
*/

import { getPostByUserID } from '../../../../lib/backend/database';

 // Finds posts by post type
 // @params: user id
 // @return: posts from user
export default async function handler(req, res) {
    const { user } = req.query
    try {
        if (req.method !== 'GET') {
            return;
        }
        
        if (req.method == 'GET') {
            const posts = await getPostByUserID(user);
            res.status(200).json(posts);
            return;
        }
    } catch {
        res.status(404).send({ error: "Unable to find a post" });
    }
}