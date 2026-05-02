export const NAV_LINKS = [
  { name: "About Us", href: "/about-us" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Packages", href: "/packages", hasDropdown: true },
  { name: "What We Do", href: "/what-we-do", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio", active: true },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

export const SOCIAL_LINKS = [
  { 
    name: "Facebook", 
    href: "https://www.facebook.com/flymediatech", 
    color: "#1877F2",
    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" 
  },
  { 
    name: "Twitter", 
    href: "https://twitter.com/flymediatech1", 
    color: "#1DA1F2",
    d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" 
  },
  { 
    name: "Linkedin", 
    href: "https://www.linkedin.com/company/fly-media-technology/", 
    color: "#0A66C2",
    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" 
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/flymedia_technology/", 
    color: "#E4405F",
    d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.337 1.079 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.079-1.337 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.337-1.079-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.645-1.44-1.44 0-.794.645-1.439 1.44-1.439.794-.001 1.44.645 1.44 1.439z" 
  },
  { 
    name: "Youtube", 
    href: "https://www.youtube.com/channel/UC6f844f5WjMZWHB6256z57A", 
    color: "#FF0000",
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" 
  },
];

export const QUICK_LINKS = [
  { name: "Web Developer Jobs", href: "/web-developer-jobs" },
  { name: "Current Job Opening", href: "/current-job-opening" },
  { name: "Website in Jalandhar", href: "/web-designing-company-in-jalandhar" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Computer Jobs", href: "/computer-jobs" },
  { name: "Internship", href: "/seo-training-internship-program" },
  { name: "Seo Jobs", href: "/seo-jobs" },
  { name: "Blog", href: "/blog" },
  { name: "Apply For Job", href: "/apply-for-job" },
  { name: "Website Design India", href: "/web-design-company-in-india" },
];

export const OUR_SERVICES = [
  { name: "Web Designing", href: "/our-services/web-designing" },
  { name: "Google Adwords (PPC)", href: "/pay-per-click-ppc" },
  { name: "Website Development", href: "/our-services/web-development" },
  { name: "Content Writing", href: "/content-writing" },
  { name: "SEO – Marketing Services", href: "/our-services/seo-marketing-services" },
  { name: "Payment Gateway Integration", href: "/our-services/payment-gateway-integration" },
  { name: "Digital Marketing | SMO Services", href: "/social-media-optimization" },
  { name: "NABH Consultants In Ludhiana, Punjab", href: "/nabh-consultants" },
  { name: "Web Based Softwares", href: "/our-services/web-based-softwares" },
  { name: "IT Company In Ludhiana", href: "/it-company-in-ludhiana" },
];

export const CMS_PLATFORMS = ['WP', 'PHP', 'MG', 'DR', 'JO', 'SH'];

export const PAYMENT_GATEWAYS = ['AMEX', 'MAESTRO', 'MASTER', 'VISA', 'DIRECT', 'PAYPAL'];

export const LOCATIONS = [
  {
    title: "India",
    address: "Plot no, 20, Vishal Nagar Ext, Vishal Nagar, Ludhiana, Punjab 141001",
    mapUrl: "https://maps.google.com/maps?q=FlyMedia%20Technology%20-%20Best%20Website%20Designing%20and%20Digital%20Marketing%20Company%20In%20Ludhiana&t=m&z=16&output=embed&iwloc=near",
    bgColor: "#add8e6"
  },
  {
    title: "Australia Office",
    address: "35 Edgewood Dr, Stanhope Gardens NSW 2768, Australia",
    mapUrl: "https://maps.google.com/maps?q=Flymedia%20Technology%20Australia%20-%20Best%20Website%20Designing%20%7C%20Development%20%7C%20SEO%20Company%20in%20Sydney&t=m&z=16&output=embed&iwloc=near",
    bgColor: "#e0f2f7"
  },
  {
    title: "Canada Office",
    address: "7664 126a St, Surrey, BC V3W 4A9, Canada",
    mapUrl: "https://maps.google.com/maps?q=Flymedia%20Technology%20-%20Web%20Designing%20%26%20Digital%20Marketing%20Agency%20Surrey%2C%20Canada&t=m&z=16&output=embed&iwloc=near",
    bgColor: "#cceef6"
  }
];
export const HEADER_LOCATIONS = [
  {
    name: "Canada",
    href: "/canada",
    subLocations: [
      { name: "Edmonton", href: "/canada/edmonton" }
    ]
  },
  {
    name: "Australia",
    href: "/australia",
  }
];
