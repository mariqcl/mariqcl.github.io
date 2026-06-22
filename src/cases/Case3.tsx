import {
  CaseLayout,
  CaseHero,
  CasePhase,
  CaseBlock,
  CaseHighlight,
  CaseArtifact,
  BeforeAfterPair,
} from "./shared";

export function Case3View({ onBack, onNext }: { onBack: () => void; onNext?: () => void }) {
  return (
    <CaseLayout
      onBack={onBack}
      nextIndex="02"
      nextLabel="O sistema que escala o time"
      onNext={onNext}
    >
      <CaseHero
        hook="Uma plataforma, em vez de cinco produtos"
        tags={[
          "Arquitetura da informação",
          "Visão sistêmica",
          "Estratégia de produto",
          "Governança",
        ]}
        overview={[
          { label: "Empresa", value: "Sieg" },
          { label: "Papel", value: "Product Designer" },
          { label: "Período", value: "2026" },
          { label: "Escopo", value: "5 produtos → 1 plataforma unificada" },
        ]}
      />

      <CasePhase
        number="01"
        title="A Dor Arquitetural"
        subtitle="A arquitetura por produto contradiz a estratégia comercial."
      >
        <CaseBlock label="O Ecossistema">
          <p>
            A SIEG é um ecossistema fiscal com cinco produtos: IRIS, IRPF, Hub, Emissor e
            Trabalhista. Cada um nasceu com navegação, identidade e padrões próprios — ilhas
            isoladas. Para concluir uma tarefa, o usuário saltava entre produtos, perdia contexto e
            recorria ao suporte.
          </p>
        </CaseBlock>

        <CaseHighlight>A dor não era falta de funcionalidade. Era arquitetura.</CaseHighlight>

        <CaseBlock>
          <p>
            A SIEG estava migrando de produtos avulsos para planos. Uma plataforma partida em ilhas
            contradiz um pacote único — a arquitetura por produto virou incoerente com a arquitetura
            comercial.
          </p>
        </CaseBlock>

        <CaseHighlight>
          "Quero encontrar tudo o que preciso numa navegação única, sem precisar lembrar em qual
          produto cada função está."
          <br />— a tese, na voz do próprio usuário
        </CaseHighlight>
      </CasePhase>

      <CasePhase
        number="02"
        title="O Diagnóstico"
        subtitle="A fronteira entre produtos era real na cabeça do usuário."
      >
        <CaseBlock label="Discovery">
          <p>
            Triangulei fontes que já existiam na empresa: NPS de um ano, tickets de suporte de 180
            dias e os motivos de cancelamento de 2026. Todas apontavam para o mesmo lugar:
            fragmentação.
          </p>
          <p>
            No heatmap, quase todo acesso acontecia pelo menu global do header — não pela navegação
            interna de cada produto. O usuário já usava a plataforma como um lugar só. Faltava o
            sistema assumir isso.
          </p>
        </CaseBlock>

        <CaseArtifact
          label="Heatmap de acesso — menu global vs. navegação interna"
          caption="Acesso concentrado no header global — quase nenhum pela navegação interna de cada produto."
          image="/heatmap.png"
        />

        <CaseHighlight>
          A tese ficou clara: organizar por tarefa, não por produto de origem.
        </CaseHighlight>
      </CasePhase>

      <CasePhase
        number="03"
        title="A Solução"
        subtitle="Uma régua governa tudo: organizar por tarefa do usuário, não por produto de origem."
      >
        <CaseBlock>
          <p>
            Seis menus com marcas próprias viraram um só. Reorganizei todos os serviços em domínios
            orientados a tarefas — não por qual produto deu origem a cada função.
          </p>
        </CaseBlock>

        <BeforeAfterPair
          category="Menu de navegação"
          before={{
            image: "/menus-existentes.png",
            caption: "Cada produto com seu menu e identidade própria.",
          }}
          after={{
            image: "/menu-unificado.png",
            caption: "Uma navegação única, organizada por domínio de tarefa.",
          }}
        />

        <CaseArtifact
          label="navegação geral de todos os serviços"
          caption="O que era ilha virou seção. Produtos isolados passaram a ser partes de um domínio maior, organizados por tarefa — cada um com um papel dentro do todo."
          image="/navegacao-header.png"
        />

        <CaseBlock label="Linguagem e Governança">
          <p>
            Um guia alinha como o time nomeia o sistema: "produto", "módulo" e "submarca" viraram
            "domínio" e "seção", reduzindo a fragmentação da experiência.
          </p>
          <p>
            Uma régua de governança define critérios de decisão e evolução — para manter consistência
            enquanto o sistema cresce.
          </p>
        </CaseBlock>

        <CaseArtifact
          label="Guia de Arquitetura da Informação"
          caption="A régua que governa tudo: linguagem compartilhada e significado de cada domínio — saiu da cabeça de quem decide e virou referência do time."
          image="/guia-da-informacao.png"
        />
      </CasePhase>

      <CasePhase
        number="04"
        title="A Implementação"
        subtitle="Rollout gradual, governança em prática e métricas definidas antes do lançamento."
      >
        <CaseBlock>
          <p>
            Uma mudança dessa profundidade não se vira de uma vez. Estruturei — junto às áreas
            impactadas e à diretoria — uma implementação por etapas. As implicações da fragmentação
            já pesavam no dia a dia e exigiam resposta rápida, sem espaço para investigação mais
            aprofundada com usuários. Para compensar, todas as áreas validaram o impacto no seu
            território. Em vez de um corte único, acordamos um rollout gradual para não interromper a
            operação.
          </p>
          <p>
            Como vou medir o sucesso: menos tempo e menos cliques até a ação principal, e queda nos
            tickets de "onde encontro isso?". Deixei os indicadores definidos antes mesmo do
            lançamento completo — para que o efeito seja medido, não estimado.
          </p>
        </CaseBlock>
      </CasePhase>
    </CaseLayout>
  );
}
