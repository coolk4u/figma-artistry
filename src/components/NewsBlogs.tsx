import React from 'react';

export const NewsBlogs: React.FC = () => {
  const articles = [
    {
      category: "Cloud Transformation",
      title: "How an FMCG Brand Achieved 99.99% Uptime Post Cloud Migration.",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f6e1d9982e5767e0b343808c1606f21c7799104b?placeholderIfAbsent=true"
    },
    {
      category: "AI-Powered Insights",
      title: "Retail Giant Boosts Customer Retention with Predictive Analytics.",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/c6167a63a89bacc0ebef8f4247fe9800113df24c?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center mt-8 px-[70px] py-6 max-md:max-w-full max-md:px-5">
      <div className="flex gap-7 flex-wrap px-6 py-10 border-y-[#E3E9EE] border-t border-solid border-b max-md:max-w-full max-md:px-5">
        <div className="min-w-60 w-[346px]">
          <div className="w-full">
            <h2 className="text-[#003B55] text-xl font-normal leading-none">
              News & Blogs That Inspire
            </h2>
            <p className="text-[rgba(66,62,66,1)] text-base font-medium leading-[23px] mt-4">
              Discover how 4CE Cloud Labs has helped businesses across
              industries achieve scalability, and growth through powerful
              cloud solutions.
            </p>
          </div>
          <div className="flex w-[116px] max-w-full gap-2 text-xl text-[#25A4DD] font-semibold mt-[26px]">
            <button className="text-[#25A4DD] w-[116px] hover:underline transition-all duration-300">
              Learn more
            </button>
          </div>
        </div>
        {articles.map((article, index) => (
          <article
            key={index}
            className="flex min-w-60 items-center gap-[40px_46px] text-[rgba(66,62,66,1)] pl-4 pb-14 border-[rgba(235,235,235,1)] border-l"
          >
            <div className="self-stretch min-w-60 w-[251px] my-auto">
              <h3 className="text-sm font-semibold leading-none">
                {article.category}
              </h3>
              <p className="text-base font-normal leading-[23px] mt-2">
                {article.title}
              </p>
            </div>
            <img
              src={article.image}
              alt={article.category}
              className="aspect-[1] object-contain w-[98px] self-stretch shrink-0 my-auto"
            />
          </article>
        ))}
      </div>
    </section>
  );
};
