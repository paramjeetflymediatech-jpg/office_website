"use client";

import Image from "next/image";
import ContactFormSection from "./ContactFormSection";

export default function EcommercePostPricingSection() {
  return (
    <div className="">
      {/* Section 3: Setting up the product to sell */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
                Setting up the product to sell:
              </h2>
              <div className="h-1.5 w-24 bg-[#ff9900] rounded-full"></div>
            </div>
            
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-medium">
              <p>
                Now the next step will take your attention and hard work. Because you have to do all kinds of research before putting up your product online. You should check out your competition.
              </p>
              <p>
                You should check at what price they are selling, how good is their quality, and what other services they are providing. This ensures you can stand up to the competition shoulder to shoulder and generate profit.
              </p>
              <p>
                All of this work is not temporary; it is permanent so that you don't get left behind in the race. Continuous market analysis and product optimization are the keys to sustained e-commerce success.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#ff9900]/10 rounded-full blur-3xl"></div>
              <Image 
                src="/images/nnew013.png" 
                alt="Setting up the product to sell" 
                width={800} 
                height={800} 
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How to build website content */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
                  How to build website content
                </h2>
                <div className="h-1.5 w-24 bg-[#ff9900] rounded-full"></div>
              </div>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-medium">
                <p>
                  This step gets into work when the customer has a look at your product. As you cannot meet your customer face to face, you will have to convince him through the pictures, videos and description.
                </p>
                <p>
                  It is recommended that you upload quality images of your product and write detailed specifications of the product so that the customer can test it and compare it with other products. Some retailers even upload the videos of the product being used, which helps a lot, but depends on the type of the product.
                </p>
                <p>
                  After all these steps you can take your business online, but remember one thing: quality of the product and service is very important. All the best.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#ff9900]/10 rounded-full blur-3xl"></div>
                <Image 
                  src="/images/buying01.png" 
                  alt="How to build website content" 
                  width={1000} 
                  height={600} 
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </div>
  );
}
