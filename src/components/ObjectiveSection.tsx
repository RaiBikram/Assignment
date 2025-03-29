import React from "react";
import ObjectiveItem from "./ObjectiveItem";
// import { BsFillCircleFill } from 'react-icons/bs';

// interface ObjectiveItemProps {
//   title: string;
//   description: string;
// }

// const ObjectiveItem: React.FC<ObjectiveItemProps> = ({ title, description }) => {
//   return (
//     <li className="flex items-start gap-3">
//       <div className="mt-1.5 flex-shrink-0">
//         <BsFillCircleFill className="h-4 w-4 text-blue-500" />
//       </div>

//       <div className="text-black">
//         <span className="font-semibold text-black">{title}:</span> {description}
//       </div>
//     </li>
//   );
// };

interface ObjectivesProps {
  heading: string;
}

const ObjectivesSection: React.FC<ObjectivesProps> = ({ heading }) => {
  const objectives = [
    {
      title: "Develop Leadership",
      description:
        "Equip youth with the tools and skills to address global challenges effectively.",
    },
    {
      title: "Promote Collaboration",
      description:
        "Bridge gaps between governments, NGOs, businesses, and communities to achieve collective goals.",
    },
    {
      title: "Advocate for Change",
      description:
        "Influence policies that prioritize sustainability, equity, and youth empowerment.",
    },
    {
      title: "Enhance Education",
      description:
        "Provide access to resources, training, and knowledge-sharing platforms for young changemakers.",
    },
    {
      title: "Foster Global Dialogue",
      description:
        "Cultivate international cooperation to ensure equitable solutions to global problems.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full  p-6 ">
        <h2 className="text-3xl font-bold mb-8 text-black">{heading}</h2>

        <ul className="space-y-6">
          {objectives.map((objective, index) => (
            <ObjectiveItem
              key={index}
              title={objective.title}
              description={objective.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ObjectivesSection;
