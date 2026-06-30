import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEO } from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Lodgely team for questions about features, trials, pricing, or to request a demo." 
        canonicalUrl="https://lodgely.ng/contact"
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white">
              <h2 className="text-3xl font-light tracking-tight mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-white">Email Us</h3>
                    <p className="text-slate-400 font-light mb-2">Our friendly team is here to help.</p>
                    <a href="mailto:support@lodgely.ng" className="text-teal-400 hover:text-teal-300 font-medium">
                      support@lodgely.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-white">Visit Us</h3>
                    <p className="text-slate-400 font-light mb-2">Come say hello at our office HQ.</p>
                    <p className="text-teal-400 font-medium">
                      Plot 246 Cadastral Zone B10,<br />Jabi-Dakibiu, Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-white">Call Us</h3>
                    <p className="text-slate-400 font-light mb-2">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+2349115761918" className="text-teal-400 hover:text-teal-300 font-medium">
                      +234 911 576 1918
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-light tracking-tight text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-slate-700">First Name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-slate-700">Last Name</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
