export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  context: string
  solution: string
  deliverables: string[]
  gallery: { src: string; caption: string }[]
}

export const projects: Project[] = [
  {
    id: 'kaizen',
    title: 'Kaizen',
    category: 'Melhoria contínua',
    description: 'Do cadastro de uma ideia ao acompanhamento da execução: gestão de melhorias em uma aplicação Oracle APEX.',
    image: '/kaizen-screenshots/kaizen-dashboard-real.png',
    technologies: ['Oracle APEX', 'PL/SQL', 'JavaScript'],
    context: 'Organizar ideias de melhoria, acompanhar cada etapa e consultar indicadores em um mesmo sistema.',
    solution: 'Aplicação em Oracle APEX com cadastro de ideias, acompanhamento por status, indicadores, premiação e parametrização.',
    deliverables: ['Cadastro e consulta de ideias de melhoria.', 'Acompanhamento das etapas de validação, aprovação e execução.', 'Painel com quantidades, distribuição por status e economias registradas.', 'Filtros e exportação para consulta dos registros.'],
    gallery: [
      { src: '/kaizen-screenshots/kaizen-dashboard-real.png', caption: 'Visão geral: indicadores, distribuição por status e registros de Kaizen.' },
      { src: '/kaizen-screenshots/kaizen-form-real.png', caption: 'Formulário da aplicação Kaizen.' },
      { src: '/kaizen-screenshots/kaizen-list-real.png', caption: 'Tela de consulta da aplicação Kaizen.' },
    ],
  },
  {
    id: 'indicadores',
    title: 'Indicadores de performance',
    category: 'Dados e acompanhamento',
    description: 'Dashboards para acompanhar indicadores empresariais e apoiar a análise de desempenho.',
    image: '/images/indicadores.svg',
    technologies: ['Oracle APEX', 'PL/SQL', 'JavaScript'],
    context: 'Reunir indicadores de negócio em uma interface de consulta para apoiar a tomada de decisão.',
    solution: 'Plataforma de monitoramento de KPIs em Oracle APEX, com dashboards, alertas automáticos e análise de tendências.',
    deliverables: ['Dashboards de indicadores de performance.', 'Monitoramento de KPIs empresariais.', 'Alertas e análise de tendências.'],
    gallery: [],
  },
  {
    id: 'suporte',
    title: 'Suporte e evolução de aplicações',
    category: 'Serviços Oracle APEX',
    description: 'Manutenção, correção de bugs e otimização de aplicações e consultas em Oracle APEX.',
    image: '/images/suporte-apex.svg',
    technologies: ['Oracle APEX', 'PL/SQL', 'JavaScript'],
    context: 'Manter aplicações empresariais em funcionamento e atender às necessidades de evolução dos sistemas.',
    solution: 'Suporte técnico e consultoria para investigar problemas, corrigir falhas e otimizar o desempenho de sistemas Oracle APEX.',
    deliverables: ['Correção de bugs em aplicações Oracle APEX.', 'Otimização de performance de banco de dados.', 'Manutenção e consultoria técnica.'],
    gallery: [],
  },
]
