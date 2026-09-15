# 📁 Pasta de Certificados

Imagens e PDFs dos certificados usados na seção **Certificações & Cursos** do portfólio.

## 📂 Arquivos atuais

| Arquivo | Certificado | Tipo |
|---------|-------------|------|
| `Oracle Foundations Associate.jpg` | Oracle Cloud Infrastructure 2025 Certified Foundations Associate | Imagem |
| `Oracle APEX do Básico ao Avançado.jpg` | Oracle APEX do básico ao avançado (Udemy) | Imagem |
| `The Complete Oracle APEX Fundamentals Course (2022).jpg` | The Complete Oracle APEX Fundamentals Course (Udemy) | Imagem |
| `79f7c0a17e78fc91e96e33d50da8fca9.jpg` | Fisk Centro de Ensino | Imagem |
| `401fe7194d26b3fc72a1013cfeeb82f2.jpg` | Fisk Centro de Ensino - Complemento | Imagem |
| `efset-english-c1.pdf` ⚠️ | EF SET English Certificate 62/100 (C1 Advanced) | PDF |

> ⚠️ **EF SET:** o arquivo `efset-english-c1.pdf` ainda não foi adicionado. Coloque o PDF do EF SET nesta pasta com exatamente esse nome.

## 🔀 Sobre os 2 arquivos "hash" do Fisk

Ambos os arquivos com nome hash (`401fe...` e `79f7c...`) são certificados do Fisk. Eles aparecem no portfólio como:

1. **Fisk Centro de Ensino** → `79f7c0a17e78fc91e96e33d50da8fca9.jpg`
2. **Fisk Centro de Ensino - Complemento** → `401fe7194d26b3fc72a1013cfeeb82f2.jpg`

Se quiser dar títulos mais descritivos (ex: "Diploma", "Certificado de Conclusão"), basta editar o array `certifications` em `components/Certifications.tsx`.

## 📌 Recomendações para novos certificados

- **Formato:** `.png`, `.jpg` (imagens) ou `.pdf`
- **Tamanho recomendado para imagens:** largura entre 1200–1600 px
- **Orientação:** paisagem (horizontal) funciona melhor
- **Qualidade:** use o PDF/imagem original do certificado para melhor nitidez
- **Nome do arquivo:** prefira nomes sem espaços ou acentos (ex: `oracle-foundations.jpg`) para URLs mais limpas

## 🔧 Como adicionar uma nova certificação

1. Salve o arquivo (imagem ou PDF) nesta pasta
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
  imageUrl: '/images/certifications/nome-do-arquivo.jpg',
  fileType: 'image', // ou 'pdf' para PDFs
}
```

A modal detecta automaticamente se o arquivo é PDF (pela extensão ou pelo campo `fileType`) e exibe o conteúdo correto.
