import { getMissingChildrens } from "../../../lib/backend/missingchildren";

export default async function handler(req, res) {
     try {
          if (req.method == 'GET') {
               const data = await getMissingChildrens();
               res.status(200).json(data);
          }
     } catch {
          res.status(404).send({ error: "Unable to find this page." })
     }
}