# CASE 02

## O design system que elevou a maturidade do time de design e engenharia.

Fui responsável para construção do Design System, DSI, da Sieg e a camada de IA que mantém a consistência enquanto o time cresce.

## O problema

DS como iniciativa, zero estrutura: 1 designer + 1 front para 30 devs backend.

No código: hardcode espalhado, Vue e Angular misturados, sem arquitetura.

Percepção a vencer: design "só fazia tela".

→ A dor não era estética. Era custo de mudança, governança e legitimidade.

## O que fiz

Não comecei pelo Figma. Comecei sentando do lado do dev. Entender a dor dele antes de entregar qualquer coisa fez o sistema virar parceria, não imposição.

Estruturei o sistema em três movimentos:

Princípios primeiro, inventário depois. Recém-chegada à empresa, defini os princípios a partir das dores dos produtos mapeadas com stakeholders e usei o inventário das telas com duplo propósito: aprender o produto a fundo e testar se os princípios batiam com a realidade — em vez de catalogar no escuro.

Tokens com valor semântico, não crus. Criei tokens com significado de uso, não só valores soltos — em vez de decorar um código de cor, o designer entende pelo nome onde aplicar. Isso deixou o sistema mais legível, acelerou o onboarding e também abriu espaço para IA interpretar intenção, já que o nome carrega o contexto de uso.

Amarrei o DS a um problema real de negócio. Quando o churn do Iris virou prioridade da diretoria, conectei o redesenho ao design system. O Iris deu propósito e teste real ao sistema que ainda estava nascendo em design e engenharia; o sistema deu velocidade e consistência ao Iris. Os dois foram construídos em paralelo, um alimentando o outro.

[Storybook real — componentes funcionando]
[Storybook real — componentes funcionando]

## A prova de que pegou

A adoção começou pelo Iris. Quando ele saiu do churn, o design system "pegou carona" na vitória — o sistema já tinha validado valor num caso acompanhado de perto pela diretoria. "Coloca no design system" virou um bordão interno: ele entrou na cultura, não só no fluxo.

Essa foi a adoção cultural. A estrutural apareceu nos números: quando a empresa iniciou a unificação da identidade dos produtos — mesma paleta e mesmos componentes —, surgiu um A/B natural do sistema em produção.

No Iris, já dentro do design system, a mudança (cores e componente de tabs) se propagou automaticamente pela biblioteca. Nos outros produtos, ainda em hardcode, tudo precisou ser ajustado manualmente, um a um.

## A camada de IA

Time crescendo = risco de a despadronização voltar. A resposta foi transformar regra de design em ferramenta executável.

Governança de ícones: um agente que decide qual ícone usar pela regra do sistema, não pelo gosto de quem pede.

O salto não foi gerar com IA — foi eliminar manutenção. A v1 (GPT) ainda exigia manutenção manual, limitação que eu já tinha mapeado mas no momento ainda não tinhamos a possibilidade de conexão via MCP. Na migração que conduzi pro Claude, um designer do time propôs e implementou conectar o agente à fonte via MCP, matando o trabalho manual de vez.

→ A governança virou cultura autônoma: outro designer evoluiu o sistema sem mim na sala.

[Vídeo — agente de ícones funcionando]

A mesma lógica guiou a escrita: o guia de conteúdo da Sieg virou uma skill que escreve interface no tom da marca — carregando os mesmos 4 princípios de design do redesenho do Iris. A filosofia virou tese de UX num produto e regra de IA no outro.

[Vídeo — agente de linguagem funcionando]

## O ciclo que fecha design e código

A fronteira seguinte era estreitar ainda mais a parceria com a engenharia. Até então, o fluxo quebrava entre design e implementação — qualquer ajuste de interface virava demanda pro dev e aumentava o atrito no dia a dia.

Criei duas skills no Claude para fechar essa distância: levar o fluxo do Figma ao código com consistência e tirar do dev o peso de absorver ajustes recorrentes de UI.

/ds-to-code produz. Lê o Figma, documenta as regras num guideline vivo e gera os componentes funcionando e documentados no Storybook. Nunca hardcode — sempre token. Reutiliza o que existe antes de criar.

/use-ds consome. Monta telas lendo o Storybook via MCP, usando só componentes e props documentados. Se falta uma peça, ela avisa e manda criar pela /ds-to-code — se recusa a inventar.

[Diagrama — o ciclo fechado: produz → consome → devolve]

[Vídeo — as skills rodando: Figma → Storybook]

É a tese inteira do sistema num ciclo: reutilização antes da criação, executada por IA, com o design system como fonte única de verdade.

As duas já rodam de ponta a ponta. O próximo passo é o rollout pro time — e, a partir do uso real, evoluir o fluxo com o que só aparece quando mais gente opera.
