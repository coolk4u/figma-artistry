import React from 'react';

export const Footer: React.FC = () => {
  const locations = [
    {
      title: "India - Bengaluru",
      address: "3rd Floor, RJ Complex, 55/3,Varthur-Sarjapura RdBengaluru - 562125, KarnatakaPhone: +91 9916440917"
    },
    {
      title: "United States of America",
      address: "1200 route, 22 east\nsuite 2000 Bridgewater\nNew Jersey 08807\nPhone: +1 (919) 633-1324"
    },
    {
      title: "United States of America",
      address: "5000 Centre Green Way\nSuite 500,Cary\nNorth Carolina,27513\nPhone: +1 (919) 633-1324"
    }
  ];

  const quickLinks = [
    { text: "Services", icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true" },
    { text: "Accelerators", icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true" },
    { text: "Case studies", icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/a1f0bf4659e1c7ec8b23a676c0a9e83733f77643?placeholderIfAbsent=true" },
    { text: "Blogs", icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/decaf54c1a6bdc1542a29d8c66c6e2ae36108731?placeholderIfAbsent=true" }
  ];

  const socialIcons = [
    "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dda4fb2f08faf30cbeeed0d156c661e0641c3211?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2feb42b1ba5e09e83bca0255e189e467f1f509b0?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/50c017c363b3bdefd9175c08354e2060acb0bbf6?placeholderIfAbsent=true"
  ];

  return (
    <footer className="bg-[rgba(6,43,85,1)] w-full overflow-hidden mt-4 pt-9 pb-[97px] px-20 max-md:max-w-full max-md:px-5">
      <div className="flex min-h-16 gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ec04a159b9b6d80af3b88ba7dc27df8a838dafac?placeholderIfAbsent=true"
          alt="4CE Cloud Labs Logo"
          className="aspect-[3.23] object-contain w-[200px] shrink-0"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-6">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:opacity-80 transition-opacity duration-300"
                aria-label={`Social media link ${index + 1}`}
              >
                <img
                  src={icon}
                  alt={`Social media ${index + 1}`}
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-full text-[#F7FBFF] mt-2 max-md:max-w-full">
        <div className="border bg-[#F7FBFF] min-h-px w-full border-[rgba(247,251,255,1)] border-solid max-md:max-w-full" />
        <div className="flex w-full gap-[40px_100px] justify-between flex-wrap mt-10 max-md:max-w-full">
          {locations.map((location, index) => (
            <address
              key={index}
              className={`min-w-60 ${index === 0 ? 'w-[244px]' : 'w-[252px]'} not-italic`}
            >
              <h3 className="text-[#F7FBFF] text-ellipsis text-xl font-semibold leading-[1.4]">
                {location.title}
              </h3>
              <p className="text-[#F7FBFF] text-base font-normal leading-6 mt-2 whitespace-pre-line">
                {location.address}
              </p>
            </address>
          ))}
          
          <nav className="w-[146px]">
            <h3 className="text-[#F7FBFF] text-ellipsis text-xl font-semibold leading-[1.4]">
              Quick Links
            </h3>
            <ul className="w-full max-w-[146px] text-base font-normal mt-2 space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex w-full items-center gap-1">
                  <img
                    src={link.icon}
                    alt=""
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  />
                  <a
                    href="#"
                    className="text-[#F7FBFF] text-ellipsis self-stretch flex-1 my-auto hover:underline transition-all duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
