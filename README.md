# Quadrado Mágico

Projeto de quadrados mágicos preparado para rodar direto no GitHub Pages (ou qualquer host estático).

## Como usar
- Abra `index.html` no navegador ou ative o GitHub Pages apontando para a branch principal.
- Os estilos ficam em `static/css` e as imagens em `static/`.
- A lógica de geração dos quadrados está em `static/js/magic.js`, usada pelas páginas `quadrado1.html` a `quadrado5.html`.
- Os campos de configuração atualizam o quadrado automaticamente; os botões continuam disponíveis para gerar outro desafio. A lógica compartilhada está em `static/js/auto-geracao.js`.
- A digitação aguarda uma pausa de 250 ms e campos incompletos preservam o desafio atual. Alterar a configuração reinicia as respostas, como o botão de novo desafio.
- Na página n × n, a ordem aceita valores de 3 a 100 para limitar o custo de renderização; a quantidade de números preenchidos é ajustada ao tamanho do quadrado.

## Desenvolvimento local
- Basta abrir `index.html` em um navegador; não precisa de servidor Python.

Autor: Antônio Duda Oliveira da Silva
