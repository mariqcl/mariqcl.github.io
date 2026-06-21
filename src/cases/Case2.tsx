import {
  CaseLayout,
  CaseHero,
  CasePhase,
  CaseBlock,
  CaseHighlight,
  CaseArtifact,
  ArtifactGrid,
} from "./shared";

export function Case2View({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <CaseLayout
      onBack={onBack}
      nextIndex="03"
      nextLabel="Uma plataforma, em vez de cinco produtos"
      onNext={onNext}
    >
      <CaseHero
        index="Case 02"
        title="O sistema que escala o time"
        hook="O design system que elevou a maturidade do time de design e engenharia."
        tags={["Design System", "Governança", "IA", "Engenharia", "Escalabilidade", "Tokens semânticos"]}
        overview={[
          { label: "Empresa", value: "Sieg" },
          { label: "Papel", value: "Product Designer" },
          { label: "Escopo", value: "Design System + Camada de IA" },
          { label: "Contexto", value: "1 designer + 1 front para 30 devs backend" },
        ]}
      />

      <CasePhase number="01" title="O Cenário & A Dor">
        <CaseBlock label="O Contexto">
          <p>
            Fui responsável para construção do Design System, DSI, da Sieg e a camada de IA que
            mantém a consistência enquanto o time cresce.
          </p>
          <p>DS como iniciativa, zero estrutura: 1 designer + 1 front para 30 devs backend.</p>
          <p>No código: hardcode espalhado, Vue e Angular misturados, sem arquitetura.</p>
        </CaseBlock>

        <CaseHighlight>
          A dor não era estética. Era custo de mudança, governança e legitimidade.
        </CaseHighlight>

        <CaseArtifact
          label="DSI — Design System Sieg"
          caption="A identidade visual do sistema que nasceu desse processo."
          image="/marca-ds.png"
          aspect="square"
        />
      </CasePhase>

      <CasePhase
        number="02"
        title="A Estratégia"
        subtitle="Não comecei pelo Figma. Comecei sentando do lado do dev."
      >
        <CaseBlock>
          <p>
            Entender a dor dele antes de entregar qualquer coisa fez o sistema virar parceria, não
            imposição.
          </p>
        </CaseBlock>

        <CaseBlock label="Três Movimentos Estruturantes">
          <div className="space-y-12 mt-6">
            {[
              {
                n: "01",
                title: "Princípios primeiro, inventário depois.",
                body: "Recém-chegada à empresa, defini os princípios a partir das dores dos produtos mapeadas com stakeholders e usei o inventário das telas com duplo propósito: aprender o produto a fundo e testar se os princípios batiam com a realidade — em vez de catalogar no escuro.",
              },
              {
                n: "02",
                title: "Tokens com valor semântico, não crus.",
                body: "Criei tokens com significado de uso, não só valores soltos — em vez de decorar um código de cor, o designer entende pelo nome onde aplicar. Isso deixou o sistema mais legível, acelerou o onboarding e também abriu espaço para IA interpretar intenção, já que o nome carrega o contexto de uso.",
              },
              {
                n: "03",
                title: "Amarrei o DS a um problema real de negócio.",
                body: "Quando o churn do Iris virou prioridade da diretoria, conectei o redesenho ao design system. O Iris deu propósito e teste real ao sistema que ainda estava nascendo em design e engenharia; o sistema deu velocidade e consistência ao Iris. Os dois foram construídos em paralelo, um alimentando o outro.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start border-t border-border pt-8"
              >
                <span
                  className="font-mono text-[12px] text-[#155DFC]/40 md:pt-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Movimento {item.n}
                </span>
                <div className="flex flex-col gap-4">
                  <p className="text-xl md:text-2xl tracking-tight text-foreground">{item.title}</p>
                  <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground font-light">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CaseBlock>

        <ArtifactGrid cols={2}>
          <CaseArtifact
            label="Storybook real — componentes funcionando"
            caption="Componentes documentados e disponíveis para o time de engenharia."
            image="/storybook.png"
          />
          <CaseArtifact
            label="Variables — Figma"
            caption="Tokens semânticos definidos no Figma: o nome carrega o contexto de uso."
            image="/variables-figma.png"
          />
        </ArtifactGrid>
      </CasePhase>

      <CasePhase
        number="03"
        title="Adoção e Cultura"
        subtitle="A prova de que pegou: 'Coloca no design system' virou bordão interno."
      >
        <CaseBlock label="Adoção Cultural">
          <p>
            A adoção começou pelo Iris. Quando ele saiu do churn, o design system "pegou carona" na
            vitória — o sistema já tinha validado valor num caso acompanhado de perto pela diretoria.
            "Coloca no design system" virou um bordão interno: ele entrou na cultura, não só no fluxo.
          </p>
        </CaseBlock>

        <CaseBlock label="Adoção Estrutural">
          <p>
            Essa foi a adoção cultural. A estrutural apareceu nos números: quando a empresa iniciou a
            unificação da identidade dos produtos — mesma paleta e mesmos componentes —, surgiu um A/B
            natural do sistema em produção.
          </p>
          <p>
            No Iris, já dentro do design system, a mudança (cores e componente de tabs) se propagou
            automaticamente pela biblioteca. Nos outros produtos, ainda em hardcode, tudo precisou ser
            ajustado manualmente, um a um.
          </p>
        </CaseBlock>

        <CaseHighlight>
          Time crescendo = risco de a despadronização voltar. A resposta foi transformar regra de
          design em ferramenta executável.
        </CaseHighlight>

        <CaseBlock label="A Camada de IA">
          <p>
            <span className="font-semibold text-foreground">Governança de ícones</span>: um agente
            que decide qual ícone usar pela regra do sistema, não pelo gosto de quem pede. O salto
            não foi gerar com IA — foi{" "}
            <span className="font-semibold text-foreground"> eliminar manutenção</span>.
          </p>
          <p>
            A v1 (GPT) ainda exigia manutenção manual, limitação que eu já tinha mapeado mas no
            momento ainda não tínhamos a possibilidade de conexão via MCP. Na migração que conduzi
            pro Claude, um designer do time propôs e implementou{" "}
            <span className="font-semibold text-foreground">
              {" "}
              conectar o agente à fonte via MCP
            </span>
            , matando o trabalho manual de vez.
          </p>
          <p>
            A mesma lógica guiou a escrita: o guia de conteúdo da Sieg virou uma{" "}
            <span className="font-semibold text-foreground">
              {" "}
              skill que escreve interface no tom da marca
            </span>{" "}
            — carregando os mesmos 4 princípios de design do redesenho do Iris. A filosofia virou
            tese de UX num produto e regra de IA no outro.
          </p>
        </CaseBlock>

        <CaseHighlight>
          A governança virou cultura autônoma: outro designer evoluiu o sistema sem mim na sala.
        </CaseHighlight>

        <ArtifactGrid cols={2}>
          <CaseArtifact
            label="Agente de ícones"
            caption="Decide qual ícone usar pela regra do sistema, não pelo gosto de quem pede."
            image="/skill-icon.png"
          />
          <CaseArtifact
            label="Agente de linguagem"
            caption="Escreve interface no tom da marca com os 4 princípios de design como regra."
            image="/skill-uxwriting.png"
          />
        </ArtifactGrid>
      </CasePhase>

      <CasePhase
        number="04"
        title="Escala e Engenharia"
        subtitle="Da barreira à parceria: O ciclo que fecha design e código."
      >
        <CaseBlock>
          <p>
            A fronteira seguinte era estreitar ainda mais a parceria com a engenharia. Até então, o
            fluxo quebrava entre design e implementação — qualquer ajuste de interface virava demanda
            pro dev e aumentava o atrito no dia a dia.
          </p>
          <p>
            Criei duas skills no Claude para fechar essa distância: levar o fluxo do Figma ao código
            com consistência e tirar do dev o peso de absorver ajustes recorrentes de UI.
          </p>
        </CaseBlock>

        <div className="grid md:grid-cols-2 gap-0 border border-border my-12">
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border">
            <p
              className="font-mono text-[12px] tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
            >
              /ds-to-code · Produz
            </p>
            <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground font-light">
              Lê o Figma, documenta as regras num guideline vivo e gera os componentes funcionando e
              documentados no Storybook. Nunca hardcode — sempre token. Reutiliza o que existe antes
              de criar.
            </p>
          </div>
          <div className="p-8 md:p-12">
            <p
              className="font-mono text-[12px] tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
            >
              /use-ds · Consome
            </p>
            <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground font-light">
              Monta telas lendo o Storybook via MCP, usando só componentes e props documentados. Se
              falta uma peça, ela avisa e manda criar pela /ds-to-code — se recusa a inventar.
            </p>
          </div>
        </div>

        <ArtifactGrid cols={2}>
          <CaseArtifact
            label="/ds-to-code"
            caption="Lê o Figma e gera componentes documentados no Storybook."
            image="/skill-ds-to-code.png"
          />
          <CaseArtifact
            label="/use-ds"
            caption="Monta telas lendo o Storybook via MCP, usando só o que já existe."
            image="/skill-use-ds.png"
          />
          <CaseArtifact
            label="Skills rodando"
            caption="Do Figma ao Storybook: componentes novos construídos a partir dos existentes, sempre com os tokens certos."
            image="/skill-rodando.png"
          />
        </ArtifactGrid>
      </CasePhase>

      <CasePhase number="05" title="O Resultado" subtitle="Impacto escalável.">
        <CaseHighlight>
          É a tese inteira do sistema num ciclo: reutilização antes da criação, executada por IA,
          com o design system como fonte única de verdade.
        </CaseHighlight>

        <CaseBlock>
          <p>
            As duas já rodam de ponta a ponta. O próximo passo é o rollout pro time — e, a partir do
            uso real, evoluir o fluxo com o que só aparece quando mais gente opera.
          </p>
        </CaseBlock>
      </CasePhase>
    </CaseLayout>
  );
}
