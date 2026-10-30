# Cloudflare Worker

Publica ejecutando `npm install` y `npx wrangler deploy`. En Workers & Pages → tu Worker → Settings → Variables and Secrets configura:
- `GEMINI_API_KEY` como **Secret**.
- `GEMINI_MODEL` como variable de texto con un ID habilitado en Google AI Studio.
- `ALLOWED_ORIGIN` como el origen exacto de Pages, por ejemplo `https://mi-web.pages.dev`.

No pongas la clave en Vite, .env, Git o navegador. Desarrollo local: crea .dev.vars (ignorado por Git) con esas tres variables y ejecuta `npx wrangler dev`.
