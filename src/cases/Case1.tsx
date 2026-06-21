import {
  CaseLayout,
  CaseHero,
  CasePhase,
  CaseBlock,
  CaseHighlight,
  CaseArtifact,
  BeforeAfterPair,
  ArtifactGrid,
} from "./shared";

export function Case1View({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <CaseLayout
      onBack={onBack}
      nextIndex="02"
      nextLabel="O sistema que escala o time"
      onNext={onNext}
    >
      <CaseHero
        index="Case 01"
        title="Design que move o negócio"
        hook={
          <>
            A diretoria criou um comitê para combater o churn. A investigação mostrou que{" "}
            <span className="font-semibold">a experiência influenciava o churn</span> — e vi ali uma
            oportunidade de{" "}
            <span className="font-semibold">impacto e de reforço do papel do design</span>.
          </>
        }
        tags={["Discovery", "Análise de dados", "Facilitação", "Priorização", "Estratégia", "Métricas", "Influência"]}
        overview={[
          { label: "Empresa", value: "Sieg — Produto Iris — Plataforma Fiscal" },
          { label: "Papel", value: "Product Designer" },
          { label: "Período", value: "2025" },
          { label: "Contexto", value: "Discovery ao Delivery em produto fiscal de alto risco" },
        ]}
      />

      <CasePhase number="01" title="O Cenário & A Dor">
        <CaseBlock label="O Produto">
          <p>
            Iris é uma plataforma fiscal que centraliza o e-CAC e monitora obrigações tributárias. É
            o "guardião tributário" do contador.
          </p>
        </CaseBlock>

        <CaseBlock label="O Problema">
          <p>
            O cancelamento estava alto e em crescimento. O cenário era crítico a ponto de virar
            prioridade máxima de toda a empresa, e a diretoria criou um comitê exclusivamente para
            atuar para reduzir o churn do Iris.
          </p>
        </CaseBlock>
      </CasePhase>

      <CasePhase
        number="02"
        title="O Diagnóstico"
        subtitle="Busquei cada parte do problema na fonte."
      >
        <CaseBlock label="Discovery">
          <p>
            Comecei pela{" "}
            <span className="font-semibold text-foreground">evidência mais direta</span>: reuni os
            motivos dos últimos cancelamentos e analisei os padrões para identificar as{" "}
            <span className="font-semibold text-foreground">causas reais por trás das saídas</span>.
          </p>
          <p>
            Busquei cada parte do problema na fonte:{" "}
            <span className="font-semibold text-foreground">Produto</span>, para os direcionadores de
            negócio; <span className="font-semibold text-foreground">CS e Suporte</span>, para as
            dores recorrentes; <span className="font-semibold text-foreground">Desenvolvimento</span>,
            para o que seria factível no prazo.
          </p>
          <p>
            Em seguida, desenhei e facilitei um{" "}
            <span className="font-semibold text-foreground">workshop de discovery</span> em duas
            sessões de uma hora, remotas — formato pensado para caber na agenda apertada da
            liderança. O objetivo era{" "}
            <span className="font-semibold text-foreground">mapear a percepção de cada área</span> e
            sair com direcionamentos de iniciativas.
          </p>
          <p>
            As evidências que levantei antes me deram mais{" "}
            <span className="font-semibold text-foreground">assertividade na facilitação</span>:
            consegui provocar os pontos certos para que cruzássemos as percepções e chegássemos
            juntos à <span className="font-semibold text-foreground">causa raiz</span>. Foi esse
            mapeamento que{" "}
            <span className="font-semibold text-foreground">
              direcionou as decisões da diretoria
            </span>
            .
          </p>
        </CaseBlock>

        <CaseHighlight>A causa não era falta de funcionalidades. Era quebra de confiança.</CaseHighlight>

        <CaseHighlight>
          Em um produto fiscal, errar pode significar multa. Um sistema que não comunica status, não
          explica erros e não entrega informações no momento certo compromete a confiança do contador.
          E o que não gera confiança nunca vira hábito. O que não vira hábito, cancela fácil.
        </CaseHighlight>

        <ArtifactGrid cols={2}>
          <CaseArtifact
            label="Workshop — Dia 01"
            caption="Discussão da causa raiz com as áreas."
            image="/dia01-entendoacausaraiz.png"
          />
          <CaseArtifact
            label="Workshop — Dia 02"
            caption="Discussão conjunta de possíveis soluções."
            image="/dia02-solucionando.png"
          />
        </ArtifactGrid>
      </CasePhase>

      <CasePhase number="03" title="A Solução">
        <CaseBlock>
          <p>
            Com a causa raiz identificada, a diretoria priorizou as iniciativas por impacto × esforço,
            e conduzi o redesenho a partir de quatro princípios — todos orientados por um mesmo
            objetivo: fortalecer a confiança.
          </p>
          <div className="space-y-6 mt-6">
            {[
              {
                title: "Ação com propósito.",
                body: "Cada interação é clara, contextualizada e orientada ao próximo passo.",
              },
              {
                title: "Hierarquia e clareza.",
                body: "Informações fiscais organizadas sem ruído, com destaque para o que realmente exige atenção.",
              },
              {
                title: "Automação visível, não invisível.",
                body: "O sistema comunica o que está fazendo, tornando seus processos compreensíveis para o usuário.",
              },
              {
                title: "Parceria estratégica.",
                body: "Transparência sobre o que o sistema monitora, o que recomenda e o que ainda está fora de seu alcance.",
              },
            ].map((p) => (
              <p key={p.title}>
                <strong>{p.title}</strong> {p.body}
              </p>
            ))}
          </div>
        </CaseBlock>

        <div className="flex flex-col gap-10">
          <BeforeAfterPair
            category="Home"
            before={{ image: "/home-antes.png", caption: "A home apenas se apresentava." }}
            after={{
              image: "/home-depois.png",
              caption:
                "O novo Painel Tributário responde imediatamente à pergunta: 'O que eu preciso fazer agora?' Status, datas de consulta e até o que o sistema não está monitorando passaram a ficar visíveis sem exigir cliques.",
            }}
          />
          <BeforeAfterPair
            category="Saúde Fiscal"
            before={{
              image: "/saudefiscal-antes.png",
              caption:
                "Saber se uma empresa está regular não deveria exigir a leitura de cinco tabelas diferentes.",
            }}
            after={{
              image: "/saudefiscal-depois.png",
              caption:
                "Regularidade fiscal em chips de status. O vermelho destaca os riscos, substituindo a leitura linha a linha por um entendimento imediato.",
            }}
          />
          <BeforeAfterPair
            category="Tabelas"
            before={{
              image: "/tabelas-antes.png",
              caption:
                "A tabela é o coração da consulta. Se o contador não encontra a informação rapidamente, a confiança desaparece.",
            }}
            after={{
              image: "/tabelas-depois.png",
              caption:
                "Introduzi resumo antes do detalhe, ordenação mais eficiente e ações em lote. A tabela deixou de ser um depósito de informações e passou a funcionar como ferramenta de trabalho.",
            }}
          />
        </div>
      </CasePhase>

      <CasePhase
        number="04"
        title="O Legado"
        subtitle="O comitê foi encerrado. O Design ganhou voz."
      >
        <CaseBlock label="Resultados Diretos">
          <p>
            O churn caiu o suficiente para que a diretoria encerrasse o comitê e direcionasse a
            atenção para outros produtos. O Iris saiu da pauta recorrente da diretoria.
          </p>
          <p>
            Os sinais que sustentaram a decisão vieram de frentes diferentes: CS registrou menos
            pedidos de cancelamento e o Suporte, menos chamados sobre os problemas identificados no
            discovery.
          </p>
        </CaseBlock>

        <CaseHighlight>
          O Iris se tornou a prova de que design pode mover indicadores de negócio.
        </CaseHighlight>

        <CaseBlock label="Impacto Cultural">
          <p>
            Antes, o design muitas vezes recebia as decisões prontas. Depois desse projeto, o time
            passou a ter voz nas definições de produto, ao lado dos POs. Foi também o caso que criou
            tração para o Design System que hoje sustenta os próximos produtos.
          </p>
        </CaseBlock>
      </CasePhase>
    </CaseLayout>
  );
}
