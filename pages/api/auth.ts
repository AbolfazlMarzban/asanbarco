import { mongooseConnect } from "@/lib/mongoos";
import { cargoOwners } from "@/models/cargoOwners";
import { Otp } from "@/models/otp";
import axios from "axios";

export default async function handler(req: any, res: any) {
  await mongooseConnect();
  const { method } = req;
  if (method == "GET") {
    const phoneNumber = req.query.data;
    console.log('phone', phoneNumber)
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    console.log("date", date);
    console.log("time", time);
    if (phoneNumber.length > 0) {
      var OTP = Math.floor(1000 + Math.random() * 9000);
      console.log("otp", OTP);
      const sms =  await sendSMS(OTP);
      if(sms){
        const check = await Otp.findOne({ phoneNumber: phoneNumber });
        console.log("res", check);
        if (check) {
          await Otp.updateOne(
            { phoneNumber: phoneNumber },
            {
              phoneNumber,
              date,
              OTP,
              time,
            }
          );
        } else {
          await Otp.create({
            phoneNumber,
            date,
            OTP,
            time,
          });
        }
        if (OTP) {
          res.json(true);
        }
      }
    }
  }
  if (method == "POST") {
    const userOtp = req.body.data;
    const phoneNumber = req.body.phoneNumber;
    const result = await Otp.findOne({ phoneNumber: phoneNumber });
    console.log("res", res);
    if (userOtp == result.OTP) {
      var user = await cargoOwners.findOne({ phoneNumber: phoneNumber });
      if (!user) {
        await cargoOwners.create({ phoneNumber });
        user = await cargoOwners.findOne({ phoneNumber: phoneNumber });
        res.json(user)
      } else {
        res.json(user)
      }
    } else {
      res.json(false);
    }
  }
  async function sendSMS(OTP: any){
    try{
    const sms =   await axios.post('http://rest.ippanel.com/v1/messages/patterns/send', {
"originator": "+985000125475",
"recipient": "989183933164",
 "values": {
"code": OTP
}},
{
  headers: {
    "Content-Type": 'application/json',
    "Authorization": 'AccessKey C8Zqydg8JJCB98Ladw9Lj8M_4TAORhlhh8mrUqJ088I='
  }
}
)
if(sms){
  return true
} else {
  return false
}
    } catch(error){
      console.log(error)
    }
  }
}
