import { NextResponse } from "next/server";
import { snap } from "@/lib/midtrans";

export async function POST(req: Request) {
    

  try {

    const body = await req.json();

    const transaction =
      await snap.createTransaction({

        transaction_details: {

          order_id: body.orderId,

          gross_amount: body.price,

        },

        customer_details: {

          first_name: "Customer",

        },

      });

    return NextResponse.json({

      token: transaction.token,

      redirect_url: transaction.redirect_url,

    });

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(

      {
        message: error.message,
      },

      {
        status: 500,
      }

    );

  }

}