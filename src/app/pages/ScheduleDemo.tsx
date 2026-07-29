import { useState } from 'react';
import { Calendar, Clock, User, Mail, Building, Phone, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { SEO } from '../components/SEO';

export default function ScheduleDemo() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL && import.meta.env.VITE_API_BASE_URL !== 'undefined' 
        ? import.meta.env.VITE_API_BASE_URL 
        : 'https://manager-be.staging.lodgely.ng'; // Fallback to your production/staging API URL
        
      const response = await fetch(`${baseUrl}/api/website/schedule-demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
            Thank you for your interest in Lodgely. One of our property management experts will reach out to you shortly to schedule your personalized demo.
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
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      <SEO 
        title="Schedule a Demo" 
        description="Book a personalized demo of Lodgely and see how our premium facility management software can streamline your operations." 
        canonicalUrl="https://lodgely.ng/schedule-demo"
      />
      <div className="max-w-6xl mx-auto">
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Left Column: Context / Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">Free Consultation</Badge>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
                See Lodgely in Action
              </h1>
              <p className="text-lg text-slate-500 font-light mb-8 leading-relaxed">
                Discover how our premium facility management platform can streamline your operations, delight your tenants, and boost your bottom line.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Personalized Walkthrough</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">A tailored 30-minute demonstration focusing on your specific property management needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Time-Saving Insights</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">Learn how automated workflows can save your team hours of manual administrative work each week.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3">
            <Card className="p-8 shadow-xl border-0 ring-1 ring-slate-100 bg-white rounded-2xl">
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
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="tel"
                      name="phone"
                      className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Company / Property Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="text"
                      name="company"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Lodgely Properties LLC"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Number of Units Managed</label>
                  <select name="portfolioSize" className="block w-full px-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white transition-colors">
                    <option value="">Select portfolio size...</option>
                    <option value="1-50">1 - 50 units</option>
                    <option value="51-200">51 - 200 units</option>
                    <option value="201-500">201 - 500 units</option>
                    <option value="501+">501+ units</option>
                  </select>
                </div>

                <Button type="submit" size="lg" disabled={isLoading} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg rounded-xl mt-4 shadow-md">
                  <Send className={`w-5 h-5 mr-2 ${isLoading ? 'animate-pulse' : ''}`} />
                  {isLoading ? 'Sending...' : 'Request Demo'}
                </Button>

                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
