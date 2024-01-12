import { mongooseConnect } from "@/lib/mongoos";
import { cargoOwners } from "@/models/cargoOwners";

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if (method == "POST") {
        const id = req.body.user
        // console.log('id', id)
        const user = await cargoOwners.find({_id: id})
        res.json(user)
    }
}