'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCareers } from '@/app/actions/career';

export default function CurrentJobOpening() {
  const [openJobId, setOpenJobId] = useState<number | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCareers().then((data) => {
      // Only show OPEN jobs on the public page
      setJobs(data.filter((j: any) => j.status !== 'CLOSED'));
      setLoading(false);
    });
  }, []);

  const toggleJob = (id: number) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  const leftJobs = jobs.filter((_, i) => i % 2 === 0);
  const rightJobs = jobs.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-black font-sans pb-24">

      {/* Header Banner */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF] text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-serif font-extrabold tracking-tight text-gray-900 leading-tight">
          Current Job Opening
        </h1>
        <p className="text-[#ff9900] text-sm sm:text-base font-extrabold tracking-wide uppercase">
          Time To Accelerate Your Business Presence
        </p>
      </section>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#ff9900]" />
        </div>
      )}

      {/* No Jobs State */}
      {!loading && jobs.length === 0 && (
        <div className="max-w-xl mx-auto text-center py-20 px-4">
          <p className="text-gray-500 font-semibold text-lg">No current job openings. Please check back soon.</p>
        </div>
      )}

      {/* Two-Column Accordion Layout */}
      {!loading && jobs.length > 0 && (
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            {/* Left Column */}
            <div className="space-y-6">
              {leftJobs.map((job) => {
                const isOpen = openJobId === job.id;
                const descLines = job.description?.split('\n').filter(Boolean) || [];
                const reqLines = job.requirements?.split('\n').filter(Boolean) || [];

                return (
                  <div
                    key={job.id}
                    className="bg-[#EFEFEF] rounded-2xl border-b-2 border-[#ff9900] overflow-hidden transition-all duration-300 flex flex-col"
                  >
                    {/* Trigger Button */}
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="text-base sm:text-lg font-bold text-gray-950 font-sans leading-snug">
                        {job.title}
                      </span>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-3 h-3 fill-current text-[#ff9900] transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                          viewBox="0 0 192 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-left space-y-4 border-t border-gray-100/50">
                        <div className="text-gray-800 text-sm leading-relaxed space-y-1 font-semibold">
                          {job.post && <p>Post : {job.post}</p>}
                          {job.vacancies && <p>No. Of Vacancies : {job.vacancies}</p>}
                          {job.experience && <p>Experience: {job.experience}</p>}
                        </div>

                        {/* Job Description */}
                        {descLines.length > 0 && (
                          <div className="space-y-2">
                            <p className="font-extrabold text-sm text-gray-900">Job Description</p>
                            <ul className="space-y-1.5 pl-4 list-disc text-gray-750 text-sm">
                              {descLines.map((pt: string, idx: number) => (
                                <li key={idx} className="leading-relaxed font-medium">{pt}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Required Skills */}
                        {reqLines.length > 0 && (
                          <div className="space-y-2 pt-1">
                            <p className="font-extrabold text-sm text-gray-900">Required Skills:</p>
                            <ul className="space-y-1.5 pl-4 list-disc text-gray-750 text-sm">
                              {reqLines.map((skill: string, idx: number) => (
                                <li key={idx} className="leading-relaxed font-medium">{skill}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Apply Link */}
                        <div className="pt-3 border-t border-gray-100 text-sm font-semibold text-gray-700">
                          Apply for a job:{' '}
                          <Link
                            href="/apply-for-job/"
                            className="text-[#ff9900] font-black underline hover:text-black transition-colors"
                          >
                            Click Here
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {rightJobs.map((job) => {
                const isOpen = openJobId === job.id;
                const descLines = job.description?.split('\n').filter(Boolean) || [];
                const reqLines = job.requirements?.split('\n').filter(Boolean) || [];

                return (
                  <div
                    key={job.id}
                    className="bg-[#EFEFEF] rounded-2xl border-b-2 border-[#ff9900] overflow-hidden transition-all duration-300 flex flex-col"
                  >
                    {/* Trigger Button */}
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="text-base sm:text-lg font-bold text-gray-950 font-sans leading-snug">
                        {job.title}
                      </span>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-3 h-3 fill-current text-[#ff9900] transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                          viewBox="0 0 192 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-left space-y-4 border-t border-gray-100/50">
                        <div className="text-gray-800 text-sm leading-relaxed space-y-1 font-semibold">
                          {job.post && <p>Post : {job.post}</p>}
                          {job.vacancies && <p>No. Of Vacancies : {job.vacancies}</p>}
                          {job.experience && <p>Experience: {job.experience}</p>}
                        </div>

                        {/* Job Description */}
                        {descLines.length > 0 && (
                          <div className="space-y-2">
                            <p className="font-extrabold text-sm text-gray-900">Job Description</p>
                            <ul className="space-y-1.5 pl-4 list-disc text-gray-750 text-sm">
                              {descLines.map((pt: string, idx: number) => (
                                <li key={idx} className="leading-relaxed font-medium">{pt}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Required Skills */}
                        {reqLines.length > 0 && (
                          <div className="space-y-2 pt-1">
                            <p className="font-extrabold text-sm text-gray-900">Required Skills:</p>
                            <ul className="space-y-1.5 pl-4 list-disc text-gray-750 text-sm">
                              {reqLines.map((skill: string, idx: number) => (
                                <li key={idx} className="leading-relaxed font-medium">{skill}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Apply Link */}
                        <div className="pt-3 border-t border-gray-100 text-sm font-semibold text-gray-700">
                          Apply for a job:{' '}
                          <Link
                            href="/apply-for-job/"
                            className="text-[#ff9900] font-black underline hover:text-black transition-colors"
                          >
                            Click Here
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
