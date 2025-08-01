import React from 'react';

export const PledgeSection: React.FC = () => {
  const pledgeItems = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/7d250c1ee3890bb0f223b81c6ec20a334d3fbfda?placeholderIfAbsent=true",
      text: "Access to our network and community events to build industry connections."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/41c164be540eec7c7122ea29407bc50ffb953689?placeholderIfAbsent=true",
      text: "Real-world projects and mentorship from experienced professionals."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/465dc31e53b5c400b26618bb6f1dcb4b8dedbb88?placeholderIfAbsent=true",
      text: "Career guidance and certification readiness support."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/7cb5850a420f8702046f4d20c14d907cd5d76248?placeholderIfAbsent=true",
      text: "Comprehensive Learning on Salesforce fundamentals, configuration, and development."
    }
  ];

  return (
    <section className="w-full overflow-hidden bg-[#F7FBFF] mt-[85px] pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <h2 className="text-[#424950] text-2xl font-semibold max-md:max-w-full">
              At 4CECloud Labs, we support the Pledge 1% movement by
              committing 1% of our time and expertise to making a positive
              impact.
            </h2>
            <div className="flex items-center gap-4 justify-center flex-wrap mt-[79px] max-md:max-w-full max-md:mt-10">
              {pledgeItems.map((item, index) => (
                <article
                  key={index}
                  className={`items-center self-stretch flex min-h-[203px] flex-col text-sm text-[rgba(3,43,94,1)] font-normal text-center w-[148px] my-auto pt-4 ${index === 2 ? 'pb-[50px]' : index === 3 ? 'pb-2' : 'pb-[29px]'} px-4 ${index < 3 ? 'border-r-[#E3E9EE] border-r border-solid' : ''}`}
                >
                  <img
                    src={item.icon}
                    alt={`Pledge item ${index + 1}`}
                    className="aspect-[1] object-contain w-6"
                  />
                  <p className="mt-2">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="text-[#424950] text-base font-medium leading-6 mr-[51px] mt-16 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
              <span className="text-[#005277]">
                We believe that technology can be a force for good
              </span>
              —and that starts with access and opportunity. By sharing our
              knowledge and giving back to the community, we're helping build
              a more inclusive and skilled tech workforce.
            </p>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/058faeb9a601fa05dce6a02493670128fd95c944?placeholderIfAbsent=true"
            alt="Community engagement"
            className="aspect-[0.94] object-contain w-full grow max-md:max-w-full max-md:mt-[19px]"
          />
        </div>
      </div>
    </section>
  );
};
