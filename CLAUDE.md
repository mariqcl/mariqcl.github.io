# CLAUDE.md — Portfólio Mariana Queiroz

> Este arquivo orienta o Claude Code a construir, editar e refinar o portfólio.
> Não é um portfólio livre: é um produto com fonte única de verdade, narrativa
> definida e direção visual fechada. Leia este arquivo inteiro antes de gerar
> qualquer página, seção ou componente.
>
> **Os arquivos fonte ficam na pasta `/fonte/`** (na raiz, ao lado deste CLAUDE.md).
> Sempre que este documento citar um `.md` de conteúdo, o caminho real é `/fonte/<arquivo>.md`.

---

## 1. O que é este projeto

Um site de portfólio de **Product Designer Sênior** posicionado para vagas
**AI-First** (referência de alvo: `descrição-vaga.md` — iFood / fintech).

O portfólio **é, ele mesmo, um produto**. Cada decisão de conteúdo, narrativa e
interface deve reforçar a percepção de senioridade, pensamento sistêmico, impacto
em negócio e uso real de IA. Se uma escolha não serve a essa percepção, ela não entra.

A tese central (não reescrever): *design não é só interface — é a disciplina que
organiza sistemas, reduz complexidade, alinha pessoas e move indicadores de negócio.*

---

## 2. Fontes de verdade (papel de cada arquivo)

Estes `.md`, na pasta **`/fonte/`**, são a **fonte única de verdade**. Nunca
contradiga, "melhore" inventando, ou substitua o conteúdo deles por suposições.

| Arquivo | Papel | Use para |
|---|---|---|
| `fonte/descrição-vaga.md` | **Alvo / posicionamento** | Calibrar ênfases: IA aplicada, fintech/crédito, discovery→delivery, visão sistêmica, parceria com engenharia |
| `fonte/aboutme.md` | **Narrativa pessoal** | Hero, seção About, bio curta e longa, como Mariana descreve seu uso de IA |
| `fonte/case1-iris.md` | Case 01 — design movendo negócio | Conteúdo integral do case Iris |
| `fonte/case2-design-system.md` | Case 02 — design system + IA | Conteúdo integral do case Design System Sieg |
| `fonte/case3-unificacao-produtos.md` | Case 03 — arquitetura/unificação | Conteúdo integral do case de unificação |
| `fonte/portfolio-design-principles.md` | **Princípios de design (craft)** | Filosofia e critérios de qualidade de cada entrega: decisões antes de entregáveis, sistemas antes de interfaces, evidência antes de opinião, IA como camada transversal |

---

## 3. Hierarquia quando houver conflito

Quando uma sugestão de design, uma boa prática de UX writing, um padrão de
portfólio, um framework de storytelling ou uma ideia da IA **conflitar** com o
material fonte do case, **vence sempre o material fonte do case** (regra de `prd.md`).

Ordem prática de autoridade:

1. Texto do case específico (`fonte/case1/2/3`) — narrativa e tese
2. `fonte/prd.md` — estrutura, governança e princípios
3. `fonte/portfolio-design-principles.md` — princípios de craft (como decidir)
4. `fonte/visual-direction.md` — forma e estética
5. `fonte/descrição-vaga.md` — calibragem de ênfase
6. Boas práticas genéricas — só quando não conflitam com 1–5

---

## 4. Regras inegociáveis de conteúdo

Vindas de `prd.md`. **Nunca** quebrar:

- Nunca inventar informação que não esteja no material fonte.
- Nunca criar métricas, resultados ou decisões não documentados.
- Nunca alterar a narrativa principal nem a tese central de um case.
- Nunca reinterpretar conclusões para encaixar em frameworks ou tendências.
- Nunca alterar a ordem dos acontecimentos (problema → discovery → solução → resultado).
- Nunca substituir exemplos reais por exemplos fictícios.
- Nunca transformar os cases em templates genéricos de UX.

**Pode** (ajustes de superfície, nunca de substância): melhorar clareza, corrigir
gramática, reduzir redundância, suavizar transições, ajustar títulos e reorganizar
elementos visuais da interface.

---

## 5. Validação obrigatória antes de escrever qualquer seção

Antes de adicionar qualquer conteúdo a uma tela, responda internamente (de `prd.md`):

1. Esta informação existe no material fonte?
2. Esta interpretação é suportada pelo material fonte?
3. Esta seção preserva a narrativa original?
4. Esta seção reforça a mensagem principal do case?

Se alguma resposta for **não**, o conteúdo não entra.

---

## 6. Como os arquivos se relacionam (mapa mental)

```
fonte/descrição-vaga.md ─── define o ALVO ───┐
                                             ▼
fonte/prd.md  ── é o BLUEPRINT que governa toda a estrutura e regras
   │
   ├── Home / Hero / About  ◄── alimentado por  fonte/aboutme.md
   │
   ├── Case 01  ◄── fonte/case1-iris.md
   ├── Case 02  ◄── fonte/case2-design-system.md
   └── Case 03  ◄── fonte/case3-unificacao-produtos.md

fonte/visual-direction.md ── governa a FORMA de tudo acima (tipografia, espaço, motion)
fonte/portfolio-design-principles.md ── governa o CRAFT: como decidir o que entra em cada tela
```

Em uma frase: **`prd.md` diz o que mostrar e em que ordem; os `case*.md` e
`aboutme.md` dizem o conteúdo exato; `visual-direction.md` diz como deve parecer;
`portfolio-design-principles.md` diz como decidir; `descrição-vaga.md` diz para
quem estamos falando.** (Todos em `/fonte/`.)

---

## 7. Mapa de seção → arquivo fonte

- **Hero / Headline / Subheadline** → `fonte/aboutme.md` (versão curta) + `fonte/prd.md` (Estrutura da Home)
- **Destaques / chips de competência** → `fonte/prd.md` (bloco "Destaques")
- **About completo** → `fonte/aboutme.md` (versão longa, "Como penso", "Como utilizo IA")
- **Card/abertura de cada case** → `fonte/prd.md` (Estrutura dos Cases: tema, mensagem, objetivo para o leitor)
- **Corpo de cada case** → `fonte/case1/2/3` correspondente, na íntegra e na ordem original
- **Marcadores de imagem/vídeo/diagrama** (ex.: `[Antes/Depois — Home]`, `[Vídeo — agente de ícones]`, `[Diagrama — ciclo fechado]`) → placeholders já indicados dentro dos `fonte/case*.md`. Trate-os como **slots de mídia**: monte o layout do slot, não invente a imagem.

---

## 8. Encadeamento narrativo dos cases (preservar)

A sequência é um requisito funcional, não sugestão editorial. Cada case leva ao
próximo (de `prd.md`):

1. **Case 01 — Iris**: design move indicadores de negócio. → leva ao Design System.
2. **Case 02 — Design System Sieg**: capacidade organizacional via sistemas + IA como governança. → leva à Arquitetura da Plataforma.
3. **Case 03 — Unificação**: arquitetura da informação em escala. → leva ao **Contato**.

Conexões reais a preservar (estão nos cases): o **Iris** criou tração e validou o
**Design System**; Design System e Unificação fazem parte do mesmo ecossistema SIEG.
Não embaralhar essa cronologia.

---

## 9. Direção visual (resumo operacional)

De `visual-direction.md`. Sensação: editorial, sofisticado, autoral, técnico,
calmo, profundo. Os cases devem se ler como **reportagens investigativas**, não
apresentações corporativas.

**Fazer:**
- Tipografia como elemento visual principal: títulos grandes, contraste forte entre níveis, blocos longos confortáveis de ler.
- Muito espaço negativo; deixar o conteúdo respirar.
- Imagens só quando comprovam decisão, evidenciam descoberta ou mostram transformação.
- Diagramas que mostram sistemas, relações, fluxos de decisão e arquiteturas — não só fluxo de usuário.
- Motion discreto, a serviço do ritmo (leitura guiada).
- IA apresentada como **infraestrutura**, nunca como hype ou enfeite promocional.

**Evitar:**
- Visual de dashboard SaaS, glassmorphism, gradientes exagerados, estética "IA futurista" genérica.
- Excesso de animação, "cards para tudo", componentização visualmente óbvia.
- Layouts que pareçam template, hero genérico de Product Designer.

**Critério de aprovação:** removendo todas as imagens e deixando só títulos, textos
e estrutura, o portfólio ainda deve transmitir senioridade, profundidade e clareza.

---

## 10. Princípios (checklist de cada entrega)

Há duas listas de princípios e elas se reforçam — respeite as duas.

**A. Princípios da Home/estrutura — de `fonte/prd.md`.** Toda tela deve respeitar:

1. Mostrar decisões antes de telas.
2. Mostrar impacto antes de processo.
3. Mostrar sistemas antes de componentes.
4. Mostrar IA aplicada antes de falar de tendências.
5. Cada case leva naturalmente ao próximo.
6. O portfólio parece um produto feito por uma Product Designer.
7. Toda seção responde "por que isso importa?".
8. Todo conteúdo reforça a narrativa principal.
9. Mostrar colaboração sem esconder protagonismo.
10. Profundidade sem depender de excesso de texto.

**B. Princípios de craft — de `fonte/portfolio-design-principles.md`.** Como decidir
o que entra em cada tela:

1. Decisões antes de entregáveis — o valor está no raciocínio, não na solução isolada.
2. Sistemas antes de interfaces — a interface é consequência; o sistema é a causa.
3. Impacto antes de processo — processo sem consequência não demonstra maturidade.
4. Evidência antes de opinião — toda conclusão sustentada por dado, comportamento ou observação.
5. Cada case é uma narrativa — o visitante descobre algo, não consome documentação.
6. Leitura em múltiplas profundidades — só os títulos já contam a história; quem lê tudo encontra profundidade.
7. IA como infraestrutura — camada transversal que aparece naturalmente, não uma seção.
8. Sistemas como protagonista — a narrativa central não é UX, é organizar sistemas complexos.
9. Menos marketing, mais evidência — afirmações demonstradas, não declaradas.
10. O portfólio parece um produto — navegar reflete o mesmo cuidado dos produtos que Mariana projeta.
11. Clareza acima de originalidade — a estética nunca compete com a compreensão.
12. Profundidade sem complexidade — perceber a complexidade do problema sem sentir complexidade na navegação.

---

## 11. Fluxo de trabalho esperado do Claude Code

1. Ao iniciar qualquer tarefa, reler a fonte fonte relevante antes de escrever código ou conteúdo.
2. Construir a partir da estrutura de `prd.md`; preencher com o texto literal dos `case*.md`/`aboutme.md`.
3. Aplicar `visual-direction.md` na camada de forma.
4. Validar contra a seção 5 antes de inserir qualquer conteúdo.
5. Em caso de dúvida ou lacuna no material fonte: **perguntar, não inventar.**

---

## 12. Notas técnicas

> Preencher conforme o stack escolhido (ex.: Next.js, Astro, framework, deploy).
> Enquanto não definido, o Claude Code deve perguntar a stack antes de assumir.

- Stack: Astro v6, CSS custom properties (sem Tailwind), Figtree via Google Fonts
- Comando de dev: `npm run dev` (porta 4321)
- Comando de build: `npm run build`
- Os 8 arquivos fonte ficam em **`/fonte/`** (ao lado deste CLAUDE.md). Não mover nem renomear sem atualizar os caminhos citados aqui.

Estrutura esperada da raiz:

```
/portfolio
  CLAUDE.md
  /fonte
    prd.md
    aboutme.md
    descrição-vaga.md
    case1-iris.md
    case2-design-system.md
    case3-unificacao-produtos.md
    visual-direction.md
    portfolio-design-principles.md
  (código, /src, assets, package.json, etc.)
```
