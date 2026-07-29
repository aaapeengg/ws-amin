import { NextResponse } from "next/server";
import { checkNickname } from "@/lib/vipreseller";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await checkNickname({
      code: body.code,
      target: body.target,
      additionalTarget: body.additionalTarget,
    });

    return NextResponse.json(result);

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        result: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );

  }
}