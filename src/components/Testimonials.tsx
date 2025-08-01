import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      type: "primary",
      date: "Jan 9, 2025",
      content: "4CE Cloud Labs continue to be an excellent partner to Wiley from the initial scoping and design discussions through to the implementation and support of our latest project. We couldn't have asked for a better team to undertake some of our key roadmap initiatives."
    },
    {
      type: "secondary",
      date: "Jan 3, 2024",
      content: "4CE Cloud Labs have excelled in our dealings with them and provided us with a great team, which augments our own internal SFDC team members, and has made it a very strong team delivering quality solutions and ensuring our org runs smoothly as possible."
    },
    {
      type: "secondary",
      date: "May 10, 2024",
      content: "4CE Cloud Labs have been a truly collaborative partner and have delivered some great solutions and in turn benefits for our organization."
    }
  ];

  const clientImages = [
    "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6dffd083081545101905f80a6fccd50e5b7f20bc?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/872532df3ce0cd4abd1887412e5381045eb57e57?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/d791293106786df16fcc3c26e04ad079ef08da11?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/5086d30416c479bb9a6976e7071fe16fd3c1480b?placeholderIfAbsent=true"
  ];

  return (
    <section className="w-full overflow-hidden bg-[#FEFEFF] mt-6 pt-[100px] pb-5 px-20 max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch mt-1 max-md:max-w-full max-md:mt-10">
            <div className="bg-[rgba(255,194,71,1)] flex w-8 shrink-0 h-8 ml-[86px] rounded-[50%] max-md:ml-2.5" />
            <div className="bg-[#1487BB] w-[165px] shrink-0 h-1 mt-[81px] border-[rgba(20,135,187,1)] border-solid border-4 max-md:mt-10" />
            <div className="flex items-stretch flex-wrap mt-[76px] max-md:mt-10">
              <div className="flex w-fit flex-col grow shrink-0 basis-0 max-md:max-w-full">
                <div className="self-stretch max-md:max-w-full">
                  <h2 className="text-[#424950] text-5xl font-bold max-md:max-w-full max-md:text-[40px]">
                    What Our Clients Are Saying
                  </h2>
                  <p className="text-[#828B94] text-base font-normal leading-6 mt-[22px] max-md:max-w-full">
                    We collaborate closely with clients to solve complex
                    Salesforce challenges.Their success stories reflect our
                    commitment to quality and partnership.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  {clientImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Client ${index + 1}`}
                      className="aspect-[1/1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[50%]"
                    />
                  ))}
                </div>
                <div className="bg-[#92DDFF] flex w-4 shrink-0 h-4 fill-[#92DDFF] ml-[97px] mt-[57px] rounded-[50%] max-md:ml-2.5 max-md:mt-10" />
              </div>
              <div className="bg-[#E3E9EE] flex w-4 shrink-0 h-4 fill-[#E3E9EE] mt-[338px] rounded-[50%] max-md:mt-10" />
            </div>
            <div className="bg-[#1487BB] self-center flex w-8 shrink-0 h-8 fill-[#1487BB] ml-[26px] mt-[17px] rounded-[50%]" />
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
            <div className="flex items-stretch text-[#FEFEFF]">
              <article className="items-stretch shadow-[0_4px_32px_16px_rgba(20,135,187,0.20)] flex w-fit flex-col overflow-hidden grow shrink-0 basis-0 bg-[#1487BB] -mr-5 px-12 py-6 rounded-lg max-md:max-w-full max-md:px-5">
                <div className="flex items-center gap-2 text-xl font-semibold text-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2ce24b766170ca02b6a042409db924d75342b9a2?placeholderIfAbsent=true"
                    alt="Salesforce verified"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch flex min-w-60 items-center gap-4 my-auto">
                    <span className="text-[#FEFEFF] self-stretch my-auto">
                      Salesforce Verified
                    </span>
                    <div className="self-stretch flex items-center gap-1 my-auto">
                      <div className="self-stretch flex items-center gap-4 my-auto">
                        <div className="bg-[#FEFEFF] self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(254,254,255,1)] border-solid border-2" />
                        <span className="text-[#FEFEFF] self-stretch my-auto">
                          {testimonials[0].date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#FEFEFF] text-base font-medium leading-6 mt-4 max-md:max-w-full">
                  {testimonials[0].content}
                </p>
              </article>
              <div className="bg-[#3AC2FF] flex w-8 shrink-0 h-8 fill-[#3AC2FF] mt-[100px] rounded-[50%] max-md:mt-10" />
            </div>
            
            {testimonials.slice(1).map((testimonial, index) => (
              <article
                key={index}
                className={`items-stretch flex w-full flex-col bg-[#F7FBFF] ${index === 0 ? 'mr-3 mt-10' : 'mt-[47px]'} px-12 py-6 rounded-lg max-md:max-w-full max-md:mr-2.5 ${index === 0 ? 'max-md:mt-10' : 'max-md:mt-10'} max-md:px-5`}
              >
                <div className="flex items-center gap-2 text-xl text-[#003B55] font-semibold text-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/d93563c3e5c6c3972d0b83ef3dba9fc6b1422abe?placeholderIfAbsent=true"
                    alt="Salesforce verified"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch flex min-w-60 items-center gap-4 my-auto">
                    <span className="text-[#003B55] self-stretch my-auto">
                      Salesforce Verified
                    </span>
                    <div className="self-stretch flex items-center gap-1 my-auto">
                      <div className="self-stretch flex items-center gap-4 my-auto">
                        <div className="bg-[#003B55] self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(0,59,85,1)] border-solid border-2" />
                        <span className="text-[#003B55] self-stretch my-auto">
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#6C757D] text-base font-medium leading-6 mt-4 max-md:max-w-full">
                  {testimonial.content}
                </p>
              </article>
            ))}
            
            <div className="bg-[rgba(255,194,71,1)] z-10 flex mt-[-31px] w-6 shrink-0 h-6 mr-[39px] rounded-[50%] max-md:mr-2.5" />
          </div>
        </div>
      </div>
    </section>
  );
};
