import { mongooseConnect } from "@/lib/mongoos";

export default async function handler(req: any, res: any) {
  await mongooseConnect();
  const { method } = req;
  if(method == "POST"){
    const userID = req.body.userID
    const payAmount = req.body.payAmount
    
  }
}