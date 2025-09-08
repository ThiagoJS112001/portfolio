# Guia Rápido - Testar no Celular

## 🔧 Pré-requisitos
1. Certifique-se que Node.js está instalado
2. Celular e computador na mesma rede Wi-Fi

## 📱 Método 1: Next.js Dev Server (Recomendado)

### Passo 1: Instalar dependências
```bash
npm install
```

### Passo 2: Executar servidor desenvolvimento
```bash
npm run dev -- --hostname 0.0.0.0
```
ou
```bash
npx next dev --hostname 0.0.0.0
```

### Passo 3: Acessar no celular
No navegador do celular, digite:
```
http://192.168.1.8:3000
```

## 📱 Método 2: Servidor HTTP Simples

### Se não conseguir instalar Node.js, use Python:
```bash
# Python 3
python -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

### Acesse no celular:
```
http://192.168.1.8:8000
```

## 📱 Método 3: Ngrok (Túnel Público)

### Instalar ngrok:
```bash
npm install -g ngrok
```

### Após executar o servidor local:
```bash
# Em outro terminal
ngrok http 3000
```

### Resultado:
- URL pública para testar (ex: https://abc123.ngrok.io)
- Funciona mesmo fora da sua rede

## 📱 Método 4: Vercel Preview Deploy

### Deploy temporário:
```bash
npx vercel
```
- Gera URL pública instantânea
- Perfeito para testes

## 🔍 Verificar Conectividade

### Teste de conexão:
No celular, acesse primeiro:
```
http://192.168.1.8
```
Se não funcionar, verifique firewall do Windows.

## 🛡️ Configurar Firewall (se necessário)

### Windows Defender:
1. Painel de Controle → Sistema e Segurança → Firewall do Windows
2. Permitir programa através do firewall
3. Adicionar Node.js ou navegador
4. Ou temporariamente desabilitar firewall

## 📋 Checklist de Problemas

- [ ] Computador e celular na mesma rede Wi-Fi?
- [ ] IP correto (192.168.1.8)?
- [ ] Servidor rodando na porta correta?
- [ ] Firewall bloqueando conexão?
- [ ] Antivírus interferindo?

## 🌐 URLs para Testar

Depois de executar `npm run dev`:

### Computador:
- http://localhost:3000
- http://127.0.0.1:3000
- http://192.168.1.8:3000

### Celular:
- http://192.168.1.8:3000

## ⚡ Comando Rápido

Execute este comando único:
```bash
npm install && npm run dev -- --hostname 0.0.0.0
```

Depois acesse no celular: **http://192.168.1.8:3000**
