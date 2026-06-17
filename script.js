// script.js — Dancode Solutions

// ─── Dados ────────────────────────────────────────
const dados = {
  solucoes: [
    {
      cor: 'corAzul',
      icone: 'fa-solid fa-sitemap',
      rotulo: 'Sistemas',
      titulo: 'Organização operacional',
      descricao:
        'Soluções enxutas para estruturar rotinas críticas e consolidar dados que hoje vivem em planilhas e e-mails.',
      entregas: [
        'Centralização de dados críticos',
        'Regras e aprovações explícitas',
        'Histórico e rastreabilidade',
      ],
    },
    {
      cor: 'corCiano',
      icone: 'fa-solid fa-bolt',
      rotulo: 'Automação',
      titulo: 'Automação de processos',
      descricao:
        'Eliminação de tarefas repetitivas e criação de fluxos confiáveis para reduzir erro humano e retrabalho.',
      entregas: [
        'Fluxos automatizados end-to-end',
        'Alertas e validações inteligentes',
        'Integrações entre sistemas',
      ],
    },
    {
      cor: 'corVerde',
      icone: 'fa-solid fa-cubes',
      rotulo: 'SaaS',
      titulo: 'Produtos licenciáveis',
      descricao:
        'Soluções com visão de produto, escalabilidade e governança para modelos de receita recorrente.',
      entregas: [
        'Arquitetura escalável',
        'Parametrização como regra',
        'Modelo de receita recorrente',
      ],
    },
    {
      cor: 'corVioleta',
      icone: 'fa-solid fa-rocket',
      rotulo: 'Entrega rápida',
      titulo: 'Landing pages estratégicas',
      descricao:
        'Presença digital moderna para validação comercial, campanhas e lançamentos de produto.',
      entregas: [
        'Design moderno e responsivo',
        'Alta performance (Core Web Vitals)',
        'Entrega ágil',
      ],
    },
  ],

  processo: [
    {
      numero: '01',
      icone: 'fa-solid fa-magnifying-glass',
      titulo: 'Entender o problema',
      texto:
        'Começamos pelo problema, não pela stack. Diagnóstico claro antes de qualquer linha de código.',
    },
    {
      numero: '02',
      icone: 'fa-solid fa-map',
      titulo: 'Definir o escopo',
      texto:
        'Fronteiras claras: o que entra, o que não entra, e por quê. Sem surpresas no meio do caminho.',
    },
    {
      numero: '03',
      icone: 'fa-solid fa-code',
      titulo: 'Construir simples',
      texto:
        'Soluções sustentáveis antes de sofisticadas. Qualidade antes de velocidade.',
    },
    {
      numero: '04',
      icone: 'fa-solid fa-check-double',
      titulo: 'Entregar valor',
      texto:
        'Software que funciona no dia a dia, não só na demo. Confiabilidade como requisito.',
    },
  ],

  contato: [
    {
      classe: 'contatoEmail',
      icone: 'fa-solid fa-envelope',
      rotulo: 'E-mail',
      valor: 'dancodesolutions@gmail.com',
      link: 'mailto:dancodesolutions@gmail.com',
    },
    {
      classe: 'contatoWhatsapp',
      icone: 'fa-brands fa-whatsapp',
      rotulo: 'WhatsApp',
      valor: '+55 51 99795-5292',
      link: 'https://wa.me/5551997955292',
    },
    {
      classe: 'contatoLinkedin',
      icone: 'fa-brands fa-linkedin',
      rotulo: 'LinkedIn',
      valor: 'linkedin.com/in/daniel--melo',
      link: 'https://www.linkedin.com/in/daniel--melo/',
    },
  ],
};

// ─── Renderização ─────────────────────────────────
function renderizarServicos() {
  const grade = document.getElementById('gradeServicos');
  if (!grade) return;

  for (const s of dados.solucoes) {
    const card = document.createElement('div');
    card.className = `cardServico ${s.cor} revelar`;
    card.innerHTML = `
      <div class="cardServicoIcone"><i class="${s.icone}"></i></div>
      <div class="cardServicoRotulo">${s.rotulo}</div>
      <h3 class="cardServicoTitulo">${s.titulo}</h3>
      <p class="cardServicoDescricao">${s.descricao}</p>
      <ul class="cardServicoLista">
        ${s.entregas.map(e => `<li>${e}</li>`).join('')}
      </ul>
    `;
    grade.appendChild(card);
  }
}

function renderizarProcesso() {
  const grade = document.getElementById('gradeProcesso');
  if (!grade) return;

  for (const p of dados.processo) {
    const card = document.createElement('div');
    card.className = 'cardPasso revelar';
    card.innerHTML = `
      <div class="passoNumero">${p.numero}</div>
      <div class="passoIcone"><i class="${p.icone}"></i></div>
      <h3 class="passoTitulo">${p.titulo}</h3>
      <p class="passoTexto">${p.texto}</p>
    `;
    grade.appendChild(card);
  }
}

function renderizarContato() {
  const lista = document.getElementById('contatoCanais');
  if (!lista) return;

  for (const c of dados.contato) {
    const a = document.createElement('a');
    a.href = c.link;
    a.className = `cardContato ${c.classe} revelar`;
    if (!c.link.startsWith('mailto')) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.innerHTML = `
      <div class="cardContatoIcone"><i class="${c.icone}"></i></div>
      <div class="cardContatoInfo">
        <span class="cardContatoRotulo">${c.rotulo}</span>
        <span class="cardContatoValor">${c.valor}</span>
      </div>
      <i class="fa-solid fa-arrow-right cardContatoSeta"></i>
    `;
    lista.appendChild(a);
  }
}

function configurarRodape() {
  const el = document.getElementById('rodapeAno');
  if (el) el.textContent = `© ${new Date().getFullYear()} Dancode Solutions LTDA.`;
}

// ─── Scroll & Nav ─────────────────────────────────
function configurarNavScroll() {
  const cabecalho = document.getElementById('cabecalho');
  const secoes = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.linkNav');

  function atualizarNav() {
    cabecalho.classList.toggle('scrollado', window.scrollY > 20);

    let secaoAtual = '';
    secoes.forEach(s => {
      if (window.scrollY >= s.offsetTop - 130) secaoAtual = s.id;
    });

    links.forEach(l => {
      const alvo = l.getAttribute('href').replace('#', '');
      l.classList.toggle('ativo', alvo === secaoAtual);
    });
  }

  window.addEventListener('scroll', atualizarNav, { passive: true });
  atualizarNav();
}

function configurarMenuMobile() {
  const botao = document.getElementById('menuBotao');
  const nav = document.getElementById('navegacao');
  if (!botao || !nav) return;

  botao.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', String(aberto));
  });

  nav.querySelectorAll('.linkNav').forEach(l => {
    l.addEventListener('click', () => {
      nav.classList.remove('aberto');
      botao.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── Scroll Reveal ────────────────────────────────
function configurarRevelacao() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const parent = entry.target.parentElement;
        const irmaos = [...parent.querySelectorAll('.revelar:not(.visivel)')];
        const idx = irmaos.indexOf(entry.target);
        const atraso = Math.min(idx * 90, 360);

        setTimeout(() => entry.target.classList.add('visivel'), atraso);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
  );

  document.querySelectorAll('.revelar').forEach(el => observer.observe(el));
}

// ─── Init ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderizarServicos();
  renderizarProcesso();
  renderizarContato();
  configurarRodape();
  configurarNavScroll();
  configurarMenuMobile();
  configurarRevelacao();
});
