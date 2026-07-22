# 📜 GEMINI.md | Master Blueprint Namy Goto

Este documento contém todas as especificações técnicas, design tokens e assets necessários para a implementação da Landing Page.

---

## 🎯 1. Visão Geral & Core Mandates
- **Objetivo:** Landing Page de alta conversão para influencer (Lifestyle/Beleza/Cultura Japonesa).
- **Estética:** Retrô, Girly, Y2K, "Old Internet" (2000s/2010s).
- **Stack:** HTML5 Semântico, CSS3 Moderno (Flexbox/Grid/Variables), Vanilla JS.
- **Performance:** Pixel-Perfect, Zero Bloat, Core Web Vitals optimized.

---

## 🎨 2. Design System (Tokens)

### 2.1 Paleta de Cores
- **Primária:** `#D1202D` (Vermelho)
- **Secundária:** `#F49CBB` (Rosa)
- **Fundo:** `#F0EEE6` (Bege)
- **Destaque:** `#CBEEF3` (Azul Claro)
- **Texto/Contraste:** `#24110C` (Marrom Profundo)

### 2.2 Tipografia
- **Display/Cursive:** `La Belle Aurore` (Regular, 48px base) - *Usar para nomes e títulos artísticos.*
- **UI/Bold:** `Inter` (Extra Bold) - *Usar para botões e menu.*
- **Body:** `Inter` (Bold, 14px) - *Usar para textos biográficos.*

---

## 🏗️ 3. Estrutura de Arquivos Recomendada
```text
/
├── index.html
├── js/script.js
└── css/
    ├── global.css      (Reset, Tokens, Botões)
    ├── header.css      (Nav & Mobile Menu)
    ├── hero.css        (Animações & Marquee)
    ├── bio.css         (Sticky behavior & Layout)
    ├── portfolio.css   (Video Switcher & Cards)
    └── cta.css         (Teclado UI & Contact)
```

---

## 🛠️ 4. Especificações por Seção

### 4.1 Header & Menu Mobile
- **Navegação:** Sobre, Portfólio, Contato.
- **Mobile:** Menu hambúrguer no canto superior direito.
- **Overlay:** Fundo com estrelas (SVG) e itens divididos por um path SVG vermelho.

### 4.2 Hero (Seção de Impacto)
- **Marquee:** Texto infinito `CREATOR&ITGIRL *` em rosa.
- **Animação Polaroid:** 3 fotos aparecem sequencialmente com curvaturas alternadas, finalizando com a polaroid principal centralizada.
- **Reveal:** A foto principal deve ter uma animação de "revelação" (brightness 0.6 -> 1.0).
- **H1:** "Namy goto" estilo autógrafo em cima das fotos + Coração SVG.

### 4.3 Bio (Sobre Mim) - [Sticky Effect]
- **Comportamento:** A seção Bio (`z-index: 1`) fica `sticky` no topo enquanto o usuário scrolla. A seção Portfólio (`z-index: 2`) sobe por cima dela gradualmente.
- **Visual:** Background com 4 estrelas (SVGs) espalhadas com blur.
- **Layout:** Imagem centralizada `imgbio.webp`. No Desktop, H2 e P alinhados horizontalmente com a imagem.

### 4.4 Portfólio (Interactive Video)
- **Switcher:** 4 botões (Beauty, Comidinhas, Lifestyle, Nipo) trocam o vídeo.
- **Moldura:** Borda sólida rosa (`#F49CBB`) de 6px, bordas arredondadas (28px).
- **Assets:** Vídeos localizados em `assets/videos/*.mp4`.

### 4.5 CTA (Contato)
- **Simulação de Teclado:** UI que imita um teclado de iPhone com as teclas "entre ♥ namy", "em ♥ goto", "♥ contato ♥".
- **Ação:** Botão "email" (mailto) integrado à base do teclado.
- **Título:** "Vamos ser" (Inter Bold Italic) + "parceiros?" (La Belle Aurore).

---

## 📦 5. Biblioteca de Assets (SVGs)

<details>
<summary>Clique para ver os SVGs</summary>

**Divisor Menu Mobile:**
```html
<svg width="219" height="5" viewBox="0 0 219 5" fill="none"><path d="M0 2.5H218.404" stroke="#D1202D" stroke-width="5"/></svg>
```

**Coração Hero:**
```html
<svg width="26" height="29" viewBox="0 0 26 29" fill="none"><path d="M2.95706 12.7552C5.69514 12.2621 8.94496 13.2782 11.9034 15.2505C12.6655 12.2472 13.4051 11.5076 13.7749 10.6298C14.1447 8.76579 15.6463 5.27691 18.1416 1.67588C18.8962 1.3098 19.8824 1.55635 20.8835 2.06064C21.8846 2.56494 23.1596 3.24427 23.3638 4.94444C23.8568 9.0497 23.7562 12.5759 23.106 14.5184C21.6006 19.0158 20.6462 25.6971 16.9949 26.7071C16.117 26.9499 15.0863 26.8052 14.1298 26.3261C9.8863 24.2006 4.1174 22.6502 1.93725 18.2239C1.44417 17.2228 1.44417 16.2367 1.57119 15.2356L1.57521 15.2039C1.70148 14.2076 1.86055 12.9527 2.95706 12.7552Z" stroke="#D1202D" stroke-width="3" stroke-linecap="round"/></svg>
```

**Hambúrguer Menu:**
```html
<svg width="40" height="30" viewBox="0 0 40 30" fill="none"><path d="M36.8421 24.7059C37.6531 24.7062 38.4328 24.9681 39.0198 25.4372C39.6067 25.9063 39.9558 26.5467 39.9948 27.2257C40.0338 27.9047 39.7596 28.5703 39.2291 29.0845C38.6986 29.5987 37.9525 29.9221 37.1453 29.9876L36.8421 30H3.15789C2.34691 29.9997 1.56717 29.7378 0.980239 29.2687C0.393308 28.7996 0.0441852 28.1592 0.00521208 27.4801C-0.0337611 26.8011 0.240404 26.1356 0.770896 25.6214C1.30139 25.1072 2.04754 24.7838 2.85474 24.7182L3.15789 24.7059H36.8421ZM36.8421 12.3529C37.6796 12.3529 38.4829 12.6318 39.0751 13.1282C39.6673 13.6247 40 14.298 40 15C40 15.702 39.6673 16.3753 39.0751 16.8718C38.4829 17.3682 37.6796 17.6471 36.8421 17.6471H3.15789C2.32037 17.6471 1.51715 17.3682 0.924926 16.8718C0.332706 16.3753 0 15.702 0 15C0 14.298 0.332706 13.6247 0.924926 13.1282C1.51715 12.6318 2.32037 12.3529 3.15789 12.3529H36.8421ZM36.8421 0C37.6796 0 38.4829 0.278886 39.0751 0.775306C39.6673 1.27173 40 1.94502 40 2.64706C40 3.3491 39.6673 4.02239 39.0751 4.51881C38.4829 5.01523 37.6796 5.29412 36.8421 5.29412H3.15789C2.32037 5.29412 1.51715 5.01523 0.924926 4.51881C0.332706 4.02239 0 3.3491 0 2.64706C0 1.94502 0.332706 1.27173 0.924926 0.775306C1.51715 0.278886 2.32037 0 3.15789 0H36.8421Z" fill="#F49CBB"/></svg>
```

*(Outros SVGs de Social e Background devem ser extraídos do Figma conforme necessário).*
</details>

---

## 🚀 6. Checklist de Entrega
- [ ] Mobile-First.
- [ ] Imagens em WebP/Avif.
- [ ] SEO Técnico (Person Schema).
- [ ] Acessibilidade (WCAG).
- [ ] Zero Frameworks.

---

## 📝 7. Estrutura Sugerida (HTML)
```html
<main>
  <section class="hero">...</section>
  <section class="bio">...</section>
  <section class="portfolio">...</section>
  <section class="cta">...</section>
  <footer class="footer">...</footer>
</main>
```
