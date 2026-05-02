import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function WebDesigningPage() {
  const features = [
    { title: "eCommerce Websites", icon: "/scrap/Archive/flymediatech.com__our-services_web-designing/assets/images/ecommerce.png", desc: "We are aimed to design the best eCommerce websites for your business idea." },
    { title: "Custom Websites", icon: "/scrap/Archive/flymediatech.com__our-services_web-designing/assets/images/digital-consultancy-icon.png", desc: "We provide more efficiency for your web site and up customized applications." },
    { title: "Discussion Forums", icon: "/scrap/Archive/flymediatech.com__our-services_web-designing/assets/images/chat.png", desc: "We offer excellent discussion forums on your website to engage guests." },
    { title: "Web Portals", icon: "/scrap/Archive/flymediatech.com__our-services_web-designing/assets/images/it.png", desc: "We design quiet user-friendly and diverse portals related to any business idea." },
    { title: "Flash Websites", icon: "/scrap/Archive/flymediatech.com__our-services_web-designing/assets/images/flash.png", desc: "Along with great design, we create a fully flash made website with cool animations." },
  ];

  const faqs = [
    { q: "How a premium web design is beneficial?", a: "A premium web design provides a persistent and easily understandable site for the audience, enhancing brand credibility and user retention." },
    { q: "How long do website designing and building take?", a: "Simple information websites take less time, but complex websites like E-commerce take more time due to solid testing." },
    { q: "Why is it important to have mobile responsive website?", a: "Traditional websites cannot fit smaller screens, making it difficult to read and navigate. Mobile-responsive sites resize automatically for the best experience." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header / Hero */}
      <section className="relative h-[300px] bg-black flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <Image src="/image.png" alt="Background" fill className="object-cover grayscale brightness-0 invert" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-4xl border-l-8 border-[#ff9900] pl-8">
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Best Website Designer <br />
                <span className="text-[#ff9900]">in Ludhiana, Punjab</span>
              </h1>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 font-bold uppercase tracking-widest">
                 <Link href="/" className="hover:text-white">Home</Link>
                 <span>/</span>
                 <span className="text-[#ff9900]">Our Services</span>
                 <span>/</span>
                 <span className="text-[#ff9900]">Web Designing</span>
              </div>
           </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
           <Image src="/image.png" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Left: Content Area */}
          <div className="lg:col-span-8 space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-black border-b-2 border-gray-100 pb-4 mb-8">
                The Best Web Designing Company Since 2011
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Here at Flymedia Technology we offer remarkable and quality web designing in India at the best and cheapest prices. Our team of experienced web designers has minimum 12+ years of professional experience and they are filled with high standards of innovation and creativity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                 <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-[#ff9900] shadow-sm">
                    <div className="text-4xl font-black text-black">4200+</div>
                    <div className="text-sm font-bold uppercase text-gray-500 tracking-widest">Projects Completed</div>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-black shadow-sm">
                    <div className="text-4xl font-black text-black">12+</div>
                    <div className="text-sm font-bold uppercase text-gray-500 tracking-widest">Years Experience</div>
                 </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-8">
               <h3 className="text-2xl font-black uppercase tracking-tighter border-l-4 border-[#ff9900] pl-4">Our Creative Design Solutions</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {features.map((f, i) => (
                    <div key={i} className="group p-6 border border-gray-100 hover:border-[#ff9900] transition-all bg-white hover:shadow-2xl rounded-sm">
                       <div className="h-12 w-12 relative mb-4">
                          <Image src={f.icon} alt={f.title} fill className="object-contain grayscale group-hover:grayscale-0 transition-all" />
                       </div>
                       <h4 className="font-black uppercase text-sm mb-2 group-hover:text-[#ff9900] transition-colors">{f.title}</h4>
                       <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Responsive Section */}
            <div className="bg-black text-white p-10 rounded-sm relative overflow-hidden">
               <div className="absolute right-0 bottom-0 opacity-10 grayscale invert translate-x-1/4 translate-y-1/4">
                  <Image src="/dropdown-icons/butterfly.webp" alt="Pattern" width={300} height={300} />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 text-[#ff9900]">Why Choose Responsive Web Design?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ul className="space-y-4">
                     {["Better display on all devices", "Reach all potential clients", "Increased website traffic", "Lower bounce rates"].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                          <CheckCircle2 className="text-[#ff9900] w-5 h-5" />
                          {item}
                       </li>
                     ))}
                  </ul>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     No matter what device (desktop, smart phone or tablet) user uses, your site will run smoothly. By 2015 there will be estimated 788 million internet users. Decrease your cost for having to get sites built for various devices.
                  </p>
               </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6">
               <h3 className="text-2xl font-black uppercase tracking-tighter border-l-4 border-black pl-4">Frequently Asked Questions</h3>
               <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group border border-gray-100 p-6 rounded-sm bg-gray-50 cursor-pointer">
                       <summary className="font-black uppercase text-sm list-none flex justify-between items-center group-open:text-[#ff9900] transition-colors">
                          {faq.q}
                          <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                       </summary>
                       <p className="text-sm text-gray-600 mt-4 leading-relaxed font-medium">
                          {faq.a}
                       </p>
                    </details>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Sidebar Area */}
          <div className="lg:col-span-4 space-y-10">
            {/* Quick Contact Form Card */}
            <div className="bg-white border-2 border-gray-100 p-8 shadow-2xl rounded-sm sticky top-32">
               <h3 className="text-xl font-black uppercase tracking-tighter mb-6 bg-black text-white p-3 text-center rounded-sm">Quick Inquiry</h3>
               <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#ff9900] rounded-sm" />
                  <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#ff9900] rounded-sm" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#ff9900] rounded-sm" />
                  <textarea rows={4} placeholder="Tell us about your project" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#ff9900] rounded-sm"></textarea>
                  <button className="w-full bg-[#ff9900] text-black font-black py-4 uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-lg">
                    Send Message
                  </button>
               </form>

               {/* Direct Contact Info */}
               <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                  <div className="flex items-center gap-4 group cursor-pointer">
                     <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#ff9900] transition-colors">
                        <Phone size={18} className="text-gray-700 group-hover:text-black" />
                     </div>
                     <div>
                        <div className="text-[10px] font-black uppercase text-gray-400">Call Us Anytime</div>
                        <div className="font-bold text-sm">+91-98884-84310</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                     <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#ff9900] transition-colors">
                        <Mail size={18} className="text-gray-700 group-hover:text-black" />
                     </div>
                     <div>
                        <div className="text-[10px] font-black uppercase text-gray-400">Email Address</div>
                        <div className="font-bold text-sm">info@flymediatech.com</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Related Services List */}
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
               <h3 className="text-lg font-black uppercase tracking-tighter mb-6">Our Services</h3>
               <ul className="space-y-3">
                  {["Web Development", "SEO Services", "Digital Marketing", "App Development"].map((s, i) => (
                    <li key={i}>
                       <Link href="#" className="flex items-center justify-between p-3 bg-white border border-gray-200 text-xs font-bold uppercase tracking-tight hover:bg-black hover:text-white transition-all rounded-sm">
                          {s}
                          <ChevronRight size={14} />
                       </Link>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
               <Image src="/dropdown-icons/techs.webp" alt="Partner" width={200} height={50} className="object-contain" />
               <Image src="/dropdown-icons/payments.webp" alt="Partner" width={250} height={50} className="object-contain" />
               <Image src="/dropdown-icons/PremierBadge.webp" alt="Partner" width={150} height={50} className="object-contain" />
            </div>
         </div>
      </section>
    </div>
  );
}
