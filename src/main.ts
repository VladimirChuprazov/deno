import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

const port = Deno.env.get("PORT") || 1993;

async function handler(request: Request): Promise<Response> {
  console.log(request);
  const resp = await fetch("https://api.github.com/users/denoland", {
    headers: {
      accept: "application/json",
    },
  });
  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
}

await serve(handler, { port: Number(port) });

console.log(`Listening on http://localhost:${port}`);
