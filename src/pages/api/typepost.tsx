import { getPostByType } from '../../../lib/backend/database';

// Finds all post with this type (pet/person).
export default async function handler(req, res) {
    try {
        if (req.method !== 'GET') {
            return;
        }

        const data = req.body;
        const { postType } = data;

        if (postType !== 'person' && postType !== 'pet') {
            res.status(422).json({message: 'Invalid inputs'});
            return;
        }

        const posts = await getPostByType('person');
        res.status(200).json(posts);
        return;

    } catch {
        res.status(404).send({ error: "Unable to find posts" });
    }
}
