# Portfolio React - Thiago Schneider

Este é o portfólio pessoal de Thiago Schneider, desenvolvedor Oracle APEX, migrado para React com TailwindCSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Animações
- **React Hooks** - Gerenciamento de estado

## 🎯 Funcionalidades

- ✅ Design responsivo (desktop e mobile)
- ✅ Navegação suave entre seções
- ✅ Animações interativas
- ✅ Barras de progresso de habilidades animadas
- ✅ Menu mobile hamburger
- ✅ Otimizado para SEO
- ✅ Compatível com Vercel

## 📁 Estrutura do Projeto

```
portfolio-react/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── images/
└── config files...
```

## 🛠️ Instalação e Uso

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Iniciar versão de produção:**
   ```bash
   npm start
   ```

## 🌐 Deploy no Vercel

1. Faça push do código para um repositório Git
2. Conecte sua conta Vercel ao repositório
3. Configure as variáveis de ambiente se necessário
4. Deploy automático será realizado

### Deploy Manual:
```bash
npm run build
npx vercel --prod
```

## 📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🎨 Customização

### Cores
As cores estão definidas no `tailwind.config.js` e podem ser facilmente alteradas:

```javascript
colors: {
  primary: '#2563eb',
  secondary: '#64748b',
  accent: '#06b6d4',
  // ...
}
```

### Animações
As animações são feitas com Framer Motion e podem ser customizadas nos componentes.

## 📞 Contato

- **Email:** thiagoschneider2021@gmail.com
- **LinkedIn:** [Thiago Schneider](https://www.linkedin.com/in/thiago-jacinto-schneider-001858219)
- **GitHub:** [ThiagoJS112001](https://github.com/ThiagoJS112001)

---

© 2024 Thiago Schneider. Todos os direitos reservados.
