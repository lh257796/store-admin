import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    // using Clerk to authenticate userId
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });
    //dont forget to return the store as as response!!
    return NextResponse.json(store)
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Shit Internal error", { status: 500 });
  }
}