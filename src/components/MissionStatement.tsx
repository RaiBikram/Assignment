import type { FC } from "react"

const MissionStatement: FC = () => {
  return (
    <div className="min-h-screen p-8 md:p-12 bg-gradient-to-br from-sky-50 via-white to-sky-50">
      <div className="max-w-3xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To empower youth globally to become catalysts for transformative change by fostering collaboration, building
            capacity, and championing sustainable solutions to complex global challenges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            A world where empowered youth lead the way toward peace, sustainability, and inclusivity through innovation,
            collaboration, and education.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Objectives</h2>
          <ul className="space-y-4">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1.5 h-4 w-4 rounded-full bg-sky-500 flex-shrink-0" />
                <div>
                  <span className="font-semibold">{objective.title}:</span> {objective.description}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

const objectives = [
  {
    title: "Develop Leadership",
    description: "Equip youth with the tools and skills to address global challenges effectively.",
  },
  {
    title: "Promote Collaboration",
    description: "Bridge gaps between governments, NGOs, businesses, and communities to achieve collective goals.",
  },
  {
    title: "Advocate for Change",
    description: "Influence policies that prioritize sustainability, equity, and youth empowerment.",
  },
  {
    title: "Enhance Education",
    description: "Provide access to resources, training, and knowledge-sharing platforms for young changemakers.",
  },
  {
    title: "Foster Global Dialogue",
    description: "Cultivate international cooperation to ensure equitable solutions to global problems.",
  },
]

export default MissionStatement

