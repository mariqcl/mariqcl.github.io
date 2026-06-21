# CASE 03

"Matar as submarcas." Era o nome interno do projeto. A plataforma estava partida em cinco produtos que operavam como ilhas — e o problema não era falta de função. Era arquitetura.

Product Designer · Arquitetura da informação e visão sistêmica · 2026

A SIEG é um ecossistema fiscal com cinco produtos: IRIS, IRPF, Hub, Emissor e Trabalhista. Cada um nasceu como uma ilha, com navegação, login e padrões próprios.

## O problema

Quando funciona, a plataforma entrega valor. Mas estava partida em produtos que operavam separados, sem padrão entre si. Para concluir uma única tarefa, o usuário saltava de um produto a outro, perdia o contexto, refazia o raciocínio e recorria ao suporte.

A dor não era falta de funcionalidade. Era arquitetura.

E havia uma tensão de negócio por baixo: a SIEG estava migrando de vender produtos avulsos para vender planos. Uma plataforma partida em produtos-ilha contradiz o que o comercial passou a vender — um pacote único. A arquitetura por produto tinha virado incoerente com a arquitetura comercial.

"Quero encontrar tudo o que preciso numa navegação única, sem precisar lembrar em qual produto cada função está."
— a tese, na voz do próprio usuário

## A discovery

Triangulei fontes que já existiam na empresa: NPS de um ano, tickets de suporte de 180 dias e os motivos de cancelamento de 2026. Todas apontavam para o mesmo lugar: fragmentação.

A prova mais direta veio dos tickets. Os três termos mais frequentes nos títulos dos chamados eram nomes de produto — autodocs, iris, hub — acima de "erro". O usuário abre o chamado nomeando o produto. A fronteira entre produtos era tão real na cabeça dele que virava a primeira palavra do ticket.

E o comportamento confirmou: no heatmap, quase todo acesso às funções acontecia pelo menu global do header — não pela navegação interna de cada produto. Na prática, o usuário já usava a plataforma como um lugar só, contornando a estrutura por produto. Faltava o sistema assumir isso.

A tese ficou clara: organizar por tarefa, não por produto de origem.

[ocorrências de termo no título, não tickets únicos]

## A solução

Uma régua governa tudo: organizar por tarefa do usuário, não por produto de origem.

[Antes/Depois — Menu]
Seis menus com marcas próprias viraram um só.
Antes, cada produto tinha seu próprio menu, login e identidade. Reorganizei todos os serviços sob uma navegação única, em domínios orientados a tarefas completas, não por qual produto deu origem a cada função.

[Detalhe — Cofre e AutoDocs dentro de Docs Fiscais]
O que era ilha virou seção.
Produtos que antes funcionavam de forma isolada, cada um com seu próprio acesso, passaram a ser partes de um domínio maior, organizados por tarefa. Em vez de competirem entre si por atenção ou espaço, eles agora fazem parte de um sistema integrado, onde cada um cumpre um papel dentro do todo.

## Linguagem e governança como estrutura do sistema

Foi criado um guia para alinhar como o time nomeia e representa o sistema, substituindo termos como "produto", "módulo" e "submarca" por "domínio" e "seção", reduzindo a fragmentação da experiência.

Também foi estruturada uma régua de governança com critérios de decisão e evolução, para ajudar a manter consistência à medida que o sistema cresce.

## O resultado

O menu unificado já está parcialmente no ar. A padronização visual das telas avança de forma gradual, acompanhando as refatorações do sistema — a unificação completa está prevista para o fim do ano.

O guia de governança já é a régua que o time usa para decidir onde cada coisa mora.

Como vou medir o sucesso: menos tempo e menos cliques até a ação principal, e queda nos tickets de "onde encontro isso?". Deixei os indicadores definidos antes mesmo do lançamento completo — para que o efeito seja medido, não estimado.
