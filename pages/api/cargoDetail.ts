import { mongooseConnect } from "@/lib/mongoos";
import { cargo } from "@/models/cargo";

export default async function handler(req: any, res: any) {
    mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const id = req.query.id
        const result = await cargo.findOne({_id:id})
        if(result){
            res.json(result)
        }
    }
}