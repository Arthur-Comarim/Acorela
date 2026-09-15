# ACORELA Landing Page

Landing page profissional para a ACORELA (Associação de Cotistas do Resort do Lago), desenvolvida em **HTML, CSS e JavaScript puro**.

##  Estrutura de Arquivos

```
acorela-landing-standalone/
├── index.html          # Arquivo HTML principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Interatividade JavaScript
└── README.md           # Este arquivo
```

##  Como Usar

### Opção 1: Abrir no VS Code (Recomendado)

1. **Abra a pasta do projeto no VS Code:**
   - Abra o VS Code
   - Clique em `File` → `Open Folder`
   - Selecione a pasta `acorela-landing-standalone`

2. **Instale a extensão Live Server:**
   - Procure por "Live Server" na aba Extensions do VS Code
   - Clique em "Install"

3. **Inicie o servidor:**
   - Clique com botão direito no arquivo `index.html`
   - Selecione "Open with Live Server"
   - A página abrirá automaticamente no seu navegador

### Opção 2: Abrir Diretamente no Navegador

1. Clique com botão direito no arquivo `index.html`
2. Selecione "Open with" e escolha seu navegador preferido

### Opção 3: Usar um Servidor Local Simples

Se você tiver Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse `http://localhost:8000` no seu navegador.

##  Paleta de Cores

- **Teal Escuro:** `#2d4a4a` (Fundo principal, header, footer)
- **Teal Claro:** `#4dd0e1` (Destaque, divisores)
- **Laranja:** `#ff9500` (Botões, CTA)
- **Verde:** `#22c55e` (Divisores)
- **Branco:** `#ffffff` (Texto em fundos escuros)

##  Tipografia

- **Headers:** Poppins (Google Fonts)
- **Corpo:** Lora (Google Fonts)

##  Recursos

-  Design responsivo (mobile, tablet, desktop)
-  Animações suaves ao scroll
-  Botões com efeito ripple
-  Navegação suave
-  Integração com contatos (Email, WhatsApp, Instagram)
-  Seções: Header, Sobre, Conectar, Depoimentos, Missão/Visão/Valores, Fortalecer, Portal de Informações, Footer

##  Seções da Landing Page

1. **Header** - Logo e apresentação da ACORELA
2. **About** - Descrição da organização
3. **Connect** - Seção de conexão com mockup de app
4. **Testimonials** - Depoimentos de membros
5. **Mission, Vision, Values** - Pilares da organização
6. **Strengthen** - Chamada para ação com mosaico de comunidade
7. **Information Portal** - Portal de documentos e agendas
8. **Footer** - Informações de contato e endereço

## 🔧 Personalização

### Alterar Cores

Abra `css/styles.css` e procure pelas variáveis de cor no início do arquivo:

```css
/* Cores principais */
#2d4a4a - Teal escuro
#4dd0e1 - Teal claro
#ff9500 - Laranja
```

### Alterar Textos

Abra `index.html` e edite o conteúdo das seções conforme necessário.

### Adicionar Imagens

1. Crie uma pasta `images` na raiz do projeto
2. Adicione suas imagens lá
3. Atualize os `src` das imagens no `index.html`

Exemplo:
```html
<img src="images/sua-imagem.jpg" alt="Descrição">
```

##  Responsividade

A página é totalmente responsiva com breakpoints em:
- **Mobile:** até 480px
- **Tablet:** até 768px
- **Desktop:** 1024px+

##  Funcionalidades JavaScript

- Scroll suave para links internos
- Animações ao entrar em viewport
- Efeito ripple nos botões
- Integração com contatos externos
- Alertas customizados

##  Contatos

Os ícones de contato no footer estão configurados para:
- **Email:** contato@acorela.com.br
- **WhatsApp:** +55 62 99999-9999
- **Instagram:** @acorela

Atualize esses valores em `index.html` conforme necessário.


##  Licença

Este projeto foi desenvolvido para a ACORELA. Todos os direitos reservados.

---

