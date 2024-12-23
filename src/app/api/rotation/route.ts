import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;
  if (!apiKey) {
    console.error("API key not found");

    return NextResponse.json({ error: "API key not found" }, { status: 500 });
  }

  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch data : ${res.status}` },
        { status: res.status }
      );
    }
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.log("Error fetching :", error);
    return NextResponse.json(
      { error: "Unexpected error accurred" },
      { status: 500 }
    );
  }
}
