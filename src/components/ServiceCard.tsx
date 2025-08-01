import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  checkIcon: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  checkIcon
}) => {
  return (
    <div className="flex flex-col border border-[#E3E9EE] bg-white rounded-lg p-5 h-full">
      <div className="flex flex-col">
        <img src={icon} alt={title} className="w-12 h-12 mb-3" />
        <h3 className="text-lg font-semibold text-[#424950] mb-2">
          {title}
        </h3>
        <p className="text-[#6C757D] text-base mb-4 leading-snug">
          {description}
        </p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <img src={checkIcon} alt="✓" className="w-4 h-4 mr-2" />
              <span className="text-[#6C757D] text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
