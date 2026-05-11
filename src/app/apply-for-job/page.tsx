'use client';

import React, { useState, useEffect } from 'react';
import { getCareers, applyToJob } from '@/app/actions/career';
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MessageSquare, 
  UploadCloud, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  X,
  Loader2
} from 'lucide-react';
import { useNotification } from '@/components/NotificationContext';

export default function ApplyForJobPage() {
  const { showNotification } = useNotification();
  const [positions, setPositions] = useState<any[]>([]);
  const [loadingPositions, setLoadingPositions] = useState(true);
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    async function loadPositions() {
      try {
        const data = await getCareers();
        const openRoles = data.filter((c: any) => c.status === 'OPEN' || c.status === 'Open');
        setPositions(openRoles);
        if (openRoles.length > 0) {
          setPosition(openRoles[0].title);
        } else {
          setPosition('React Developer'); // fallback default
        }
      } catch (e) {
        console.error('Failed to load career listings:', e);
      }
      setLoadingPositions(false);
    }
    loadPositions();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!validTypes.includes(file.type)) {
        showNotification('error', 'Please upload a PDF, DOC, or DOCX document.');
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        showNotification('error', 'File size must be under 10MB.');
        return;
      }

      setResumeFile(file);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !position || !resumeFile) {
      showNotification('error', 'Please fill in all required fields and upload your resume.');
      return;
    }

    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position', position);
    formData.append('message', message);
    formData.append('resume', resumeFile);

    const result = await applyToJob(formData);

    if (result.success) {
      setIsSubmitted(true);
      showNotification('success', 'Your application was submitted successfully!');
    } else {
      showNotification('error', result.error || 'Failed to submit application.');
    }
    setIsSubmitting(false);
  };

  const defaultFallbacks = [
    'React Developer',
    'Node.js Backend Developer',
    'Full Stack Web Developer',
    'SEO Executive',
    'Social Media Manager',
    'Content Writer'
  ];

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#F9FAFB] py-24 px-4 flex items-center justify-center">
        <div className="bg-white max-w-xl w-full p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={44} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Application Received!</h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              Thank you, <span className="font-bold text-gray-800">{name}</span>. Your application for <span className="font-bold text-[#ff9900]">{position}</span> has been logged successfully.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-400">Our hiring team will review your credentials and get in touch with you shortly.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setResumeFile(null);
              }}
              className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Submit Another
            </button>
            <a 
              href="/"
              className="flex-1 bg-gray-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-1.5"
            >
              Back Home <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F3F4F6] py-10 px-4">
      {/* Premium Headline Section */}
      <section className="max-w-7xl mx-auto pt-10 pb-6 border-b border-gray-200/60 mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Apply For Job
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
          Submit your details and upload your resume to embark on a professional journey with Flymedia Technology.
        </p>
      </section>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="bg-gray-50/50 border-b border-gray-100 p-6 sm:p-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff9900] shadow-sm">
              <Briefcase size={22} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Application Form</h2>
              <p className="text-xs text-gray-400">All fields marked with * are required.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-400">
                    <User size={18} />
                  </span>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your first and last name"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-medium text-gray-800"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-400">
                    <Mail size={18} />
                  </span>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-medium text-gray-800"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-400">
                    <Phone size={18} />
                  </span>
                  <input 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-medium text-gray-800"
                  />
                </div>
              </div>

              {/* Job Position Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Position Applying For <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-400 z-10">
                    <Briefcase size={18} />
                  </span>
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-medium text-gray-800 appearance-none relative"
                  >
                    {loadingPositions ? (
                      <option>Loading vacancies...</option>
                    ) : positions.length > 0 ? (
                      positions.map((pos) => (
                        <option key={pos.id} value={pos.title}>{pos.title}</option>
                      ))
                    ) : (
                      defaultFallbacks.map((f, i) => (
                        <option key={i} value={f}>{f}</option>
                      ))
                    )}
                  </select>
                  <div className="absolute right-3.5 top-4 pointer-events-none w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-gray-400"></div>
                </div>
              </div>
            </div>

            {/* Resume Upload Dropzone */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Attach Resume (PDF, DOC, DOCX) <span className="text-red-500">*</span></label>
              
              {!resumeFile ? (
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 sm:p-12 text-center hover:border-[#ff9900] transition-colors relative bg-gray-50/50 cursor-pointer">
                  <input 
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    required
                  />
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-orange-100 text-[#ff9900] rounded-full flex items-center justify-center shadow-inner">
                      <UploadCloud size={28} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-700 font-bold text-sm">Drag and drop your file here, or browse</p>
                      <p className="text-xs text-gray-400 font-medium">Supports PDF, DOC or DOCX (Max 10MB)</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 bg-orange-100 text-[#ff9900] rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-800 truncate">{resumeFile.name}</p>
                      <p className="text-xs text-gray-400">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={removeFile}
                    className="p-1.5 bg-white border border-gray-150 text-gray-400 hover:text-red-500 rounded-lg hover:shadow-sm transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Message / Cover Letter */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">Message / Cover Letter (Optional)</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <MessageSquare size={18} />
                </span>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Share a brief introduction or note for our recruiters..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-medium text-gray-800 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff9900] text-black font-extrabold py-4 rounded-2xl hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-100 uppercase tracking-wider text-sm sm:text-base mt-4"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Submitting Details...</span>
                </>
              ) : (
                <span>Submit Application</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
