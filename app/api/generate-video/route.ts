import { NextRequest, NextResponse } from "next/server";
import { generateVideo } from "../../../lib/replicate";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const prompt = body.prompt;

  console.log("API received prompt:", prompt);

  const video = await generateVideo(prompt);

  console.log("API generated video:", video);

  return NextResponse.json({ url: video });
}
