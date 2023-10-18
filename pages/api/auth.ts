import { mongooseConnect } from "@/lib/mongoos";
import { cargoOwners } from "@/models/cargoOwners";
import { Otp } from "@/models/otp";

export default async function handler(req: any, res: any) {
  await mongooseConnect();
  const { method } = req;
  if (method == "GET") {
    const phoneNumber = req.query.data;
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    console.log("date", date);
    console.log("time", time);
    if (phoneNumber.length > 0) {
      var OTP = Math.floor(1000 + Math.random() * 9000);
      console.log("otp", OTP);
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
  if (method == "POST") {
    const userOtp = req.body.data;
    const phoneNumber = req.body.phoneNumber;
    const result = await Otp.findOne({ phoneNumber: phoneNumber });
    console.log("res", res);
    if (userOtp == result.OTP) {
      var user = await cargoOwners.findOne({ phoneNumber: phoneNumber });
      if (!user) {
        let data = {
            phone: phoneNumber,
            name: "",
            nationalNumber: 0,
            businessName: "",
            birthDate: 0,
            bankCard: 0,
            profilePic: "",
            nationalCardPic: "",
            logoPic: "",
          }
        // await cargoOwners.create({ data.phone, data.name, data.nationalNumber, data.businessName, data.birthDate, data.bankCard, data.profilePic, data.nationalCardPic, data.logoPic });
      }
      res.json(true);
    } else {
      res.json(false);
    }
  }
}
