import React from 'react';
import { EnquireButton } from './EnquireButton';

export const About: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-[#FEFEFF] mt-2 pt-[77px] pb-[35px] px-[76px] max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[45%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="w-full max-md:max-w-full">
              <div className="flex w-[473px] max-w-full flex-col items-stretch text-[#25A4DD]">
                <div className="flex items-center gap-2 text-base font-normal">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/53675d9d267b9fbcd82d937050f2504182f0bfa9?placeholderIfAbsent=true"
                    alt="Company icon"
                    className="aspect-[9.01] object-contain w-9 stroke-[4px] stroke-[#25A4DD] self-stretch shrink-0 my-auto"
                  />
                  <span className="text-[#25A4DD] self-stretch my-auto">
                    About our company
                  </span>
                </div>
                <h1 className="text-5xl font-semibold mt-6 max-md:max-w-full max-md:text-[40px]">
                  <span className="text-[#003B55]">Who Are </span>
                  <span className="text-[#25A4DD]">We</span>
                </h1>
              </div>
              <p className="text-[#828B94] text-base font-normal leading-6 mt-4 max-md:max-w-full">
                We are a team of passionate CX experts with decades of
                industry experience in Designing, Consulting, Implementation,
                Delivery and Training.We transform the customer experience of
                organizations by leveraging Salesforce and Oracle capabilities
                to ensure the organizations derive maximum value out of their
                CX applications through customer-centric approach.
              </p>
            </div>
            <div className="mt-[25px]">
              <EnquireButton className="max-md:px-5" />
            </div>
          </div>
        </div>
        <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full text-center max-md:max-w-full max-md:mt-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3bdd5529c39f5a764a07fc21d009b1a599b116a9?placeholderIfAbsent=true"
              alt="Team collaboration"
              className="aspect-[1.58] object-contain w-full ml-[26px] mr-[27px] rounded-lg max-md:max-w-full max-md:mr-2.5"
            />
            <div className="flex items-center gap-5 flex-wrap max-md:max-w-full">
              <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] self-stretch flex flex-col overflow-hidden items-center justify-center my-auto px-4 py-2 rounded-lg">
                <div className="text-[#25A4DD] text-5xl font-bold max-md:text-[40px]">
                  <span className="text-[32px] leading-[38px]">200</span>
                  <span className="font-semibold text-[24px] leading-[36px]">+</span>
                </div>
                <div className="text-[#003B55] text-base font-normal">
                  Certified Cloud Experts
                </div>
              </div>
              <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] self-stretch flex flex-col overflow-hidden items-center justify-center w-[213px] my-auto px-4 py-2 rounded-lg">
                <div className="text-[#1487BB] text-5xl font-bold max-md:text-[40px]">
                  <span className="text-[32px] leading-[38px]">80</span>
                  <span className="font-semibold text-[24px] leading-[36px]">+</span>
                </div>
                <div className="text-[#003B55] text-base font-normal">
                  Projects Delivered
                </div>
              </div>
              <div className="shadow-[0px_4px_16px_4px_rgba(69,144,178,0.4)] self-stretch flex flex-col overflow-hidden items-center justify-center my-auto px-4 py-2 rounded-lg">
                <div className="text-[#076C99] text-5xl font-bold max-md:text-[40px]">
                  <span className="text-[32px] leading-[38px]">300</span>
                  <span className="font-semibold text-[24px] leading-[36px]">+</span>
                </div>
                <div className="text-[#003B55] text-base font-normal">
                  Cloud Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
