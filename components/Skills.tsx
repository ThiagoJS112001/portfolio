export default function Skills() {
  const categories = [
    {
      title: 'Aplicações empresariais',
      description: 'Desenvolvimento de soluções para processos de negócio.',
      skills: [
        { name: 'Oracle APEX', detail: 'Aplicações, formulários, dashboards e relatórios.' },
        { name: 'SQL e PL/SQL', detail: 'Consultas e regras de negócio integradas ao banco de dados.' },
        { name: 'JavaScript, HTML e CSS', detail: 'Interfaces web e interações nas aplicações.' },
      ],
    },
    {
      title: 'Dados e integrações',
      description: 'Da estrutura dos dados à informação para decisão.',
      skills: [
        { name: 'Oracle Database', detail: 'Desenvolvimento e otimização de banco de dados.' },
        { name: 'Modelagem de dados', detail: 'Estruturação de dados a partir dos requisitos do sistema.' },
        { name: 'APIs e sistemas externos', detail: 'Integração de aplicações e serviços.' },
      ],
    },
    {
      title: 'Evolução de sistemas',
      description: 'Manutenção e melhoria contínua das aplicações.',
      skills: [
        { name: 'Suporte técnico', detail: 'Investigação e correção de bugs em sistemas Oracle APEX.' },
        { name: 'Performance', detail: 'Análise e otimização de consultas e aplicações.' },
        { name: 'Requisitos e versionamento', detail: 'Análise de necessidades, Git/GitHub e metodologias ágeis.' },
      ],
    },
  ]

  return (
    <section id="skills" className="relative bg-bg-primary py-24 lg:py-32" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 id="skills-title" className="section-title">Conhecimento na <span className="italic text-primary">prática.</span></h2>
          <p className="mt-6 leading-relaxed text-text-secondary">Tecnologias e competências aplicadas ao desenvolvimento, à manutenção e à evolução de sistemas empresariais.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {categories.map((category) => (
            <div key={category.title} className="card-dark p-6 sm:p-8">
              <h3 className="mb-2 font-display text-2xl">{category.title}</h3>
              <p className="mb-8 text-sm leading-relaxed text-text-secondary">{category.description}</p>
              <dl className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <dt className="mb-1 font-medium text-primary">{skill.name}</dt>
                    <dd className="text-sm leading-relaxed text-text-secondary">{skill.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
