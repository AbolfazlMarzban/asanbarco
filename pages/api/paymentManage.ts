import LocalDate from "@/helpers/date";
import LocalTime from "@/helpers/time";
import { mongooseConnect } from "@/lib/mongoos";
import { cargoOwners } from "@/models/cargoOwners";
import { payments } from "@/models/payments";
import axios from "axios";


export default async function handler(req: any, res: any) {
  await mongooseConnect();
  const { method } = req;
  if(method == "POST"){
    const date = LocalDate()
    const time = LocalTime()
    const userID = req.body.userID
    const payAmount = req.body.payAmount
    const user = await cargoOwners.find({_id:userID})
    // console.log('user', user)
   var code = '942ab142-ed88-4412-8c9f-ab8658074bcf' 
    const result = await axios.post('https://api.zarinpal.com/pg/v4/payment/request.json', {
      "merchant_id": code,
      "amount": payAmount,
      "callback_url": "/profile",
      "description": "Transaction description.",
      "metadata": {"mobile": user[0].phoneNumber, "email": "info.test@gmail.com"}
    },
    {
      headers: {
        "Content-Type": 'application/json',
        "Accept": '*/*'
      }
    })
    if(result){
      const wallet =  await payments.create({
        "userID": userID,
        "date": date,
        "amount": payAmount,
        "time": time
      }) 
      const path = "https://www.zarinpal.com/pg/StartPay/" + result.data.data.authority
      res.json(path)
    }
  }
  if(method == "GET"){
    const userID = req.query.userID
    const result = await payments.find({userID: userID})
    if(result){
      res.json(result)
    }
  }
}