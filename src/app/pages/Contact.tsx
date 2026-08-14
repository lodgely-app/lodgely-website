import React, { useState, useRef } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Building, Phone, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { SEO } from '../components/SEO';
import ReCAPTCHA from 'react-google-recaptcha';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}`;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!recaptchaToken) {
      setErrorMsg('Please complete the ReCAPTCHA verification.');
      setIsLoading(false);
      return;
    }

    const payload = { ...data, recaptchaToken };

    try {
      const response = await fetch(`${BASE_URL}/api/website/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Failed to submit demo request');
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center bg-slate-50">
        <Card className="max-w-md w-full p-8 text-center shadow-xl border-0 ring-1 ring-slate-100">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for Contacting Lodgely. We will get back to you as soon as possible.
          </p>
          <Button 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white"
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </Button>
        </Card>
      </div>
    );
  }
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
            <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-200">
                    {errorMsg}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input 
                        type="text"
                        name="firstName"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input 
                        type="text"
                        name="lastName"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Work Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="email"
                      name="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
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

                <div className="flex justify-center mt-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                    onChange={(token) => setRecaptchaToken(token)}
                  />
                </div>

                <Button type="submit" size="lg" disabled={isLoading || !recaptchaToken} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg rounded-xl mt-4 shadow-md">
                  <Send className={`w-5 h-5 mr-2 ${isLoading ? 'animate-pulse' : ''}`} />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>

              {/* <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
