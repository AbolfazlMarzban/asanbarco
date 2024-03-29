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
    if(method == "POST"){
        const id = req.query.id
        const result = await cargo.deleteOne({_id: id})
        if(result){
            res.json(true)
        } else {
            res.json(false)
        }
    }
    if(method == "PUT"){
        const data = req.body
        console.log('data', data)
        const result = await cargo.updateOne({_id:data.cargoId}, {
            "feeType": data.feeType, "suggestedFee": data.fee, "cargoType": data.cargoType, "weightType": data.weightType, 
            "loadingTime": data.loadingTime, "loadingDate": data.loadingDate, "dischargeTime": data.dischargeTime, 
            "selectedDay": data.selectedDay, "phoneNumber": data.phone, "comments": data.comments
        })
        if(result){
            res.json(true)
        } else {
            res.json(false)
        }

    }
}