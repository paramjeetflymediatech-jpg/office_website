"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EcommerceSeoSydney() {
  const seoMethods = [
    {
      title: "Researching Keywords",
      desc: "You should identify the keywords that are related to your business. For that purpose, use Google Keyword Planner to get the suitable keywords for your business.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z" />
        </svg>
      )
    },
    {
      title: "On-Page Optimisation",
      desc: "You need to optimize the on page elements of your website, which are the titles, meta descriptions, header tags and content. It will be beneficial in incorporating your target keywords naturally.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M448 64H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64zM160 368H80a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h80zm128-16a16 16 0 0 1-16 16h-80v-48h80a16 16 0 0 1 16 16zm160-128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32z" />
        </svg>
      )
    },
    {
      title: "Mobile optimisation",
      desc: "Your website should be easy to run on cell phones. You should ensure that your website provides an effortless experience to the cell phone users as it will help you score better rankings for your online business.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
        </svg>
      )
    },
    {
      title: "Enhanced Page Speed",
      desc: "Your website’s loading speed needs to be optimised. You can use compressed images, use browser caching and have minimal HTTP requests to provide the best user experience to your users, which will enhance your rankings.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z" />
        </svg>
      )
    },
    {
      title: "Relevant and High-Quality Content",
      desc: "You need to create content that is valuable, informative and engaging for your audience. Your content should also fulfil the needs and queries of your users. Regularly updated content enhances the traffic and usability of your website.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
        </svg>
      )
    },
    {
      title: "Link Building",
      desc: "build backlinks from authoritative websites in your industry that are of high-quality. You can do so by posting as a guest, reaching out to further audiences and marketing your content effectively.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
        </svg>
      )
    },
    {
      title: "Local SEO",
      desc: "If your business is having a physical presence, you can optimise for local search by creating and verifying your Google My Business listing. Getting reviews and ensuring correct name, address and phone number application.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z" />
        </svg>
      )
    },
    {
      title: "Technical SEO",
      desc: "you need to check your website on a regular basis to detect issues like broken links, copied content and crawl errors. You can enhance your site’s ranking by working on these issues.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
        </svg>
      )
    },
    {
      title: "User Experience",
      desc: "Users need to have easy and clear navigation and action in your website. So you need to improve the customer experience of your website, which will improve your conversion and rankings.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
        </svg>
      )
    },
    {
      title: "Presence in Social Media",
      desc: "Active social media presence and engagement helps you boost your SEO. It increases brand visibility and more traffic to your website.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z" />
        </svg>
      )
    },
    {
      title: "Analytics to Track Your Performance",
      desc: "Google Analytics and Google Search Console is helpful in monitoring your website’s performance. It will help you make better data driven decisions.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z" />
        </svg>
      )
    },
    {
      title: "Stay updated with algorithms",
      desc: "Stay updated on search engine algorithm updates that will help you adjust your strategies in a suitable way.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z" />
        </svg>
      )
    },
    {
      title: "Analyse your competition",
      desc: "You can identify the areas where you can achieve great success by analysing the strategies of your competitors online.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
        </svg>
      )
    },
    {
      title: "Be Patient and Consistent",
      desc: "SEO is a long-term strategy. You should apply these strategies consistently and be patient to see significant improvements in your ranking. Hence, these are the ways to enhance your online success and opportunities with effective SEO strategies.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Left on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/03/seo-right-image.png"
                  alt="Ecommerce SEO Agency Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Text Column (Right on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[28px] font-bold text-black leading-tight font-serif"
              >
                Ecommerce SEO Agency Sydney
              </h1>
              
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg md:text-xl font-bold text-black font-serif"
              >
                The Best Ways To Outrank Your Competitors With Effective SEO
              </h2>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <Link 
                  href="/australia/search-engine-optimization"
                  className="text-[#EC7317] underline hover:text-black font-semibold transition-colors"
                >
                  Search Engine Optimization
                </Link>{" "}
                has helped many online businesses effectively achieve profits and best ranks. The best <strong>Ecommerce SEO Agency in Stanhope Gardens, Blacktown</strong> has helped many online businesses get the best conversion of traffic and earn profits and credibility with their effective SEO Campaigns. There are some methods that have helped the best <strong>Ecommerce SEO Services Sydney</strong> in their process to help online businesses achieve credibility and customer loyalty:
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SEO Methods Section (Card format grid with exact orange icons) */}
      <section className="py-12 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoMethods.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-5 items-start text-start"
              >
                {/* SVG Icon */}
                <div className="text-[#EC7317] flex justify-start items-center">
                  {item.icon}
                </div>

                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-[#EC7317] font-serif"
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
