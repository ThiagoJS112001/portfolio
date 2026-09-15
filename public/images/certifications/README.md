# 📁 Pasta de Certificados

Coloque as imagens dos seus certificados nesta pasta usando **exatamente** os nomes abaixo:

| Arquivo | Certificado |
|---------|-------------|
| `oracle-oci-foundations.png` | Oracle Cloud Infrastructure 2025 Certified Foundations Associate |
| `efset-english-c1.png` | EF SET English Certificate 62/100 (C1 Advanced) |
| `oracle-apex-udemy-2023.png` | Oracle APEX do básico ao avançado (Udemy, nov/2023) |
| `fisk-2019.png` | Fisk Centro de Ensino |
| `oracle-apex-fundamentals-2022.png` | The Complete Oracle APEX Fundamentals Course (2022) |

## 📌 Recomendações

- **Formato preferido:** `.png` ou `.jpg`
- **Tamanho recomendado:** largura entre 1200–1600 px
- **Orientação:** paisagem (horizontal) funciona melhor
- **Qualidade:** use o PDF/imagem original do certificado para melhor nitidez

## 🔧 Como adicionar uma nova certificação

1. Salve a imagem nesta pasta com o nome correspondente
2. Edite `components/Certifications.tsx`
3. Adicione um novo objeto no array `certifications`:

```ts
{
  title: 'Nome do Curso',
  issuer: 'Instituição',
  date: 'mês de ano',
  expiration: 'mês de ano', // opcional
  category: 'Cloud' | 'APEX' | 'Idiomas' | 'Geral',
  highlight: true, // opcional - mostra badge "Destaque"
  imageUrl: '/images/certifications/nome-do-arquivo.png',
}
```

Se a imagem não for encontrada, o modal mostra uma mensagem amigável indicando o caminho esperado.
