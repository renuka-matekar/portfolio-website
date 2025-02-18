import React from 'react';
import { Mail, Linkedin, Phone, FileText } from 'lucide-react';
import {contactData} from '@/data/portfolio-data'


export default function Contact() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-purple-500 mb-8">Get in Touch</h1>
      
      <div className="flex flex-col gap-4 w-full max-w-md">
        <a 
          href={`mailto:${contactData.email}`}
          className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:bg-gray-700"
        >
          <Mail className="text-purple-500" />
          <span className="text-white">{contactData.email}</span>
        </a>

        <a 
          href={contactData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:bg-gray-700"
        >
          <Linkedin className="text-purple-500" />
          <span className="text-white">LinkedIn</span>
        </a>

        <a 
          href={`tel:${contactData.phone}`}
          className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:bg-gray-700"
        >
          <Phone className="text-purple-500" />
          <span className="text-white">{contactData.phone}</span>
        </a>

        <a 
          href={contactData.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          download="resume.pdf"
          className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:bg-gray-700"
        >
          <FileText className="text-purple-500" />
          <span className="text-white">View Resume</span>
        </a>
      </div>
    </div>
  );
};

// export default Contact;