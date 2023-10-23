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
    if(method == "POST"){
        const data = req.body
        console.log('data', data)
        const result = await cargoOwners.updateOne({_id: data.userID}, {
            "name": data.fullName,
            "phoneNumer": data.phoneNumber,
            "nationalNumber": data.nationalNumber,
            "businessName": data.businessName,
            "birthDate": data.birthDate,
            "bankCard": data.bankCard,
            "profilePic": data.profileAddress,
            "logoPic": data.logoAddress,
            "nationalCardPic" : data.nationalAddress
        })
        if(result){
            res.json(true)
        } else {
            res.json(false)
        }
    }
}