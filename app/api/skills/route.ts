import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export const GET = async (_:Request) => {
    try {
        const skills = await db.skill.findMany({
            select:{
                name: true,
                level: true,
            }
        });
        return NextResponse.json(skills)
        return NextResponse.json({})
    } catch (error) {
        return new NextResponse("Internal Error", {status: 500})
    }
}

export const dynamic = "force-static"