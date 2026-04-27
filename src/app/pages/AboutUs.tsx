import { Heart, Target, Zap, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Mission is to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Elevate Living</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We believe that property management shouldn't be a source of stress. Our team of engineers and real estate professionals built Lodgely to bring transparency, efficiency, and beauty to the renting experience.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Simplicity First</h3>
              <p className="text-slate-600">
                We design software that gets out of your way. Complexity is hidden behind intuitive interfaces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Lightning Fast</h3>
              <p className="text-slate-600">
                Real-time updates mean you never miss a maintenance request or rent payment notification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Absolute Security</h3>
              <p className="text-slate-600">
                Your financial data and personal information are protected by bank-level encryption standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Empathetic Support</h3>
              <p className="text-slate-600">
                We treat our customers like partners. When you need help, our team is there with human solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">The Lodgely Story</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Born from the frustration of dealing with scattered spreadsheets, lost maintenance tickets, and disconnected communication, Lodgely was founded in 2025. We set out to build the platform we wished we had when managing our own properties. Today, Lodgely empowers thousands of facility managers and tenants to experience seamless living.
          </p>
        </div>

      </div>
    </div>
  );
}
