import { getSinglePost } from '../../../lib/backend/database';

 // Finds a single post by ID
export default async function handler(req, res) {
    try {
        if (req.method == 'GET') {
            const data = req.body;
            const { postID } = data;

            const singleData = await getSinglePost(postID);
            res.status(200).json(singleData);

            return;
        }
    } catch {
        res.status(404).send({ error: "Unable to find a post" });
    }
}
