# Case 03 — Unificação da Plataforma SIEG · Página completa

> Texto fiel ao `case3-unificacao-produtos.md`. Mesma estrutura de hierarquia e localização dos elementos da versão atual. Nenhuma métrica inventada. As imagens estão marcadas em [IMG: ...] no ponto exato em que entram na narrativa.

---

## HERO

**Kicker / título:** "Matar as submarcas."

**Subtítulo:** Era o nome interno do projeto. A plataforma estava partida em cinco produtos que operavam como ilhas — e o problema não era falta de função. Era arquitetura.

**Tags:** Arquitetura da informação · Visão sistêmica · Estratégia de produto · Governança

**Meta:**
- Empresa: SIEG
- Papel: Product Designer
- Período: 2026
- Escopo: 5 produtos → 1 plataforma unificada

---

## SEÇÃO 1 — A Dor Arquitetural

**Tese:** A arquitetura por produto contradiz a estratégia comercial.

### O Ecossistema

A SIEG é um ecossistema fiscal com cinco produtos: IRIS, IRPF, Hub, Emissor e Trabalhista. Cada um nasceu como uma ilha, com navegação, identidade e padrões próprios. Para transitar entre eles, o usuário recorria à navegação do topo.

Quando funciona, a plataforma entrega valor. Mas estava partida em produtos que operavam separados, sem padrão entre si. Para concluir uma única tarefa, o usuário saltava de um produto a outro, perdia o contexto, refazia o raciocínio e recorria ao suporte.

A dor não era falta de funcionalidade. Era arquitetura.

E havia uma tensão de negócio por baixo: a SIEG estava migrando de vender produtos avulsos para vender planos. Uma plataforma partida em produtos-ilha contradiz o que o comercial passou a vender — um pacote único. A arquitetura por produto tinha virado incoerente com a arquitetura comercial.

**Destaque (quote):**
> "Quero encontrar tudo o que preciso numa navegação única, sem precisar lembrar em qual produto cada função está."
> — a tese, na voz do próprio usuário

---

## SEÇÃO 2 — O Diagnóstico

**Tese:** A fronteira entre produtos era real na cabeça do usuário.

### Discovery

Triangulei fontes que já existiam na empresa: NPS de um ano, tickets de suporte de 180 dias e os motivos de cancelamento de 2026. Todas apontavam para o mesmo lugar: fragmentação.

A prova mais direta veio dos tickets. Os três termos mais frequentes nos títulos dos chamados eram nomes de produto — autodocs, iris, hub — acima de "erro". O usuário abre o chamado nomeando o produto. A fronteira entre produtos era tão real na cabeça dele que virava a primeira palavra do ticket.

[IMG: gráfico de ocorrências de termos nos tickets]
**Legenda:** Ocorrências de termos nos títulos de tickets. Nomes de produto aparecem mais que 'erro' — a fronteira era real na cabeça do usuário. *(ocorrências de termo no título, não tickets únicos)*

E o comportamento confirmou: no heatmap, quase todo acesso às funções acontecia pelo menu global do header — não pela navegação interna de cada produto. Na prática, o usuário já usava a plataforma como um lugar só, contornando a estrutura por produto. Faltava o sistema assumir isso.

[IMG: heatmap.png]
**Legenda:** O acesso se concentra no menu global do header, não na navegação interna de cada produto. O usuário já usava a plataforma como um lugar só — faltava o sistema assumir isso.

A tese ficou clara: organizar por tarefa, não por produto de origem.

---

## SEÇÃO 3 — A Solução

**Tese:** Uma régua governa tudo: organizar por tarefa do usuário, não por produto de origem.

Seis menus com marcas próprias viraram um só. Antes, cada produto tinha seu próprio menu e identidade, e a troca entre eles acontecia pela navegação do topo. Reorganizei todos os serviços sob uma navegação única, em domínios orientados a tarefas completas, não por qual produto deu origem a cada função.

[IMG ANTES: menus-existentes.png] · [IMG DEPOIS: menu-unificado.png]
**Legenda (bloco Antes/Depois — Menu):** Seis menus com marcas próprias viraram um só, organizado por domínio de tarefa.

O que era ilha virou seção. Produtos que antes funcionavam de forma isolada, cada um com seu próprio acesso, passaram a ser partes de um domínio maior, organizados por tarefa. Em vez de competirem entre si por atenção ou espaço, eles agora fazem parte de um sistema integrado, onde cada um cumpre um papel dentro do todo.

[IMG: navegacao-header.png]
**Legenda (Detalhe):** O que era ilha virou seção — Cofre e AutoDocs agora vivem dentro do domínio Docs Fiscais.

---

## SEÇÃO 4 — Linguagem e Governança

Foi criado um guia para alinhar como o time nomeia e representa o sistema, substituindo termos como "produto", "módulo" e "submarca" por "domínio" e "seção", reduzindo a fragmentação da experiência.

Também foi estruturada uma régua de governança com critérios de decisão e evolução, para ajudar a manter consistência à medida que o sistema cresce.

[IMG: guia-arquitetura-informacao.png]
**Legenda:** O guia rápido de Arquitetura da Informação: a régua que governa tudo ("organize por tarefa, não por produto de origem"), a linguagem compartilhada e o significado de cada domínio. A governança deixou de viver só na cabeça de quem decide e virou referência viva do time.

---

## SEÇÃO 5 — O Legado

**Tese:** Um guia, uma régua.

O menu unificado já está parcialmente no ar. A padronização visual das telas avança de forma gradual, acompanhando as refatorações do sistema — a unificação completa está prevista para o fim do ano.

O guia de governança já é a régua que o time usa para decidir onde cada coisa mora.

Como vou medir o sucesso: menos tempo e menos cliques até a ação principal, e queda nos tickets de "onde encontro isso?". Deixei os indicadores definidos antes mesmo do lançamento completo — para que o efeito seja medido, não estimado.

---

## Mapa das imagens (resumo pro Claude Code)

| Imagem | Onde entra | Papel na narrativa |
|---|---|---|
| gráfico de tickets *(já existente)* | Diagnóstico / Discovery | Evidência: produto vira a 1ª palavra do ticket |
| `heatmap.png` | Diagnóstico / Discovery | Evidência comportamental: acesso pelo header global |
| `menus-existentes.png` | Solução — **Antes** | Os seis menus fragmentados, marcas próprias |
| `menu-unificado.png` | Solução — **Depois** | Navegação única por domínio de tarefa |
| `navegacao-header.png` | Solução — **Detalhe** | Cofre e AutoDocs como seções dentro de Docs Fiscais |
| `guia-arquitetura-informacao.png` | Linguagem e Governança | O guia/régua real: prova de que a governança virou referência viva |

**Regra:** o par `menus-existentes` → `menu-unificado` precisa ler como antes/depois (lado a lado ou em sequência imediata). Nenhuma legenda com número que não esteja no material fonte.
