// script.js
// Frontend simples em 1 arquivo JS
// Organização lógica estilo MVC (sem pastas)
// Idioma: Português | Padrão: camelCase

// =======================
// Modelo
// =======================

const portifolioModelo = {
  marca: {
    nome: "Dancode Solutions",
    tagline: "Operações confiáveis. Sistemas governáveis.",
  },

  identidade: {
    titulo: "Transformamos operações caóticas em sistemas confiáveis.",
    descricao:
      "Construímos soluções de software que reduzem retrabalho, aumentam previsibilidade e organizam decisões operacionais — sem virar commodity.",
    pontos: [
      "Tese clara: resolvemos problemas operacionais reais, não tarefas soltas.",
      "Foco em confiabilidade: dados governados, regras explícitas e rastreabilidade.",
      "Crescimento com margem: profundidade antes de volume indiscriminado.",
    ],
  },

  blocosInicio: [
    {
      titulo: "O que fazemos",
      texto:
        "Desenhamos e implementamos soluções digitais que organizam processos recorrentes e dão visibilidade confiável para decisões operacionais.",
    },
    {
      titulo: "Como geramos valor",
      texto:
        "Substituímos improviso por processo, planilha por dado governado e esforço repetitivo por automação, mantendo o software sustentável.",
    },
  ],

  solucoes: [
    {
      rotulo: "Soluções operacionais",
      titulo: "Sistemas de organização operacional",
      descricao:
        "Soluções enxutas e opinativas para estruturar rotinas críticas e consolidar dados que hoje vivem em planilhas e e-mails.",
      entregas: [
        "Centralização de informações críticas",
        "Regras e aprovações explícitas",
        "Histórico e rastreabilidade",
      ],
    },
    {
      rotulo: "Automação",
      titulo: "Automação de processos",
      descricao:
        "Eliminação de tarefas repetitivas e criação de fluxos confiáveis para reduzir erro humano.",
      entregas: [
        "Fluxos automatizados",
        "Alertas e validações",
        "Integrações entre sistemas",
      ],
    },
    {
      rotulo: "Produtos",
      titulo: "SaaS e soluções licenciáveis",
      descricao:
        "Soluções recorrentes com visão de produto, escalabilidade e governança.",
      entregas: [
        "Arquitetura escalável",
        "Parametrização como regra",
        "Modelo recorrente",
      ],
    },
    {
      rotulo: "Entrega rápida",
      titulo: "Landing pages estratégicas",
      descricao:
        "Presença digital moderna para validação comercial e campanhas pontuais.",
      entregas: [
        "Design moderno",
        "Alta performance",
        "Entrega rápida",
      ],
    },
  ],

  comoTrabalhamos: {
    titulo: "Como trabalhamos",
    descricao:
      "Clareza, disciplina e foco no problema antes da tecnologia.",
    pontos: [
      "Começamos pelo problema, não pela stack",
      "Fronteiras claras de escopo",
      "Soluções simples e sustentáveis",
      "Qualidade antes de velocidade",
    ],
  },

  paraQuemNaoE: {
    titulo: "Para quem não é",
    descricao:
      "Nem toda empresa é nosso cliente — e isso é intencional.",
    pontos: [
      "Quem busca software barato",
      "Demandas sem dono",
      "Projetos puramente estéticos",
      "Customização infinita",
    ],
  },

  contato: {
    titulo: "Contato",
    descricao:
      "Se sua empresa cresceu mais rápido do que sua organização interna, podemos ajudar a transformar caos em confiabilidade.",
    canais: [
      {
        rotulo: "E-mail",
        valor: "dancodesolutions@gmail.com",
        icone: "fa-solid fa-envelope",
        link: "mailto:dancodesolutions@gmail.com",
      },
      {
        rotulo: "WhatsApp",
        valor: "+55 51 99795-5292",
        icone: "fa-brands fa-whatsapp",
        link: "https://wa.me/5551997955292",
      },
      {
        rotulo: "LinkedIn",
        valor: "linkedin.com/in/daniel--melo",
        icone: "fa-brands fa-linkedin",
        link: "https://www.linkedin.com/in/daniel--melo/",
      },
    ],
    aviso: "Os links abrem em nova aba (exceto e-mail).",
  },
};

// =======================
// Utilitários
// =======================

function criarElemento(tag, opcoes = {}) {
  const elemento = document.createElement(tag);

  if (opcoes.classes) elemento.className = opcoes.classes;
  if (opcoes.texto !== undefined) elemento.textContent = opcoes.texto;
  if (opcoes.html !== undefined) elemento.innerHTML = opcoes.html;

  if (opcoes.atributos) {
    for (const [chave, valor] of Object.entries(opcoes.atributos)) {
      elemento.setAttribute(chave, valor);
    }
  }

  return elemento;
}

function limparElemento(elemento) {
  while (elemento.firstChild) elemento.removeChild(elemento.firstChild);
}

// =======================
// Visão
// =======================

const portifolioVisao = {
  elementoConteudo: null,

  iniciar() {
    this.elementoConteudo = document.getElementById("conteudo");
  },

  renderizarPagina(rota) {
    limparElemento(this.elementoConteudo);

    if (rota === "inicio") this.renderizarInicio();
    else if (rota === "solucoes") this.renderizarSolucoes();
    else if (rota === "comoTrabalhamos")
      this.renderizarLista(portifolioModelo.comoTrabalhamos);
    else if (rota === "paraQuemNaoE")
      this.renderizarLista(portifolioModelo.paraQuemNaoE);
    else if (rota === "contato") this.renderizarContato();
    else this.renderizarInicio();
  },

  renderizarInicio() {
    const secao = criarElemento("section", { classes: "cartao heroi" });

    secao.appendChild(
      criarElemento("h1", {
        classes: "tituloGrande",
        html: portifolioModelo.identidade.titulo.replace(
          "sistemas confiáveis",
          `<span class="destaque">sistemas confiáveis</span>`
        ),
      })
    );

    secao.appendChild(
      criarElemento("p", {
        classes: "subtitulo",
        texto: portifolioModelo.identidade.descricao,
      })
    );

    const lista = criarElemento("ul", { classes: "listaPontos" });
    for (const ponto of portifolioModelo.identidade.pontos) {
      const item = criarElemento("li", { classes: "itemPonto" });
      item.appendChild(criarElemento("span", { classes: "marcador" }));
      item.appendChild(criarElemento("span", { texto: ponto }));
      lista.appendChild(item);
    }

    secao.appendChild(lista);
    this.elementoConteudo.appendChild(secao);
  },

  renderizarSolucoes() {
    const secao = criarElemento("section", { classes: "cartao secao" });

    secao.appendChild(
      criarElemento("h1", { classes: "tituloGrande", texto: "Soluções" })
    );

    const grade = criarElemento("div", { classes: "gradeCartoes" });

    for (const solucao of portifolioModelo.solucoes) {
      const card = criarElemento("div", { classes: "cartao cartaoSolucao" });

      card.appendChild(
        criarElemento("div", { classes: "rotulo", texto: solucao.rotulo })
      );
      card.appendChild(
        criarElemento("h2", { classes: "tituloCartao", texto: solucao.titulo })
      );
      card.appendChild(
        criarElemento("p", { classes: "descricao", texto: solucao.descricao })
      );

      const lista = criarElemento("ul", { classes: "lista" });
      for (const entrega of solucao.entregas) {
        lista.appendChild(criarElemento("li", { texto: entrega }));
      }

      card.appendChild(lista);
      grade.appendChild(card);
    }

    secao.appendChild(grade);
    this.elementoConteudo.appendChild(secao);
  },

  renderizarLista(bloco) {
    const secao = criarElemento("section", { classes: "cartao secao" });

    secao.appendChild(
      criarElemento("h1", { classes: "tituloGrande", texto: bloco.titulo })
    );
    secao.appendChild(
      criarElemento("p", { classes: "subtitulo", texto: bloco.descricao })
    );

    const lista = criarElemento("ul", { classes: "listaPontos" });
    for (const ponto of bloco.pontos) {
      const item = criarElemento("li", { classes: "itemPonto" });
      item.appendChild(criarElemento("span", { classes: "marcador" }));
      item.appendChild(criarElemento("span", { texto: ponto }));
      lista.appendChild(item);
    }

    secao.appendChild(lista);
    this.elementoConteudo.appendChild(secao);
  },

  renderizarContato() {
    const secao = criarElemento("section", { classes: "cartao secao" });

    secao.appendChild(
      criarElemento("h1", {
        classes: "tituloGrande",
        texto: portifolioModelo.contato.titulo,
      })
    );

    secao.appendChild(
      criarElemento("p", {
        classes: "subtitulo",
        texto: portifolioModelo.contato.descricao,
      })
    );

    const lista = criarElemento("ul", { classes: "listaPontos" });

    for (const canal of portifolioModelo.contato.canais) {
      const item = criarElemento("li", { classes: "itemPonto" });

      const link = criarElemento("a", {
        classes: "linkContato",
        atributos: {
          href: canal.link,
          target: canal.link.startsWith("mailto") ? "_self" : "_blank",
          rel: "noopener noreferrer",
        },
      });

      const icone = criarElemento("span", { classes: "iconeContato" });
      icone.appendChild(criarElemento("i", { classes: canal.icone }));

      const texto = criarElemento("span", {
        classes: "textoContato",
        texto: `${canal.rotulo}: ${canal.valor}`,
      });

      link.appendChild(icone);
      link.appendChild(texto);

      item.appendChild(criarElemento("span", { classes: "marcador" }));
      item.appendChild(link);

      lista.appendChild(item);
    }

    secao.appendChild(lista);
    secao.appendChild(
      criarElemento("div", {
        classes: "aviso",
        texto: portifolioModelo.contato.aviso,
      })
    );

    this.elementoConteudo.appendChild(secao);
  },
};

// =======================
// Controlador
// =======================

const portifolioControlador = {
  rotasValidas: [
    "inicio",
    "solucoes",
    "comoTrabalhamos",
    "paraQuemNaoE",
    "contato",
  ],

  iniciar() {
    portifolioVisao.iniciar();
    this.configurarRodape();
    this.configurarRotas();
    this.atualizar();
  },

  configurarRodape() {
    const ano = new Date().getFullYear();
    const rodape = document.getElementById("textoRodape");
    if (rodape) {
      rodape.textContent = `© ${ano} ${portifolioModelo.marca.nome}.`;
    }
  },

  configurarRotas() {
    window.addEventListener("hashchange", () => this.atualizar());
    if (!window.location.hash) window.location.hash = "#inicio";
  },

  atualizar() {
    const rota = this.obterRotaAtual();
    this.destacarMenu(rota);
    portifolioVisao.renderizarPagina(rota);
  },

  obterRotaAtual() {
    const rota = window.location.hash.replace("#", "");
    return this.rotasValidas.includes(rota) ? rota : "inicio";
  },

  destacarMenu(rotaAtiva) {
    const links = document.querySelectorAll(".linkNavegacao");
    links.forEach((link) => {
      link.classList.toggle(
        "ativo",
        link.dataset.rota === rotaAtiva
      );
    });
  },
};

// Inicialização
portifolioControlador.iniciar();
