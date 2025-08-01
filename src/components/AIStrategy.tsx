import React from 'react';

export const AIStrategy: React.FC = () => {
  const aiFeatures = [
    {
      title: "Pre-Sales Intelligence",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/eba1d47822c4596a3f28d41afdf6dab86650b5f8?placeholderIfAbsent=true",
      description: "AI helps tailor every interaction, from solutioning and demos to POCs. Content recommendations, scenario simulations, and proposal automation shape a compelling, data-backed narrative.",
      borderColor: "#3AC2FF"
    },
    {
      title: "Insight-Driven Intelligence",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/d37a3dfcc7f8e2138ef512351420ccc9f6b6fdfa?placeholderIfAbsent=true",
      description: "By applying machine learning and predictive modelling, we translate your raw data into forward-looking strategies to uncover hidden opportunities, and make smarter decisions faster.",
      borderColor: "#25A4DD"
    },
    {
      title: "Enablement & AI Literacy",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/bd0b711f0d7fef2501a3c9bb485fbe72e07bf5ab?placeholderIfAbsent=true",
      description: "We empower your workforce to harness AI with confidence. Through custom training programs and change adoption initiatives, we help your teams navigate the AI landscape and unlock its full potential",
      borderColor: "#3AC2FF"
    },
    {
      title: "Intelligent Development",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/782e439b357264aa9ce5b28a3e95bac474fe39c6?placeholderIfAbsent=true",
      description: "Every development cycle is guided by tools like Agentforce for developers, Co-pilot, Builder.io in scanning and assisting to ensure aligned outcomes.",
      borderColor: "#3AC2FF"
    },
    {
      title: "AI-First Quality Engineering",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2efab7705493f5da9f6934b19cf76638834112ac?placeholderIfAbsent=true",
      description: "Automated test generation, and self-healing scripts reduce defects and rework, while increasing test coverage and speed-to-market.",
      borderColor: "#3AC2FF"
    }
  ];

  return (
    <section className="bg-white z-10 flex mt-[-23px] w-full flex-col overflow-hidden items-center text-sm px-20 py-[43px] max-md:max-w-full max-md:px-5">
      <div className="flex items-center gap-2 text-[#25A4DD] font-normal">
        <img
          src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/0bf5f221ca8c27c9d4e36fade8f0809cb2db6023?placeholderIfAbsent=true"
          alt="AI Strategy icon"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <span className="text-[#25A4DD] self-stretch my-auto">
          AI Strategy & Managed Solutions
        </span>
      </div>
      <h2 className="text-4xl font-medium leading-[48px] text-center ml-[18px] mt-[25px] max-md:max-w-full">
        From blueprint to breakthrough we embed AI into your operations with
        precision scalability and impact
      </h2>
      <div className="flex w-full max-w-[1238px] flex-col items-stretch mt-[49px] max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-center flex-wrap max-md:max-w-full">
          {aiFeatures.slice(0, 3).map((feature, index) => (
            <article
              key={index}
              className="items-stretch self-stretch flex min-w-60 min-h-[252px] flex-col grow shrink w-[330px] bg-[#FEFEFF] my-auto px-4 py-[17px] border-l-[#E3E9EE] border-[rgba(227,233,238,1)] border-l border-solid"
            >
              <div className="items-stretch flex flex-col text-[#003B55] font-medium justify-center bg-[#EBF9FF] p-2">
                <h3 className="text-[#003B55]">
                  {feature.title}
                </h3>
              </div>
              <div className="relative flex w-full flex-col text-[#6C757D] font-normal leading-[22px] mt-4">
                <div 
                  className="absolute z-0 min-h-[49px] w-0 left-[-18px] top-[-70px] h-[49px] border-solid border-[6px]"
                  style={{ 
                    backgroundColor: feature.borderColor,
                    borderColor: feature.borderColor
                  }}
                />
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="aspect-[1] object-contain w-[70px] z-0 rounded-[34px]"
                />
                <p className="text-[#6C757D] self-stretch z-0 mt-2">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex items-center flex-wrap mt-6 max-md:max-w-full">
          {aiFeatures.slice(3, 5).map((feature, index) => (
            <article
              key={index + 3}
              className="items-stretch self-stretch flex min-w-60 min-h-[252px] flex-col w-[412px] bg-[#FEFEFF] my-auto pt-4 pb-[39px] px-4 border-l-[#E3E9EE] border-[rgba(227,233,238,1)] border-l border-solid"
            >
              <div className="items-stretch flex flex-col text-[#003B55] font-medium justify-center bg-[#EBF9FF] p-2">
                <h3 className="text-[#003B55]">
                  {feature.title}
                </h3>
              </div>
              <div className="relative flex w-full flex-col text-[#6C757D] font-normal leading-[22px] mt-4">
                <div 
                  className="absolute z-0 min-h-[49px] w-0 left-[-18px] top-[-70px] h-[49px] border-solid border-[6px]"
                  style={{ 
                    backgroundColor: feature.borderColor,
                    borderColor: feature.borderColor
                  }}
                />
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="aspect-[1] object-contain w-[70px] z-0"
                />
                <p className="text-[#6C757D] self-stretch z-0 mt-2">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
