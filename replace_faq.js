const fs = require('fs');
const filePath = 'src/app/our-services/web-designing/page.tsx';

const fileContent = fs.readFileSync(filePath, 'utf8');
const lines = fileContent.split(/\r?\n/);

let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('FAQ Section - High Fidelity')) {
    startIndex = i;
  }
  // The first "            </div>" line after we encounter the faqs.map loop is the closure of the FAQs block
  if (startIndex !== -1 && i > startIndex && lines[i] === '            </div>') {
    endIndex = i;
    break;
  }
}

if (startIndex !== -1 && endIndex !== -1) {
  const replacementLines = [
    `             {/* FAQ Section - High Fidelity "Same to Same" Design */}`,
    `             <div className="max-w-7xl mx-auto space-y-12 py-24">`,
    `                <div className="text-center">`,
    `                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-black tracking-tight">Frequently Asked Questions (FAQs)</h2>`,
    `                </div>`,
    `                `,
    `                <div className="space-y-4">`,
    `                   {faqs.map((faq, i) => (`,
    `                     <details key={i} className="group bg-[#EFEFEF] rounded-2xl border-b-2 border-[#ff9900] overflow-hidden transition-all duration-300 shadow-sm">`,
    `                         <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-gray-200/40 transition-colors">`,
    `                            <span className="font-sans font-bold text-sm sm:text-base md:text-lg text-gray-900 pr-8">`,
    `                               {faq.q}`,
    `                            </span>`,
    `                            <div className="shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300 group-open:rotate-90">`,
    `                               <svg className="w-3 h-3 text-[#ff9900] fill-current" viewBox="0 0 192 512">`,
    `                                  <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />`,
    `                               </svg>`,
    `                            </div>`,
    `                         </summary>`,
    `                         <div className="px-6 pb-6">`,
    `                            <div className="pt-4 border-t border-gray-200/80 text-gray-600 font-medium text-xs sm:text-sm md:text-base leading-relaxed">`,
    `                               {faq.a}`,
    `                            </div>`,
    `                         </div>`,
    `                     </details>`,
    `                   ))}`,
    `                </div>`,
    `             </div>`
  ];

  // Replace lines from startIndex to endIndex (inclusive)
  lines.splice(startIndex, endIndex - startIndex + 1, ...replacementLines);
  
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log('Successfully replaced FAQ section with 100% same-to-same design!');
} else {
  console.log('Error finding matching indices:', { startIndex, endIndex });
}
