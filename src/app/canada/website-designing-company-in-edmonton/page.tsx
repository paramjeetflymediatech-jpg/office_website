"use client";

import React from "react";
import Image from "next/image";

export default function EdmontonWebDesigningPage() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-12 text-black">

      {/* 1. Hero Workspace Banner with Fixed Parallax Scroll */}
      <section className="relative w-full h-[220px] sm:h-[280px] bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/website-designing.webp')`
        }}
      >
        {/* Dark opacity overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Translucent Capsule Container */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 px-8 py-4 sm:py-5 rounded-lg shadow-2xl inline-block">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-xl sm:text-3xl md:text-3xl font-bold tracking-tight font-serif"
            >
              Website Designing Company in{" "}
              <span className="text-[#ff9900] relative inline-block">
                Edmonton
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#ff9900]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Intro Section (Create a Stunning and Compelling Website - bg-white) */}
      <section className="bg-white  ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-square max-w-[460px]  overflow-hidden">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2024/06/website-designing2.jpg"
                  alt="Create a Stunning and Compelling Website For Your Business"
                  fill
                  className="object-contain hover:scale-102 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Copytext */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight"
              >
                Create a Stunning and Compelling Website For Your Business
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Website Development and Design is imperative for any business that aims to excel in the current competitive digital era. We at Flymedia Technology can help you develop a stunning and compelling website for your business. A website is the first impression your client may have of you. Thus, it is crucial to develop it in a way that conveys your expertise, vision and enthusiasm to help them reach their goals.
                </p>
                <p>
                  We can help you design such a website, and we are a leading <strong className="text-black font-semibold">website designing company in Edmonton.</strong> So, if you want to develop a website that speaks for your business, contact us and elevate your business to new heights.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Services Section (bg-white) */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          {/* Centered Header */}
          <div className="text-center">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Our Services
            </h2>
          </div>

          {/* Row 1: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

            {/* Custom Web Design */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#ff9900]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ff9900] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" viewBox="0 0 512 512" className="w-9 h-9 text-white">
                  <g>
                    <g>
                      <path d="m238 371.49c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h36c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z" fill="currentColor"></path>
                      <path d="m90 255.034h49.576c3.028 7.881 10.657 13.5 19.591 13.5s16.563-5.619 19.591-13.5h9.909c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-9.909c-3.028-7.881-10.657-13.5-19.591-13.5s-16.563 5.619-19.591 13.5h-49.576c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5zm69.167-13.5c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" fill="currentColor"></path>
                      <path d="m90 212.034h9.576c3.028 7.881 10.657 13.5 19.591 13.5s16.563-5.619 19.591-13.5h49.909c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-49.909c-3.028-7.881-10.657-13.5-19.591-13.5s-16.563 5.619-19.591 13.5h-9.576c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5zm29.167-13.5c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" fill="currentColor"></path>
                      <circle cx="190.167" cy="135.534" r="7.5" fill="currentColor"></circle>
                      <circle cx="169.5" cy="135.534" r="7.5" fill="currentColor"></circle>
                      <circle cx="148.833" cy="135.534" r="7.5" fill="currentColor"></circle>
                      <path d="m489.5 50.483h-2.809l2.095-2.095c6.275-6.275 6.275-16.486 0-22.761l-16.418-16.418c-6.275-6.274-16.485-6.274-22.761 0l-41.271 41.273h-385.836c-12.406 0-22.5 10.093-22.5 22.5v311.464c0 15.164 12.336 27.5 27.5 27.5h177.645v53.055h-36.145c-9.649 0-17.5 7.851-17.5 17.5v7.494c0 9.649 7.851 17.5 17.5 17.5h174c9.649 0 17.5-7.851 17.5-17.5v-7.494c0-9.649-7.851-17.5-17.5-17.5h-36.145v-53.055h80.145c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-359.5c-6.893 0-12.5-5.607-12.5-12.5v-22.2h482v22.2c0 6.893-5.607 12.5-12.5 12.5h-62.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h62.5c15.164 0 27.5-12.336 27.5-27.5v-311.463c0-12.406-10.094-22.5-22.5-22.5zm-146.5 429.519c1.379 0 2.5 1.122 2.5 2.5v7.494c0 1.378-1.121 2.5-2.5 2.5h-174c-1.379 0-2.5-1.122-2.5-2.5v-7.494c0-1.378 1.121-2.5 2.5-2.5zm-122.855-68.054h71.711v53.055h-71.711zm240.069-392.131c.428-.427 1.122-.426 1.548 0l16.417 16.417c.427.427.427 1.122 0 1.548l-15.665 15.665-17.965-17.965zm-26.272 26.272 17.964 17.965-5.231 5.231-17.964-17.965zm-15.838 15.838 17.965 17.965-88.751 88.751-17.965-17.965zm-11.104 68.569c10.201 0 18.5 8.299 18.5 18.5s-8.299 18.5-18.5 18.5-18.5-8.299-18.5-18.5c0-.119.016-.234.018-.353l18.132-18.129c.117-.002.232-.018.35-.018zm-72.706 46.337-22.197 9.066 9.066-22.197zm162.706 170.415h-482v-274.265c0-4.135 3.364-7.5 7.5-7.5h370.837l-11.436 11.436h-254.901c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h239.902l-52.901 52.904c-1.495 1.508-2.664 3.268-3.469 5.238l-16.753 41.016c-1.537 3.767-.671 8.06 2.206 10.936 1.931 1.931 4.499 2.955 7.118 2.955 1.284 0 2.579-.246 3.818-.751l41.015-16.752c1.914-.782 3.626-1.914 5.106-3.349l22.816-22.813c4.915 12.399 17.015 21.194 31.143 21.194 18.472 0 33.5-15.028 33.5-33.5 0-14.126-8.793-26.225-21.19-31.141l25.939-25.936h25.314v228.893h-3.975l-27.18-47.077c-2.07-3.588-6.66-4.817-10.245-2.745-3.587 2.071-4.816 6.658-2.745 10.245l22.85 39.577h-104.77l-11.237-19.463 52.385-90.733 23.271 40.308c2.072 3.587 6.659 4.817 10.245 2.745 3.587-2.071 4.816-6.658 2.745-10.245l-24.827-43.001c-2.387-4.134-6.661-6.602-11.435-6.602s-9.049 2.468-11.436 6.602l-49.61 85.927-63.654-110.251c-2.387-4.134-6.661-6.602-11.436-6.602-4.773 0-9.048 2.468-11.435 6.602l-16.911 29.291v-80.393c0-9.649-7.851-17.5-17.5-17.5h-128.664c-9.649 0-17.5 7.851-17.5 17.5v164c0 6.893 5.607 12.5 12.5 12.5h95.679l-11.152 19.316h-113.09v-228.895h50.563c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-53.063c-6.893 0-12.5 5.607-12.5 12.5v233.893c0 6.893 5.607 12.5 12.5 12.5h434.127c6.893 0 12.5-5.607 12.5-12.5v-233.893c0-6.893-5.607-12.5-12.5-12.5h-12.812l11.438-11.436h17.81c4.136 0 7.5 3.365 7.5 7.5zm-290.833-180.714v119.962h-133.667v-119.962zm-133.667-15v-26.538c0-1.378 1.121-2.5 2.5-2.5h128.667c1.379 0 2.5 1.122 2.5 2.5v26.538zm110.5 149.962h25.667c6.893 0 12.5-5.607 12.5-12.5v-15.887c1.876.9 3.965 1.387 6.153 1.387 5.12 0 9.704-2.648 12.263-7.081l12.764-22.107c.386-.668.976-.809 1.401-.809.427 0 1.017.141 1.402.809l7.869 13.629c2.56 4.435 7.145 7.082 12.266 7.082 5.12 0 9.705-2.647 12.264-7.081l1.954-3.384 37.676 65.257h-155.331zm38.167-53.493v-12.614l28.347-49.097 31.328 54.262-5.558 9.626-7.144-12.373c-3.004-5.203-8.384-8.309-14.393-8.309-6.008 0-11.388 3.106-14.392 8.309l-12.038 20.85z" fill="currentColor"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="font-sans font-extrabold text-gray-800 text-sm sm:text-base uppercase tracking-wider">
                Custom Web Design
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed max-w-sm">
                Each client has a different vision for their business and the way they want to connect with the audience; we understand and respect this uniqueness. Hence, we offer customized website development services. You can develop the website as per your unique vision and business requirements.
              </p>
            </div>

            {/* Responsive Design */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#ff9900]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ff9900] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -52 512 512" className="w-8 h-8 text-white scale-125">
                  <path d="m192.375 240.46875h16.03125v15.03125h-16.03125zm0 0" fill="currentColor"></path>
                  <path d="m224.4375 240.46875h16.03125v15.03125h-16.03125zm0 0" fill="currentColor"></path>
                  <path d="m256.5 240.46875h16.03125v15.03125h-16.03125zm0 0" fill="currentColor"></path>
                  <path d="m40.078125 40.078125v79.15625h231.453125v-79.15625zm216.421875 64.125h-201.390625v-49.09375h201.390625zm0 0" fill="currentColor"></path>
                  <path d="m40.078125 136.265625h232.453125v15.03125h-232.453125zm0 0" fill="currentColor"></path>
                  <path d="m40.078125 168.328125h232.453125v15.03125h-232.453125zm0 0" fill="currentColor"></path>
                  <path d="m40.078125 200.390625h232.453125v15.03125h-232.453125zm0 0" fill="currentColor"></path>
                  <path d="m296.578125 40.078125h128.25v15.03125h-128.25zm0 0" fill="currentColor"></path>
                  <path d="m296.578125 72.140625h128.25v15.03125h-128.25zm0 0" fill="currentColor"></path>
                  <path d="m296.578125 104.203125h128.25v15.03125h-128.25zm0 0" fill="currentColor"></path>
                  <path d="m416.8125 368.71875h32.0625v15.03125h-32.0625zm0 0" fill="currentColor"></path>
                  <path d="m384.75 312.609375h96.1875v15.03125h-96.1875zm0 0" fill="currentColor"></path>
                  <path d="m496.96875 136.265625h-127.746094c-8.566406 0-15.53125 6.464844-15.53125 15.03125v48.09375h143.277344v145.28125h-128.25v-129.25h-15.027344v57.109375h-338.660156v-257.5c0-.277344.722656 0 1 0h432.84375c.277344 0 0-.277344 0 0v104.203125h15.03125v-104.203125c0-8.566406-6.464844-15.03125-15.03125-15.03125h-432.84375c-8.5625 0-16.03125 6.464844-16.03125 15.03125v304.59375c0 8.5625 7.46875 16.03125 16.03125 16.03125h168.328125v49.09375h-32.0625v15.03125h160.3125v-15.03125h-33.0625v-49.09375h57.109375v-15.03125h-320.625c-.277344 0-1-.726562-1-1v-32.0625h338.660156v104.203125c0 8.5625 6.964844 16.03125 15.53125 16.03125h127.746094c8.566406 0 15.03125-7.46875 15.03125-16.03125v-240.46875c0-8.566406-6.464844-15.03125-15.03125-15.03125zm-232.453125 248.484375h-65.125v-49.09375h65.125zm104.203125-200.390625v-33.0625c0-.277344.226562 0 .503906 0h127.746094c.277344 0 0-.277344 0 0v33.0625zm128.25 208.40625h-127.746094c-.277344 0-.503906-.726563-.503906-1v-32.0625h128.25v32.0625c0 .273437.277344 1 0 1zm0 0" fill="currentColor"></path>
                  <path d="m384.75 216.421875v79.15625h95.1875v-79.15625zm80.15625 64.125h-65.125v-49.09375h65.125zm0 0" fill="currentColor"></path>
                </svg>
              </div>
              <h3 className="font-sans font-extrabold text-gray-800 text-sm sm:text-base uppercase tracking-wider">
                Responsive Design
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed max-w-sm">
                At the moment, it is imperative to design a responsive website. Nowadays, user experience is crucial; a responsive website provides an easy and smooth experience, which helps optimize the website performance across different devices. Contact us for the best <strong className="text-gray-800 font-semibold">web development in Alberta</strong> and experience the difference.
              </p>
            </div>

            {/* E-Commerce Design */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#ff9900]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ff9900] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" viewBox="0 0 64 64" className="w-8 h-8 text-white scale-110" data-name="Layer 3">
                  <path d="m62 4h-60a1 1 0 0 0 -1 1v54a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-54a1 1 0 0 0 -1-1zm-1 2v10h-58v-10zm-58 14v-2h8v2zm10-2h8v2h-8zm10 0h8v2h-8zm10 0h8a2 2 0 0 1 -2 2h-6zm-30 40v-36h36a4 4 0 0 0 4-4h18v40z" fill="currentColor"></path>
                  <path d="m8 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" fill="currentColor"></path>
                  <path d="m16 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" fill="currentColor"></path>
                  <path d="m56 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" fill="currentColor"></path>
                  <path d="m24 14h24a3 3 0 0 0 0-6h-24a3 3 0 0 0 0 6zm0-4h24a1 1 0 0 1 0 2h-24a1 1 0 0 1 0-2z" fill="currentColor"></path>
                  <path d="m52 22a6.948 6.948 0 0 0 -6.92 8h-10.08v-5a1 1 0 0 0 -1-1h-28a1 1 0 0 0 -1 1v24a1 1 0 0 0 1 1h21v5a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-19.685a6.994 6.994 0 0 0 -3-13.315zm-19 4v4h-5a1 1 0 0 0 -1 1v1h-20v-6zm-26 22v-14h20v14zm22 6v-14h24v14zm24-16h-24v-6h16.685a6.907 6.907 0 0 0 7.315 3.92zm-1-4a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z" fill="currentColor"></path>
                  <path d="m53.293 26.293-1.293 1.293-1.293-1.293-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414 1.293-1.293 1.293 1.293 1.414-1.414-1.293-1.293 1.293-1.293z" fill="currentColor"></path>
                  <path d="m9 28h2v2h-2z" fill="currentColor"></path>
                  <path d="m13 28h2v2h-2z" fill="currentColor"></path>
                  <path d="m31 34h2v2h-2z" fill="currentColor"></path>
                  <path d="m35 34h2v2h-2z" fill="currentColor"></path>
                  <path d="m9 36h16v2h-16z" fill="currentColor"></path>
                  <path d="m9 40h16v2h-16z" fill="currentColor"></path>
                  <path d="m9 44h12v2h-12z" fill="currentColor"></path>
                  <path d="m23 44h2v2h-2z" fill="currentColor"></path>
                  <path d="m31 42h20v2h-20z" fill="currentColor"></path>
                  <path d="m31 46h20v2h-20z" fill="currentColor"></path>
                  <path d="m31 50h16v2h-16z" fill="currentColor"></path>
                  <path d="m49 50h2v2h-2z" fill="currentColor"></path>
                </svg>
              </div>
              <h3 className="font-sans font-extrabold text-gray-800 text-sm sm:text-base uppercase tracking-wider">
                E-commerce Design
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed max-w-sm">
                We provide e-commerce website solutions to small and large-scale business enterprises. We have helped many clients by delivering e-commerce website solutions. We create robust and high-performance e-commerce websites that drive sales and engagement. Thus, entrust Fly Media Technology for robust and high-quality website development.
              </p>
            </div>

          </div>

          {/* Row 2: Centered CMS Item */}
          <div className="flex justify-center pt-4">
            <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#ff9900]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4 max-w-md w-full">
              <div className="w-16 h-16 rounded-full bg-[#ff9900] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 66 66" className="w-9 h-9 text-white scale-110">
                  <g>
                    <path d="m45.77 36.9c-2.48 2.48-2.48 6.52 0 9 1.24 1.24 2.87 1.86 4.5 1.86s3.26-.62 4.5-1.86c1.2-1.2 1.87-2.8 1.87-4.5s-.66-3.3-1.86-4.5c-2.49-2.48-6.53-2.48-9.01 0zm7.76 7.77c-1.8 1.8-4.73 1.8-6.53 0s-1.8-4.73 0-6.52c.9-.9 2.08-1.35 3.26-1.35s2.36.45 3.26 1.35c.87.87 1.35 2.03 1.35 3.26.01 1.23-.47 2.39-1.34 3.26z" fill="currentColor"></path>
                    <path d="m62.65 38.59-1.96-.34c-.21-.69-.48-1.35-.82-1.98l1.14-1.63c.24-.35.2-.82-.1-1.12l-2.76-2.76c-.3-.3-.77-.34-1.12-.1l-1.63 1.14c-.63-.34-1.29-.61-1.98-.82l-.34-1.96c-.07-.42-.44-.72-.86-.72h-3.91c-.42 0-.79.31-.86.72l-.34 1.96c-.69.21-1.35.48-1.98.82l-1.63-1.14c-.35-.24-.82-.2-1.12.1l-2.76 2.76c-.3.3-.34.77-.1 1.12l1.14 1.63c-.34.63-.61 1.3-.82 1.98l-1.96.34c-.42.07-.72.44-.72.86v3.91c0 .42.3.79.72.86l1.96.34c.21.69.48 1.35.82 1.98l-1.14 1.63c-.24.35-.2.82.1 1.12l2.76 2.76c.3.3.77.34 1.12.1l1.63-1.14c.63.34 1.29.61 1.98.82l.34 1.96c.07.42.44.72.86.72h3.91c.42 0 .79-.31.86-.72l.34-1.96c.69-.21 1.35-.48 1.98-.82l1.63 1.14c.35.24.82.2 1.12-.1l2.76-2.76c.3-.3.34-.77.1-1.12l-1.14-1.63c.34-.63.61-1.29.82-1.98l1.96-.34c.42-.07.72-.44.72-.86v-3.91c.01-.42-.3-.79-.72-.86zm-1.02 4.03-1.78.31c-.34.06-.62.32-.7.65-.22.9-.58 1.76-1.06 2.55-.18.3-.17.67.03.96l1.04 1.48-1.72 1.72-1.48-1.04c-.28-.2-.66-.21-.96-.03-.79.48-1.65.83-2.55 1.06-.34.08-.59.36-.65.7l-.31 1.78h-2.44l-.31-1.78c-.06-.34-.32-.62-.65-.7-.9-.22-1.76-.58-2.55-1.06-.3-.18-.67-.17-.96.03l-1.48 1.05-1.73-1.72 1.04-1.48c.2-.28.21-.66.03-.96-.48-.79-.84-1.65-1.06-2.55-.08-.34-.36-.59-.7-.65l-1.78-.31v-2.44l1.78-.31c.34-.06.62-.32.7-.65.22-.9.58-1.76 1.06-2.55.18-.3.17-.67-.03-.96l-1.04-1.48 1.73-1.72 1.48 1.04c.29.2.66.21.96.03.79-.48 1.65-.83 2.55-1.06.34-.08.59-.36.65-.7l.31-1.78h2.44l.31 1.78c.06.34.32.62.65.7.9.22 1.76.58 2.55 1.06.29.18.67.17.96-.03l1.48-1.04 1.72 1.72-1.04 1.48c-.2.28-.21.66-.03.96.48.79.83 1.65 1.06 2.55.08.34.36.59.7.65l1.78.31z" fill="currentColor"></path>
                    <path d="m33.16 23.44v-15.85c0-.48-.39-.88-.88-.88h-23.78c-.48 0-.88.39-.88.88v15.85c0 .48.39.88.88.88h23.78c.49-.01.88-.4.88-.88zm-10.84-.88-1.96-3.05 1.67-2.6 3.63 5.65zm-3.74-2.57 1.65 2.58h-10.13l5.07-7.89zm12.83 2.57h-3.67l-4.97-7.74c-.16-.25-.44-.4-.74-.4s-.58.15-.74.4l-1.97 3.07-3.41-5.32c-.32-.5-1.15-.5-1.47 0l-5.06 7.88v-12h22.03z" fill="currentColor"></path>
                    <path d="m26.88 15.36c1.58 0 2.88-1.29 2.88-2.88s-1.29-2.88-2.88-2.88-2.88 1.29-2.88 2.88 1.3 2.88 2.88 2.88zm0-4c.62 0 1.13.5 1.13 1.13s-.5 1.13-1.13 1.13-1.13-.5-1.13-1.13.51-1.13 1.13-1.13z" fill="currentColor"></path>
                    <path d="m21.86 28.44c0-.48-.39-.88-.88-.88h-12.48c-.48 0-.88.39-.88.88v12.48c0 .48.39.88.88.88h12.48c.48 0 .88-.39.88-.88zm-1.75 11.61h-10.73v-10.73h10.73z" fill="currentColor"></path>
                    <path d="m12.09 38.42c.25.14.52.21.8.21.3 0 .6-.08.87-.25l3.7-2.3c.48-.3.77-.82.77-1.39s-.29-1.09-.77-1.39l-3.7-2.3c-.5-.31-1.14-.33-1.66-.04s-.84.84-.84 1.43v4.6c-.01.59.32 1.14.83 1.43zm.91-5.84 3.38 2.1-3.38 2.11z" fill="currentColor"></path>
                    <path d="m35.86 30.4h-11.43c-.48 0-.88.39-.88.88s.39.88.88.88h11.43c.48 0 .88-.39.88-.88s-.39-.88-.88-.88z" fill="currentColor"></path>
                    <path d="m35.86 33.81h-11.43c-.48 0-.88.39-.88.88s.39.88.88.88h11.43c.48 0 .88-.39.88-.88s-.39-.88-.88-.88z" fill="currentColor"></path>
                    <path d="m24.43 38.97h8.05c.48 0 .88-.39.88-.88s-.39-.88-.88-.88h-8.05c-.48 0-.88.39-.88.88s.4.88.88.88z" fill="currentColor"></path>
                    <path d="m35.86 47.89h-11.43c-.48 0-.88.39-.88.88s.39.88.88.88h11.43c.48 0 .88-.39.88-.88s-.39-.88-.88-.88z" fill="currentColor"></path>
                    <path d="m36.74 52.17c0-.48-.39-.88-.88-.88h-11.43c-.48 0-.88.39-.88.88s.39.88.88.88h11.43c.49 0 .88-.39.88-.88z" fill="currentColor"></path>
                    <path d="m24.43 54.7c-.48 0-.88.39-.88.88s.39.88.88.88h8.05c.48 0 .88-.39.88-.88s-.39-.88-.88-.88z" fill="currentColor"></path>
                    <path d="m20.98 45.06h-12.48c-.48 0-.88.39-.88.88v12.48c0 .48.39.88.88.88h12.48c.48 0 .88-.39.88-.88v-12.49c0-.48-.39-.87-.88-.87zm-.87 12.48h-10.73v-10.73h10.73z" fill="currentColor"></path>
                    <path d="m12.09 55.91c.25.14.52.21.8.21.3 0 .6-.08.87-.25l3.7-2.3c.48-.3.77-.82.77-1.39s-.29-1.09-.77-1.39l-3.7-2.3c-.5-.31-1.14-.33-1.66-.04s-.84.84-.84 1.43v4.6c-.01.59.32 1.14.83 1.43zm.91-5.84 3.38 2.1-3.38 2.1z" fill="currentColor"></path>
                    <path d="m50.27 56.76c-.48 0-.88.39-.88.88v2.36c0 1.72-1.4 3.13-3.13 3.13h-38.76c-1.72 0-3.13-1.4-3.13-3.13v-54c0-1.72 1.4-3.13 3.13-3.13h28.91v8.1c0 2.69 2.19 4.88 4.88 4.88h8.11v9.32c0 .48.39.88.88.88s.88-.39.88-.88v-10.19c0-.23-.09-.46-.26-.62l-12.99-12.98c-.16-.16-.39-.26-.62-.26h-29.79c-2.69.01-4.87 2.19-4.87 4.88v54c0 2.69 2.19 4.88 4.88 4.88h38.77c2.69 0 4.88-2.19 4.88-4.88v-2.36c-.02-.48-.41-.88-.89-.88zm-12.11-45.78v-6.87l9.99 9.99h-6.87c-1.72.01-3.12-1.4-3.12-3.12z" fill="currentColor"></path>
                  </g>
                </svg>
              </div>
              <h3 className="font-sans font-extrabold text-gray-800 text-sm sm:text-base uppercase tracking-wider">
                Content Management System (CMS)
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed">
                We use different CMS platforms to offer easy-to-use and updated content on your website effortlessly. Consult our experts to learn more about our services.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Fly Media Technology Section (Premium Technology Cover Background with Fixed Parallax Scroll) */}
      <section className="relative py-20 bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/bgimg.png')`
        }}
      >
        {/* Deep Slate Dark Tint Overlay */}
        <div className="absolute inset-0 bg-[#1A1E29]/40 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-12">

          {/* Header Block */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-3xl md:text-4xl font-serif font-bold leading-tight"
            >
              Why Choose Fly Media Technology?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
              Fly Media Technology is a leading website designing company in Edmonton. We have helped many businesses, from small-scale to large-scale, from professionals to self-employed individuals, to kick-start their digital journey.
            </p>
          </div>

          {/* 6-Card Outline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Our Aim and Vision */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md text-center flex flex-col items-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2024/03/icn01-1.png"
                  alt="Our Aim and Vision"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-black font-serif font-bold text-lg md:text-xl"
              >
                Our Aim and Vision
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                Our aim is to help you achieve your goals and objectives, and we do so by providing various digital marketing services. So, we are a perfect one-stop destination for all your digital marketing requirements, including website design.
              </p>
            </div>

            {/* Card 2: Comprehensive Services */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md text-center flex flex-col items-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2024/03/setting.png"
                  alt="Comprehensive Services"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-black font-serif font-bold text-lg md:text-xl"
              >
                Comprehensive Services
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                We offer diverse digital marketing services, from website design and development content writing to search engine optimization (SEO), email marketing solutions, social media marketing, graphic design solutions, and a lot more.
              </p>
            </div>

            {/* Card 3: Expertise and Experience */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md text-center flex flex-col items-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2024/03/chat.png"
                  alt="Expertise and Experience"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-black font-serif font-bold text-lg md:text-xl"
              >
                Expertise and Experience
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                We are able to provide you with the best services because we have more than 12 years of experience in the digital marketing industry. Thus, we are the best website designing company in Edmonton. We are aware of every changing trend and update in the field and adapt and provide our services accordingly to ensure success and desired outcomes.
              </p>
            </div>

            {/* Card 4: Customer-Oriented */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md text-center flex flex-col items-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2024/03/globe.png"
                  alt="Customer-Oriented"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-black font-serif font-bold text-lg md:text-xl"
              >
                Customer-Oriented
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                For us, our aim is to help you, and thus, your satisfaction and content are our main priority. We make every change as per your requirements and deliver outcomes that match your expectations.
              </p>
            </div>

            {/* Card 5: Transparency */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md text-center flex flex-col items-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2024/03/flash.png"
                  alt="Transparency"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-black font-serif font-bold text-lg md:text-xl"
              >
                Transparency
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                We are transparent in our dealings and work. We will keep you updated about all minor and major details and changes in the project. You can entrust us to transform your vision into reality.
              </p>
            </div>

            {/* Card 6: Fair Pricing */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md text-center flex flex-col items-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2024/06/cahdoish.png"
                  alt="Fair Pricing"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-black font-serif font-bold text-lg md:text-xl"
              >
                Fair Pricing
              </h3>
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                We provide exceptional services at an affordable price. Everyone can access and avail of our services, irrespective of their business scale.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Contact Fly Media Technology Segment (F1F1F1 background) */}
      <section className="bg-[#F1F1F1] py-16 md:py-20 text-center">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black leading-tight max-w-4xl mx-auto"
          >
            Contact Fly Media Technology: Your Trusted Partner For Website Design Solutions
          </h2>

          <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed max-w-4xl mx-auto">
            <p>
              Partner with Fly Media Technology for the best web development in Alberta. Our web development services can be customized as per your requirements to meet your business goals. We also offer responsive, compelling, persuasive and user-friendly website design that optimizes user experience. For best performance and robust website solutions, contact Fly Media Technology.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
