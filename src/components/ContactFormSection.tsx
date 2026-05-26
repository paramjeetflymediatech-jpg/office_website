"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const data = [{
  country: "India",
  location: "Flymedia Technology, Plot no, 20, Vishal Nagar Ext, opposite Kashish Cafe, Vishal Nagar, Jawaddi Taksal, Ludhiana, Punjab 141001",
  phone: "+91-98884-84310",
  title: "Flymedia Technology Hub",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.5618995019536!2d75.81763421067748!3d30.879522724407515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82306683bac1%3A0x95d00d8c3568391d!2sFlymedia%20Technology%20-%20Best%20Website%20Designing%20and%20Digital%20Marketing%20Company%20Ludhiana!5e1!3m2!1sen!2sin!4v1779792702983!5m2!1sen!2sin"
  , link: "https://www.google.com/maps/place/Flymedia+Technology+-+Best+Website+Designing+and+Digital+Marketing+Company+Ludhiana/@30.879522,75.820214,1409m/data=!3m1!1e3!4m6!3m5!1s0x391a82306683bac1:0x95d00d8c3568391d!8m2!3d30.8795221!4d75.820214!16s%2Fg%2F11clsnyzp0?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
},
{
  country: "Canada",
  location: "Flymedia Technology Vancouver-best website designing & digital marketing company in Vancouver",
  phone: "+1 236-885-5725",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38308988.65914126!2d159.08125790000003!3d49.142138499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d93a34dcb225%3A0x687f45e3ffc61bbd!2sFlymedia%20Technology!5e1!3m2!1sen!2sin!4v1779797522009!5m2!1sen!2sin"
  ,
  title: "Flymedia Technology Hub",
  link: "https://www.google.com/maps/place/Flymedia+Technology/@49.1421385,-122.8718671,537m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5485d93a34dcb225:0x687f45e3ffc61bbd!8m2!3d49.1421385!4d-122.8718671!16s%2Fg%2F11k43lsxx2?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
},
{
  country: "Canada",
  location: "Flymedia Technology Edmonton - Best Website Designing & Digital Marketing Company in Edmonton",
  phone: "+18259627548",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.8225901935875!2d-113.4700264!3d53.4042262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01dd6dcc7164f%3A0x8093173ece885a53!2s%E2%9C%85%20Flymedia%20Technology%20Edmonton%20-%20Best%20Website%20Designing%20%26%20Digital%20Marketing%20Company%20in%20Edmonton!5e1!3m2!1sen!2sin!4v1779797354104!5m2!1sen!2sin"
  ,
  title: "Flymedia Technology Hub",
  link: "https://www.google.com/maps/place/%E2%9C%85+Flymedia+Technology+Edmonton+-+Best+Website+Designing+%26+Digital+Marketing+Company+in+Edmonton/@53.4042262,-113.4700264,489m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53a01dd6dcc7164f:0x8093173ece885a53!8m2!3d53.4042262!4d-113.4700264!16s%2Fg%2F11w3gz0bh9?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
},
{
  country: "Australia",
  location: "35 Edgewood Dr, Stanhope Gardens NSW 2768, Australia",
  phone: "+61-434981208",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.066725352938!2d150.92008631080859!3d-33.71484407317447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129f3d979af5d7%3A0x8b57e92128748ccf!2s5%20Edgewood%20Dr%2C%20Stanhope%20Gardens%20NSW%202768%2C%20Australia!5e1!3m2!1sen!2sin!4v1779792753900!5m2!1sen!2sin"
  ,
  title: "Flymedia Technology Hub",
  link: "https://www.google.com/maps/place/5+Edgewood+Dr,+Stanhope+Gardens+NSW+2768,+Australia/@-33.7148441,150.9200863,683m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b129f3d979af5d7:0x8b57e92128748ccf!8m2!3d-33.7148441!4d150.9226666!16s%2Fg%2F11c4srr5w9?authuser=0&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
},

]
export default function ContactFormSection() {
  const pathname = usePathname();
  const [page, setPage] = useState("");
  useEffect(() => {
    console.log(pathname, 'dfsdddddddsdffsd')
    setPage(pathname);
  }, [pathname]);
  console.log(page, 'dfssdffsd')
  const getContactInfo = () => {
    if (page.includes("-vancouver")) {
      return data[1]; // Canada info
    }
    if (pathname.includes("-edmonton")) {
      return data[2]; // Canada info
    }
    if (pathname.includes("/australia")) {
      return data[3]; // Australia info
    }
    return data[0]; // India info
  };
  const contact = getContactInfo();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setToast({ type: "success", text: data.message || "Thank you! We will get back to you soon." });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setToast({ type: "error", text: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setToast({ type: "error", text: "Network error. Please check your connection and try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-24 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6 py-6 pr-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-none">
              Contact Us
            </h2>

            <div className="space-y-6">
              {/* Location */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black font-sans leading-tight">
                  Location
                </h2>
                {/* Google Maps Embed */}
                <div className="relative rounded-lg overflow-hidden border border-luxury-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.08)]" style={{ height: "320px" }}>
                  <iframe
                    title={contact.title}
                    src={contact.src}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* add google map */}
                <div className="flex items-start gap-3 mt-1">
                  <span className="text-[#FA7E09] w-5 h-5 shrink-0 mt-0.5">
                    <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                  </span>
                  <a href={contact.link} target="_blank" className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed"> {contact.location}
                  </a>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-black font-sans leading-tight">
                    Phone Number
                  </h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                      <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                    </span>
                    <a href={`tel:${contact.phone}`} className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-black font-sans leading-tight">
                    Email
                  </h2>
                  <div className="space-y-3 mt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                        <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                      </span>
                      <a href="mailto:anujguptaflymedia@gmail.com" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                        anujguptaflymedia@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                        <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                      </span>
                      <a href="mailto:anujgupta@flymediatech.com" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                        anujgupta@flymediatech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Sharp corners, background classic) */}
          <div className="lg:col-span-7 bg-[#EFEFEF] p-8 sm:p-12 rounded-none shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-200/20 relative z-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 tracking-tight leading-none font-sans">
              Get In Touch With Us
            </h2>

            {/* Success / Error toast */}
            {toast && (
              <div className={`mb-6 flex items-start gap-3 px-4 py-3 text-sm font-medium border ${toast.type === "success"
                ? "bg-green-50 border-green-300 text-green-800"
                : "bg-red-50 border-red-300 text-red-800"
                }`}>
                {toast.type === "success" ? (
                  <svg className="w-5 h-5 shrink-0 mt-0.5 fill-green-600" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                ) : (
                  <svg className="w-5 h-5 shrink-0 mt-0.5 fill-red-600" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                )}
                <span>{toast.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    disabled={loading}
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm disabled:opacity-60"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    disabled={loading}
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    disabled={loading}
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm disabled:opacity-60"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (e.g. SEO, Web Design)"
                    required
                    disabled={loading}
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your message here..."
                  required
                  disabled={loading}
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm resize-none disabled:opacity-60"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-black text-white hover:bg-[#FA7E09] hover:text-white transition-all duration-300 font-bold px-10 py-3.5 rounded-full text-sm sm:text-base shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading && (
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                  )}
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
