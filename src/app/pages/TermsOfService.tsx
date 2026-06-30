import React from 'react';
import { Scale } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Terms of Service" 
        description="Review the Lodgely Terms of Service detailing the rules, guidelines, and agreements for using our platform." 
        canonicalUrl="https://lodgely.ng/terms"
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 font-light">
            Last Updated: April 2026
          </p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-500 font-light leading-relaxed">
          <p>
            Welcome to Lodgely. By accessing or using our website, services, or mobile applications, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing our platform, you agree to comply with these terms. If you do not agree to these terms, you may not access or use our services. These terms apply to all visitors, users, managers, tenants, and others who access or use the Service.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Description of Service</h2>
          <p>
            Lodgely is a property management platform designed to connect facility managers and tenants. It provides tools for rent collection, maintenance request tracking, broadcast announcements, and financial management. Lodgely reserves the right to modify or discontinue, temporarily or permanently, the Service with or without notice.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Content and Conduct</h2>
          <p>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
          </p>
          <p>
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Post any content that is unlawful, harmful, threatening, abusive, harassing, or defamatory.</li>
            <li>Impersonate any person or entity.</li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
            <li>Violate any applicable local, state, national or international law.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Lodgely, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </div>
      </div>
    </div>
  );
}
