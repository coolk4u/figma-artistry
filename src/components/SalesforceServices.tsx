import React from 'react';

export const SalesforceServices: React.FC = () => {
  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/cf939588ae9bc952984a6bb022e742c30a792968?placeholderIfAbsent=true",
      title: "Implementation Excellence",
      description: "Delivering tailored Salesforce rollouts with speed, scale, and strategic fit."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/7990ea3765e16a75eb9fa648266a124399b87fb0?placeholderIfAbsent=true",
      title: "Flexible Salesforce Talent",
      description: "Scaling Salesforce capabilities with the right experts, at the right time"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/b173e7e88916f8015bb149153a053e6ca3aa8d35?placeholderIfAbsent=true",
      title: "Support & Managed Services",
      description: "Delivering tailored Salesforce rollouts with speed, scale, and strategic fit."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055683.png",
      title: "Proven Business Transformation",
      description: "18+ years delivering measurable business value through digital transformation expertise"
    }
  ];

  const features = [
    "🧬 Smarter CRM with AI & Data-Driven Insights",
    "🔧 Maximize Salesforce Power with Native Feature",
    "🌐 Low-Code Solutions Built for Speed & Scale",
    "🔨 Custom Fit Enhancements for Real Business Impact",
    "⚙️ Optimize Processes for Sustainable Growth"
  ];

  return (
    <section className="bg-[rgba(42,50,132,1)] w-full overflow-hidden mt-8 px-20 py-[129px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      {/* Optimized services grid */}
      <div className="grid grid-cols-4 gap-6 w-full max-md:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1">
        {services.map((service, index) => (
          <article
            key={index}
            className="bg-[rgba(254,254,255,0.1)] border flex flex-col items-center justify-center h-[220px] w-full px-4 py-6 rounded-lg border-[rgba(254,254,255,0.2)] border-solid"
          >
            <div className="flex flex-col items-center w-full">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-[#FEFEFF] text-xl font-medium text-center">
                {service.title}
              </h3>
              <p className="text-[#EBF9FF] text-sm font-semibold mt-2 text-center">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      
      {/* Rest of your content remains unchanged */}
      <div className="mb-[-25px] mt-12 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="grow text-[#FEFEFF] max-md:max-w-full max-md:mt-10">
              <h2 className="text-[#FEFEFF] text-[40px] font-semibold leading-[1.2] max-md:max-w-full">
                Salesforce Services
              </h2>
              <div className="w-full max-w-[631px] text-xl font-normal mt-4 max-md:max-w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex w-full gap-2 flex-wrap mt-4 max-md:max-w-full">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3fd0a91ef727033d44541d5d457eaf974ddcfe94?placeholderIfAbsent=true"
                      alt="Check mark"
                      className="aspect-[1] object-contain w-6 shrink-0"
                    />
                    <p className="text-[#FEFEFF] flex-1 shrink basis-[0%] max-md:max-w-full">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <article className="bg-[rgba(254,254,255,0.1)] border flex min-h-[266px] grow flex-col items-stretch text-center justify-center w-full mt-2.5 px-7 py-[55px] rounded-lg border-[rgba(254,254,255,0.2)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex w-full flex-col items-stretch max-md:max-w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/d593021b75049b88fc9b7e103201a5c4e619d288?placeholderIfAbsent=true"
                  alt="Strategic Consulting"
                  className="aspect-[1] object-contain w-12 self-center"
                />
                <div className="w-full mt-4 max-md:max-w-full">
                  <h3 className="text-[#FEFEFF] text-2xl font-medium max-md:max-w-full">
                    Strategic Consulting
                  </h3>
                  <p className="text-[#EBF9FF] text-base font-semibold mt-2 max-md:max-w-full">
                    Shaping Salesforce strategies that align with business goals & drive transformation
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};