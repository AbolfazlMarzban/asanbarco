import { mongooseConnect } from "@/lib/mongoos";
import { User } from "@/models/user";

export default async function handler(req: any, res: any) {
await mongooseConnect();
const { method } = req;
let OTP: any = ''
if(method == "GET"){
    const phoneNumber = req.query.data
    console.log('pg', phoneNumber)
    if(phoneNumber.length > 0){
         OTP = Math.floor(1000 + Math.random() * 9000);
         console.log('otp', OTP)
        if(OTP){
            res.json(true)
        }
    }  
}
if(method == "POST"){
    const userOtp = req.body.data
    console.log('userOtp', userOtp)
    if(userOtp == OTP){
        res.json(true)
    } else {
        res.json(false)
    }
}
}