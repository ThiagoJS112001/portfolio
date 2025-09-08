# Guia de Setup do Portfolio React

## Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

### 1. Node.js (versão 18 ou superior)
- Baixe em: https://nodejs.org/
- Escolha a versão LTS (recomendada)
- Siga o assistente de instalação

### 2. Verificar instalação
Abra o terminal/PowerShell e execute:
```bash
node --version
npm --version
```

## Instalação do Projeto

### Passo 1: Instalar dependências
```bash
npm install
```

### Passo 2: Executar em desenvolvimento
```bash
npm run dev
```

O projeto estará disponível em: http://localhost:3000

### Passo 3: Build para produção
```bash
npm run build
```

### Passo 4: Executar versão de produção
```bash
npm start
```

## Deploy no Vercel

### Método 1: Através do site
1. Acesse https://vercel.com
2. Faça login com GitHub
3. Importe o repositório
4. Configure se necessário
5. Deploy automático

### Método 2: Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
npx vercel --prod
```

## Estrutura de Scripts

- `npm run dev` - Desenvolvimento (hot reload)
- `npm run build` - Build para produção
- `npm start` - Servir versão de produção
- `npm run lint` - Verificar código

## Troubleshooting

### Erro: "npm não é reconhecido"
- Node.js não está instalado ou não está no PATH
- Reinstale o Node.js e reinicie o terminal

### Erro: "Module not found"
- Execute: `npm install`
- Delete node_modules e package-lock.json, depois: `npm install`

### Erro de TypeScript
- Execute: `npm run build` para verificar erros
- Verifique se todas as dependências estão instaladas
