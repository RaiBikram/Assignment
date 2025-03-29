import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React, { JSX } from "react";

// Contact information data
const contactInfo = [
  {
    icon: <PhoneIcon className="w-[30px] h-[30px] text-[#00AEEF]" />,
    text: "+1 (347) 321-0819",
  },
  {
    icon: <MapPinIcon className="w-[30px] h-[30px] text-[#00AEEF]" />,
    text: "California,USA",
  },
  {
    icon: <MailIcon className="w-[30px] h-[30px] text-[#00AEEF]" />,
    text: "globalactcouncil.com",
  },
];

// Form fields data
const formFields = [
  {
    id: "firstName",
    label: "Your first name",
    placeholder: "Enter your first name",
  },
  {
    id: "lastName",
    label: "Your last name",
    placeholder: "Enter your last name",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
];

export const ContactUsComponent = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16">
      {/* Decorative circles */}
      <div className="absolute w-[406px] h-[406px] top-8 right-0 bg-primary-colorprimary-tintprimary-tint09 rounded-full" />
      <div className="absolute w-[153px] h-[153px] bottom-8 right-24 bg-primary-colorprimary-tintprimary-tint09 rounded-full" />
      <div className="absolute w-[153px] h-[153px] top-0 left-1/3 bg-primary-colorprimary-tintprimary-tint09 rounded-full" />
      <div className="absolute w-[255px] h-[255px] bottom-64 left-0 bg-primary-colorprimary-tintprimary-tint09 rounded-full" />

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto bg-text-colortext-tinttext-tint-09 rounded-xl p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Contact information */}
          <div className="flex-1 bg-white rounded-xl shadow-md">
            <div className="p-9">
              <div className="flex flex-col gap-2 mb-12">
                <h3 className="font-text-text-xl-medium text-primary-colorprimary-shadesprimarry-shade00 text-[#00AEEF]">
                  CONTACT US
                </h3>
                <h2 className="text-[36px] font-bold text-text-shade0 text-[#101720]">
                  We&apos;re Here to Help
                </h2>
              </div>

              <p className="font-text-text-xl-regular text-text-colortext-shadetext-shade-00 mb-16 text-[#101720]">
                Lorem ipsum dolor sit amet consectetur. Praesent aliquet in
                blandit cursus pulvinar dignissim malesuada. Pellentesque
                viverra diam mattis arcu pellentesque sagittis malesuada a
                molestie. Volutpat sit mus velit elementum. Iaculis fames nulla
                dui leo vel. Velit suspendisse sed nulla placerat sagittis
                vulputate.
              </p>

              <div className="flex flex-col gap-9">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-[26px] ">
                    {item.icon}
                    <span className="font-text-2xl-regular text-text-colortext-shadetext-shade-00 text-[#101720]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="flex-1 bg-primary-colorprimary-shadesprimarry-shade00 rounded-2xl shadow-md ">
            <div className="p-9  bg-[#00AEEF] rounded-2xl">
              <h3 className="font-text-text-xl-medium text-text-colortext-tinttext-tint-10 mb-8">
                Get Started
              </h3>

              <div className="flex flex-col gap-6">
                {formFields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-1">
                    <label className="font-text-sm-medium text-primary-colorprimary-tintprimary-tint10 ">
                      {field.label}
                    </label>
                    <input
                      className="h-12 bg-basewhite border border-[#d7d9dc] rounded-md px-3 text-text-tint20 font-text-sm-regular bg-white text-[#101720]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1  ">
                  <label className="font-text-sm-medium text-primary-colorprimary-tintprimary-tint10">
                    How can we help you?
                  </label>
                  <textarea
                    className="h-[172px]  border border-[#d7d9dc] rounded-md p-3 text-text-tint20 font-text-sm-regular  bg-white  text-[#101720]"
                    placeholder="Message"
                  />
                </div>

                <button 
                  className="h-12 mt-4 w-full bg-primary-colorprimary-tintprimary-tint10 text-primary-colorprimary-shadesprimarry-shade00 font-bold rounded-md bg-white text-[#00AEEF]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};