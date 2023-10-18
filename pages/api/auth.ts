import { mongooseConnect } from "@/lib/mongoos";
import { User } from "@/models/user";

export default async function handler(req: any, res: any) {
await mongooseConnect();
const { method } = req;

if(method == "POST"){
    const phoneNumber = req.body.data
    console.log('phoneNumber', phoneNumber)  
    if(phoneNumber.length > 0){
        var OTP = Math.floor(1000 + Math.random() * 9000);
        if(OTP){
            res.json(OTP)
        }
    }  
}
}