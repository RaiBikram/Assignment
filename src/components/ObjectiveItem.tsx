import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

export interface ObjectiveItemProps {
  title: string;
  description: string;
}

const ObjectiveItem: React.FC<ObjectiveItemProps> = ({ title, description }) => {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1.5 flex-shrink-0">
        <BsFillCircleFill className="h-4 w-4 text-blue-500" />
      </div>
      
      <div className="text-black">
        <span className="font-semibold text-black">{title}:</span> {description}
      </div>
    </li>
  );
};

export default ObjectiveItem;