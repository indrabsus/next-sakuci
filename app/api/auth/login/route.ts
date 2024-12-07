
import { NextRequest, NextResponse } from "next/server";
type LoginResponse = {
    success: boolean;
    token: string;
    username?: string;
    id?: string;
    message?: string;
};
export async function POST(request: NextRequest){
    const req : LoginResponse = await request.json()
    console.log(req)
    return NextResponse.json({status: 200, message: "Success" })
}