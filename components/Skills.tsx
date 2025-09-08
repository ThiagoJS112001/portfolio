'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([])

  const skillCategories = [
    {
      title: 'Desenvolvimento',
      skills: [
        { name: 'Oracle APEX', level: 90 },
        { name: 'SQL/PL-SQL', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 80 },
      ],
    },
    {
      title: 'Banco de Dados',
      skills: [
        { name: 'Oracle Database', level: 85 },
        { name: 'Modelagem de Dados', level: 80 },
        { name: 'Performance Tuning', level: 70 },
      ],
    },
    {
      title: 'Ferramentas & Metodologias',
      skills: [
        { name: 'Git/GitHub', level: 75 },
        { name: 'Metodologias Ágeis', level: 80 },
        { name: 'Análise de Requisitos', level: 85 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill')
            if (skillName && !visibleSkills.includes(skillName)) {
              setVisibleSkills((prev) => [...prev, skillName])
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    const skillElements = document.querySelectorAll('[data-skill]')
    skillElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [visibleSkills])

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Habilidades Técnicas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-bg-secondary rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} data-skill={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-secondary font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: visibleSkills.includes(skill.name) ? `${skill.level}%` : 0,
                        }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
