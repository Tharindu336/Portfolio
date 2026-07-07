# Tharindu Abeysinghe Portfolio

Minimalist cyberpunk portfolio built with Vite, React, Tailwind CSS, Framer Motion, and public GitHub project links.

## Local Development

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://127.0.0.1:5173/`.

## Build

```powershell
npm.cmd run build
```

The production output is generated in `dist/`.

## Deploy on Vercel Free

1. Push this folder to a GitHub repository.
2. Go to `https://vercel.com/new`.
3. Import the GitHub repository.
4. Vercel should detect Vite automatically.
5. Use these settings if asked:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click Deploy.

No environment variables are required for the current static portfolio.
