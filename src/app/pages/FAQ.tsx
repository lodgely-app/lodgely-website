import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SEO } from '../components/SEO';

const faqs = [
  {
    question: "What is Lodgely?",
    answer: "Lodgely is a premium facility management platform that bridges the gap between facility managers and tenants. It centralizes rent collection, maintenance requests, communication, and financial tracking into one beautifully designed digital ecosystem."
  },
  {
    question: "How do tenants pay rent?",
    answer: "Tenants can easily pay their rent, service charges, or any other outstanding balances directly through the Lodgely Mobile App or web portal. We support bank transfers, debit cards, and automatic recurring payments."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We utilize enterprise-grade encryption and comply with all global data privacy standards. Your financial data, personal information, and property details are protected with role-based access controls."
  },
  {
    question: "Can I use Lodgely for commercial properties?",
    answer: "Yes! While we offer robust features for residential properties, Lodgely's flexible architecture allows you to manage commercial spaces, retail units, and mixed-use developments with the same efficiency."
  },
  {
    question: "How does the maintenance workflow function?",
    answer: "Tenants can submit maintenance requests complete with photos and descriptions via their app. Managers instantly receive the ticket, can assign it to a specific technician, set a priority level, and track its resolution status in real time."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about Lodgely's property management software, pricing, features, and more." 
        canonicalUrl="https://lodgely.ng/faq"
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Everything you need to know about the product and how it works. Can't find an answer? Feel free to <a href="/contact" className="text-teal-600 hover:text-teal-700 underline">contact us</a>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white shadow-md border-teal-100' : 'bg-slate-50 hover:bg-white'}`}
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-6 text-slate-500 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
