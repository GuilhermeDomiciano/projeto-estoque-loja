//So pra nao quebrar o vercel

export async function GET(request: Request) {
    return new Response("Hello, World!", { status: 200 });
  }
  