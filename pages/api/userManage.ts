import { mongooseConnect } from "@/lib/mongoos";
import { cargoOwners } from "@/models/cargoOwners";


export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const id = req.query.id
        const result = await cargoOwners.findOne({_id:id})
        if(result){
            res.json(result)
        }
    }
}