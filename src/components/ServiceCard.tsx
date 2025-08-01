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
    <article className="justify-center items-stretch border self-stretch flex min-w-60 flex-col overflow-hidden grow shrink w-[326px] bg-[#FEFEFF] my-auto px-[33px] py-[27px] rounded-lg border-solid border-[#E3E9EE] max-md:px-5">
      <div className="flex flex-col items-stretch">
        <div className="flex flex-col items-stretch text-xl text-[#424950] font-semibold justify-center">
          <img
            src={icon}
            alt={title}
            className="aspect-[1] object-contain w-20 rounded-lg"
          />
          <h3 className="text-[#424950] mt-4">
            {title}
          </h3>
        </div>
        <p className="text-[#6C757D] leading-[22px] mt-2">
          {description}
        </p>
        <div className="w-full leading-loose mt-2">
          {features.map((feature, index) => (
            <div key={index} className="flex w-full items-center gap-2 mt-1">
              <img
                src={checkIcon}
                alt="Check mark"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
              <span className="text-[#6C757D] self-stretch flex-1 shrink basis-[0%] my-auto">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
