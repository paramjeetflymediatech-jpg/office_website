"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function Top10MovingCompaniesCalgaryPage() {
  return (
    <main className="min-h-screen bg-[#EFEFEF] py-20 px-4">
      {/* Headline Section */}
      <section className="max-w-7xl mx-auto pt-10 pb-6 border-b border-gray-200/60 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight max-w-4xl">
          Top 10 Moving Companies In Calgary
        </h1>
        <div className="w-16 h-1 bg-[#ff9900]"></div>
      </section>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Form - 4 columns on desktop (Left Side) */}
          <div className="lg:col-span-4 order-1">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:sticky top-32">
              <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>
              
              <form className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Type your message here..." 
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#ff9900] text-black font-bold py-4 rounded-lg hover:bg-black hover:text-white transition-colors uppercase tracking-wide mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Main Blog Post Content - 8 columns on desktop (Right Side) */}
          <div className="lg:col-span-8 order-2">
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Featured Image */}
              <div className="w-full h-auto">
                <img 
                  loading="lazy" 
                  width="1500" 
                  height="1000" 
                  src="https://flymediatech.com/wp-content/uploads/2026/05/2293.jpg" 
                  className="w-full h-auto object-cover" 
                  alt="Movers packing boxes for a move in Calgary, showcasing professional packing services."
                  srcSet="https://flymediatech.com/wp-content/uploads/2026/05/2293.jpg 1500w, https://flymediatech.com/wp-content/uploads/2026/05/2293-300x200.jpg 300w, https://flymediatech.com/wp-content/uploads/2026/05/2293-1024x683.jpg 1024w, https://flymediatech.com/wp-content/uploads/2026/05/2293-768x512.jpg 768w"
                  sizes="(max-width: 1500px) 100vw, 1500px"
                />
              </div>

              {/* Post Content */}
              <div className="p-8 md:p-12">
                {/* Meta data */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-4 border-b border-gray-100">
                  <span className="font-medium text-black">May 6, 2026</span>
                  <div className="flex items-center gap-1.5">
                    <Eye size={14} className="text-gray-400" />
                    <span>2 views today</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-a:text-[#ff9900] prose-a:no-underline hover:prose-a:underline prose-headings:text-black prose-p:text-gray-600 prose-p:leading-relaxed">
                  <p><strong>Introduction</strong></p>

                  <p>
                    Modern moving services require more than just manual labour; most importantly, it demands advanced logistics, specialised equipment and extraordinary protection protocols. This blog highlights the top ten <Link href="https://galaxymoversinc.ca/" target="_blank" rel="noopener noreferrer"><strong>moving companies in Calgary</strong></Link>, which differ by their advanced service features and high-tier operational standards. These moving industry leaders are selected based on the integration of modern moving technologies such as GPS-tracked transportation vehicles, climate-adaptive handling and inventory mapping systems to provide the most effective moving experience. Each mentioned moving company maintains full licensing and comprehensive liability insurance, offering multi-layered safety nets for your belongings. Their service menu goes beyond basic transport, especially featuring technical specialities like white glove handling for delicate electronics, custom crating for high-value art and modular scheduling to fit with the continuously changing timelines of Calgary’s real estate market. Their focus is on prioritising transparent binding cost estimates and professional-grade packing materials. These companies provide a perfect technical infrastructure necessary for a seamless residential or commercial transition.
                  </p>

                  {/* Inline Related Post 1 */}
                  <div className="my-6 bg-gray-100 border-l-4 border-slate-700 py-4 px-6 hover:opacity-80 transition-opacity">
                    <Link href="/have-a-look-at-the-best-movers-in-regina" className="flex items-center gap-2 group block">
                      <span className="font-bold text-gray-700">See also</span>
                      <span className="font-bold text-black underline group-hover:text-black">Have A Look At The Best 10 Movers In Regina</span>
                    </Link>
                  </div>

                  <p>The top ten moving companies in Calgary are:</p>

                  <p>
                    <strong>1. Galaxy Movers Calgary: </strong>Galaxy Movers stands out for their huge service area and specialised equipment handling. Their collection of vehicles are best fitted for diverse relocation needs, ranging from heavy industrial machinery to delicate household items. A key feature of their service is that they have a 24/7 support network, which allows for late-night commercial transitions to ensure the business keeps on moving by reducing its downtime. They make use of the advanced logistics software to choose the most efficient routes through Calgary’s traffic, which directly reduces the transit time. They use specialised techniques to adapt to the extreme climate conditions of Calgary. They also offer a full-service option. In this option, the crew organises the new space, not just drops off the boxes. They also provide high security storage options where your items are stored in the climate-controlled facilities for mid-transition delays. They offer full value protection for high-value items like electronics and art. The <strong>price of a </strong><Link href="https://alldaymovers.ca/" target="_blank" rel="noopener noreferrer"><strong>move in Calgary</strong></Link> generally depends on the size of the crew, including all the extra packaging material used for your belongings.
                  </p>

                  {/* Inline Related Post 2 */}
                  <div className="my-6 bg-gray-100 border-l-4 border-slate-700 py-4 px-6 hover:opacity-80 transition-opacity">
                    <Link href="/have-a-look-at-the-best-movers-in-regina" className="flex items-center gap-2 group block">
                      <span className="font-bold text-gray-700">See also</span>
                      <span className="font-bold text-black underline group-hover:text-black">Have A Look At The Best 10 Movers In Regina</span>
                    </Link>
                  </div>

                  <p>
                    <strong>2. All-day movers:</strong> All-day movers bridge the gap between boutique personalised service and large-scale logistical capability. The feature that makes them stand out in the market is their safe-transit packing protocol, which involves multi-layer padding and specialised loading techniques designed to prevent the shifting of your belongings during long-distance moves. As a family-run enterprise, they prioritise a consistent crew-to-client ratio, ensuring the same team that packs your home is the one that unloads it, providing a great level of accountability. They track all your items in detail to prevent the loss of any of the items during residential or commercial moves. They provide custom crating for oversized or fragile furniture. They operate under a total liability coverage model, protecting the cargo from the moment of first touch to the final placement. Their binding quote system ensures that their estimated costs remain fixed regardless of unforeseen traffic or minor delays.
                  </p>

                  {/* Inline Related Post 3 */}
                  <div className="my-6 bg-gray-100 border-l-4 border-slate-700 py-4 px-6 hover:opacity-80 transition-opacity">
                    <Link href="/have-a-look-at-the-best-movers-in-regina" className="flex items-center gap-2 group block">
                      <span className="font-bold text-gray-700">See also</span>
                      <span className="font-bold text-black underline group-hover:text-black">Have A Look At The Best 10 Movers In Regina</span>
                    </Link>
                  </div>

                  <p><strong>3. Sparta movers</strong></p>
                  <p><strong>4. Calgary movers pro</strong></p>
                  <p><strong>5. Two small men with big hearts</strong></p>
                  <p><strong>6. Super duper movers</strong></p>
                  <p><strong>7. Calgary city movers</strong></p>
                  <p><strong>8. Amazing Grace movers</strong></p>
                  <p><strong>9. Right move movers</strong></p>
                  <p><strong>10. Quick and easy moving</strong></p>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </main>
  );
}
