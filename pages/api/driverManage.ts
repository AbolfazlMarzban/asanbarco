import { mongooseConnect } from "@/lib/mongoos";
import { driverCalls } from "@/models/driverCalls";
import { drivers } from "@/models/drivers";



export default async function handler(req: any, res: any) {
    mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const id = req.query.id
        let result = await drivers.findOne({_id: id})
        if(result){
            res.json(result)
        }
    }
}