# NETSORA AI Architect

Chatbot para convertir ideas en especificaciones de productos digitales. Frontend React + TypeScript + Vite; backend Cloudflare Workers; IA Gemini.

## Cloudflare deployment

### 1. Worker
Ejecuta `npm install` y `npx wrangler deploy`. En Workers & Pages → netsora-ai-architect-api → Settings → Variables and Secrets configura:
- `GEMINI_API_KEY` como **Secret**.
- `GEMINI_MODEL` como variable de texto con un ID de modelo habilitado en tu cuenta.
- `ALLOWED_ORIGIN` como el origen exacto de Pages, por ejemplo `https://mi-app.pages.dev`.

También puedes crear el secreto con `npx wrangler secret put GEMINI_API_KEY`. La clave nunca debe incluirse en Vite, el navegador o Git.

### 2. Pages
Conecta este repositorio en Cloudflare Pages. Preset Vite, build command `npm run build`, output `dist`. Variable opcional `VITE_API_BASE_URL` con la URL pública del Worker. También puedes configurarla desde Ajustes dentro de la aplicación.

## Local
```bash
npm install
npm run dev
npm test
npm run build
```
Para desarrollo con IA crea `.dev.vars` (ignorado por Git) con GEMINI_API_KEY, GEMINI_MODEL y ALLOWED_ORIGIN.

## Seguridad y límites
No subas secretos ni `.dev.vars`. El historial es temporal y no hay cuentas ni persistencia nube en esta versión. El rate limit en memoria es básico; para producción pública añade Cloudflare Rate Limiting/WAF y autenticación según el caso. `GET /api/health` revisa la configuración sin revelar la clave.
