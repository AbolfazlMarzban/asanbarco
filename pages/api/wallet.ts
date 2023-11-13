import LocalDate from "@/helpers/date";
import LocalTime from "@/helpers/time";
import { mongooseConnect } from "@/lib/mongoos";
import { payments } from "@/models/payments";

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if(method == "POST"){
        let payAmount = req.query.payAmount
        let userID = req.query.userID
        let date = LocalDate()
        let time = LocalTime()

           const wallet =  await payments.create({
        "userID": userID,
        "date": date,
        "amount": payAmount,
        "time": time
      })
      
      const wallett =  await wallet.create({
        "userID": userID,
        "date": date,
        "amount": payAmount,
        "time": time
      })
      if(wallet){
        res.send(true)
      }
    }
}
