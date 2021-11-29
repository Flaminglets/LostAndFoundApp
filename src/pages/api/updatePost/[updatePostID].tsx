/* By Yoonseo @Flaminglets
api for updateing a post */

import { getSinglePost } from '../../../../lib/backend/database';

 // Finds a single post by ID
 // @params: post id
 // @return: a post data
export default async function handler(req, res) {
    const { updatePostID } = req.query
    try {
        if (req.method == 'GET') {
            const singleData = await getSinglePost(updatePostID);
            res.status(200).json(singleData);
            return;
        }
    } catch {
        res.status(404).send({ error: "Unable to find a post" });
    }
}