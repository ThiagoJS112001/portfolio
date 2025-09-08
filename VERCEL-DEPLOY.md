# Deploy no Vercel - Guia Completo

## 🚀 Método 1: Deploy via Dashboard (Recomendado)

### Pré-requisitos
1. Conta no GitHub
2. Código do portfolio no repositório GitHub
3. Conta no Vercel (gratuita)

### Passos:

#### 1. Preparar o Repositório
```bash
# Criar repositório Git (se ainda não existe)
git init
git add .
git commit -m "Initial commit - Portfolio React"

# Criar repositório no GitHub e fazer push
git remote add origin https://github.com/SEU_USUARIO/portfolio-react.git
git branch -M main
git push -u origin main
```

#### 2. Deploy no Vercel
1. Acesse https://vercel.com
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório do portfolio
5. Configure as opções (geralmente não precisa alterar nada)
6. Clique em "Deploy"

#### 3. Configurações Automáticas
O Vercel detectará automaticamente:
- ✅ Framework: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

#### 4. URL Final
Após o deploy, você receberá uma URL como:
- `https://portfolio-react-seu-usuario.vercel.app`
- Opcionalmente, configure um domínio customizado

## 🛠️ Método 2: Deploy via CLI

### Instalação da CLI
```bash
npm install -g vercel
```

### Login
```bash
vercel login
```

### Deploy
```bash
# Deploy de preview
vercel

# Deploy de produção
vercel --prod
```

## 📁 Estrutura de Deploy

O Vercel fará build do seu projeto e o resultado será:

```
.next/ (gerado automaticamente)
├── static/
├── server/
└── ...

public/ (servido estaticamente)
├── images/
└── ...
```

## ⚙️ Configurações Avançadas

### Variáveis de Ambiente
Se precisar de variáveis de ambiente:

1. No dashboard Vercel → Settings → Environment Variables
2. Ou crie arquivo `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

### Domínio Customizado
1. Dashboard Vercel → Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruções

### Analytics
```javascript
// next.config.js
module.exports = {
  experimental: {
    analytics: true
  }
}
```

## 🔄 Deploy Automático

### Configuração Git
O Vercel monitora automaticamente:
- ✅ Push para `main` → Deploy de produção
- ✅ Push para outras branches → Deploy de preview
- ✅ Pull Requests → Deploy de preview

### Configurar Branches
1. Settings → Git → Production Branch
2. Defina a branch principal (geralmente `main`)

## 📊 Monitoramento

### Analytics Vercel
- Dashboard → Analytics
- Visualize pageviews, performance, etc.

### Performance Insights
- Lighthouse score automático
- Web Vitals tracking
- Sugestões de otimização

## 🐛 Troubleshooting

### Build Errors
```bash
# Teste local antes do deploy
npm run build

# Verificar logs no Vercel
# Dashboard → Deployments → Clique no deploy → View Function Logs
```

### Common Issues

#### 1. TypeScript Errors
```bash
# Verificar erros localmente
npx tsc --noEmit
```

#### 2. Missing Dependencies
```bash
# Verificar package.json
npm install
```

#### 3. Environment Variables
```bash
# Verificar se variáveis estão definidas no Vercel
# Settings → Environment Variables
```

#### 4. Build Size
```bash
# Verificar tamanho do build
npm run build
npx @next/bundle-analyzer
```

## 🌐 URLs de Deploy

### Preview Deploys
- Cada commit gera uma URL única
- Exemplo: `https://portfolio-react-git-feature-seu-usuario.vercel.app`

### Production Deploy
- URL principal do projeto
- Exemplo: `https://portfolio-react-seu-usuario.vercel.app`

## 🔗 Configuração Completa

### 1. Arquivo `vercel.json` (opcional)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["cle1"],
  "github": {
    "enabled": true
  }
}
```

### 2. GitHub Actions (opcional)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📈 Otimizações Pós-Deploy

### 1. SEO
- Configurar `sitemap.xml`
- Meta tags otimizadas (já incluídas)
- Structured data

### 2. Performance
- Image optimization (automático no Vercel)
- Code splitting (automático no Next.js)
- Caching headers

### 3. Analytics
- Google Analytics
- Vercel Analytics
- Search Console

## ✅ Checklist Final

Antes do deploy, verifique:

- [ ] `npm run build` executa sem erros
- [ ] Todas as imagens estão em `/public/images/`
- [ ] Links externos funcionam
- [ ] Responsividade testada
- [ ] Performance verificada (Lighthouse)
- [ ] Meta tags configuradas
- [ ] Favicon adicionado
- [ ] README atualizado

## 🎉 Sucesso!

Após seguir este guia, seu portfolio estará:
- ✅ Online no Vercel
- ✅ Deploy automático configurado
- ✅ Performance otimizada
- ✅ Monitoramento ativo

**URL final:** Sua aplicação estará acessível em poucos minutos!

---

💡 **Dica:** Mantenha o repositório GitHub sempre atualizado para aproveitar o deploy automático do Vercel.
