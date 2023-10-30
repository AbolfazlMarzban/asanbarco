import { mongooseConnect } from "@/lib/mongoos";

export default async function handler(req: any, res: any) {
  await mongooseConnect();
  const { method } = req;
  if(method == "POST"){
    const userID = req.body.userID
    const payAmount = req.body.payAmount
   var code = '942ab142-ed88-4412-8c9f-ab8658074bcf' 
  }
}