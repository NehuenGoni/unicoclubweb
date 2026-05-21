import { NextRequest, NextResponse } from "next/server";

// ─── Google Sheets via Apps Script Web App ────────────────────
// Setup steps (one-time, done by the developer):
//  1. Open the Google Sheet that will store email subscribers
//     (headers suggested: Timestamp | Email).
//  2. Extensions → Apps Script → paste the script below → Save.
//  3. Deploy → New deployment → Web app:
//       - Execute as: Me
//       - Who has access: Anyone
//  4. Copy the deployment URL and add it to .env.local (and Vercel env):
//       SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
//
// Apps Script to paste (doPost function):
// ─────────────────────────────────────────────────────────────
// function doPost(e) {
//   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//   var data  = JSON.parse(e.postData.contents);
//   sheet.appendRow([new Date(), data.email]);
//   return ContentService.createTextOutput(JSON.stringify({ ok: true }))
//     .setMimeType(ContentService.MimeType.JSON);
// }
// ─────────────────────────────────────────────────────────────

const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!SHEETS_WEBHOOK_URL) {
      // During development without a webhook configured, log and return ok.
      console.warn("[contact] SHEETS_WEBHOOK_URL not set – submission logged only.");
      console.log({ email });
      return NextResponse.json({ ok: true });
    }

    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error(`Sheets webhook responded with ${res.status}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ error: "Internal error." }, { status: 500 });
  }
}
