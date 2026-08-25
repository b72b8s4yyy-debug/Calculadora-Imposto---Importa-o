# Calculadora de Custo de Importação — China → Brasil

App em React + Vite + Tailwind. NCM buscado da Tabela NCM vigente (25/08/2026) e ICMS
puxado automaticamente por estado. II, IPI, PIS e COFINS ficam editáveis (não vêm de
nenhuma tabela embutida).

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy no Vercel

### Opção A — CLI (mais rápido)

```bash
npm install -g vercel
cd caminho/para/esta/pasta
vercel
```

Siga os prompts (login, nome do projeto, etc). No fim ele já te dá a URL pública.
Para subir uma nova versão depois: `vercel --prod`.

### Opção B — GitHub + painel do Vercel

1. Crie um repositório no GitHub e suba esta pasta:
   ```bash
   git init
   git add .
   git commit -m "Calculadora de importação"
   git branch -M main
   git remote add origin <url-do-seu-repo>
   git push -u origin main
   ```
2. Em vercel.com → **Add New... → Project** → importe o repositório.
3. O Vercel detecta Vite automaticamente (Build Command: `npm run build`,
   Output Directory: `dist` — já configurado no `vercel.json`). Clique em **Deploy**.

## Estrutura

- `src/App.jsx` — a calculadora inteira (catálogo NCM, tabela ICMS por estado, motor de cálculo, UI)
- `src/main.jsx` — bootstrap do React
- `src/index.css` — Tailwind
- `vercel.json` — config de build/rota para o Vercel
