export default function Skills() {

  const skillCategories = [
    {
      title: 'Desenvolvimento',
      description: 'Stack principal e tecnologias do dia a dia.',
      size: 'medium',
      skills: [
        { name: 'Oracle APEX', level: 90 },
        { name: 'SQL/PL-SQL', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 80 },
      ],
    },
    {
      title: 'Banco de Dados',
      description: 'Modelagem, queries e tuning.',
      size: 'medium',
      skills: [
        { name: 'Oracle Database', level: 85 },
        { name: 'Modelagem de Dados', level: 80 },
        { name: 'Performance Tuning', level: 70 },
      ],
    },
    {
      title: 'Ferramentas & Métodos',
      description: 'Versionamento, ágil e análise.',
      size: 'medium',
      skills: [
        { name: 'Git/GitHub', level: 75 },
        { name: 'Metodologias Ágeis', level: 80 },
        { name: 'Análise de Requisitos', level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 lg:py-32 bg-bg-primary relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div
            className="lg:col-span-4"
          >
          </div>

          <h2
            className="lg:col-span-8 lg:col-start-3 section-title text-center"
          >
            Habilidades{' '}
            <span className="italic text-primary">técnicas.</span>
          </h2>
        </div>

        {/* Grid simétrico — 3 cards com mesmo tamanho */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-dark p-8 hover:border-primary/40 transition-colors duration-300"
            >
              {/* Cabeçalho do card */}
              <div className="mb-8">
                <h3 className="font-display text-2xl text-text-primary mb-1">
                  {category.title}
                </h3>
                <p className="text-text-secondary text-sm">{category.description}</p>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-text-primary font-medium">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-primary">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-bg-primary rounded-full h-1 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
