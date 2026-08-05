const TWIML = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial record="record-from-answer-dual" timeout="15" action="/fallback-call">
    <Number>+13105677434</Number>
  </Dial>
</Response>`;

const EMPTY_TWIML = `<?xml version="1.0" encoding="UTF-8"?>
<Response></Response>`;

function xmlResponse(body: string) {
  return new Response(body, {
    headers: { "Content-Type": "text/xml" },
  });
}

export async function GET() {
  return xmlResponse(TWIML);
}

export async function POST(request: Request) {
  const body = await request.text();
  if (body.includes("DialCallStatus")) {
    return xmlResponse(EMPTY_TWIML);
  }
  return xmlResponse(TWIML);
}
