import { mongooseConnect } from "@/lib/mongoos";
import { driverCalls } from "@/models/driverCalls";



export default async function handler(req: any, res: any) {
    mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const id = req.query.cargoId
        const result = await driverCalls.find({cargoId: id})
        if(result){
            res.json(result)
        }
    }
}