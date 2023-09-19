import { NextResponse } from "next/server";
import {user} from "@/util/db";

// export function GET(){
//   const data= user;
//   return NextResponse.json(data,{status:200})
// }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const data= user;
  return NextResponse.json(data,{status:200})
}
