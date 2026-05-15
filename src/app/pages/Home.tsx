import { useEffect } from 'react';
import { useLocation, Link } from 'react-router';
import { CreditCard, Wrench, Bell, Users, BarChart3, Send, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section id="features" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-6 bg-teal-100 text-teal-700 border-teal-200">Premium Property Management</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Seamless Living,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500"> Simplified Management</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Connect facility managers with tenants through a premium digital ecosystem. Replace scattered communication and manual tracking with a beautiful, synchronized experience.
            </p>
            <div className="flex justify-center">
              <Link to="/schedule-demo">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 text-lg h-14 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manager Dashboard Section */}
      <section id="managers" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-teal-500 text-white border-teal-400">For Facility Managers</Badge>
            <h2 className="text-4xl font-bold mb-4">Your Centralized Command Center</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Empower your team with real-time insights, streamlined operations, and complete control over your properties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Send, color: "teal", title: "Secure Onboarding", desc: "Dispatch secure tenant invitations and streamline the onboarding process with digital documentation." },
              { icon: BarChart3, color: "cyan", title: "Financial Tracking", desc: "Monitor real-time ledger data, payment cycles, and outstanding balances across all properties." },
              { icon: Users, color: "purple", title: "Occupancy Management", desc: "Track building unit occupancy, lease cycles, and tenant information in one unified dashboard." },
              { icon: Bell, color: "blue", title: "Broadcast Announcements", desc: "Keep tenants informed with building-wide or targeted announcements delivered instantly." },
              { icon: Wrench, color: "orange", title: "Ticket Resolution", desc: "Manage maintenance requests efficiently with priority tracking and assignment workflows." },
              { icon: Shield, color: "green", title: "Secure & Compliant", desc: "Enterprise-grade security with role-based access and complete audit trails." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 transition-colors h-full">
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-300">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tenant Mobile App Section */}
      <section id="tenants" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">For Residents</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Your Home, At Your Fingertips</h2>
              <p className="text-xl text-slate-600 mb-8">
                A premium mobile experience designed for modern living. Everything you need to manage your residence in one beautiful app.
              </p>

              <div className="space-y-6">
                {[
                  { icon: CreditCard, color: "teal", title: "Smart Payment Tracking", desc: "View lease cycles, service charges, and remaining balances across all your properties. Make secure digital payments instantly." },
                  { icon: Wrench, color: "cyan", title: "Maintenance Requests", desc: "Submit and track maintenance requests with photos, priority levels, and real-time status updates." },
                  { icon: Bell, color: "purple", title: "Stay Informed", desc: "Receive building announcements, reminders, and important updates delivered directly to your device." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex gap-4"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 max-w-sm mx-auto">
                <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-[4px] border-slate-800">
                  <div className="bg-slate-50 rounded-[2.4rem] overflow-hidden aspect-[9/18] relative flex flex-col">
                    
                    {/* App Header Mock */}
                    <div className="bg-white px-5 pt-10 pb-4 shadow-sm flex items-center justify-between z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                          <div className="w-5 h-5 bg-teal-500 rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Good Morning</div>
                          <div className="text-sm font-bold text-slate-900">John</div>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        <Bell className="w-5 h-5 text-slate-600" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 px-4 pt-4 space-y-4">
                      
                      {/* Balance Card */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 shadow-md cursor-pointer"
                      >
                        <div className="mb-4">
                          <div className="text-[10px] text-white/70 font-bold uppercase tracking-widest mb-1">Remaining Balance</div>
                          <div className="text-[10px] text-white/50">Cycle • Jan 1 - Dec 31</div>
                        </div>
                        <div className="flex justify-between items-center mb-5">
                          <div className="text-3xl font-bold text-teal-400">₦1,245.00</div>
                          {/* Progress Ring */}
                          <div className="w-12 h-12 rounded-full border-4 border-teal-400/20 border-t-teal-400 flex items-center justify-center">
                            <span className="text-teal-400 font-bold text-[10px]">75%</span>
                          </div>
                        </div>
                        <div className="flex items-center bg-white/5 rounded-xl p-3">
                          <div className="flex-1 text-center">
                            <div className="text-[10px] text-white/70 mb-1 uppercase font-medium">Paid</div>
                            <div className="text-sm font-bold text-teal-400">₦3,735.00</div>
                          </div>
                          <div className="w-px h-6 bg-white/10 mx-2"></div>
                          <div className="flex-1 text-center">
                            <div className="text-[10px] text-white/70 mb-1 uppercase font-medium">Total Due</div>
                            <div className="text-sm font-bold text-teal-400">₦4,980.00</div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Action Button */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-teal-500 rounded-xl py-3 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                      >
                        <CreditCard className="w-4 h-4 text-slate-900" />
                        <span className="text-slate-900 font-bold text-sm">Make a Payment</span>
                      </motion.div>

                      {/* Issues Section */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 cursor-pointer"
                      >
                        <div className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-wider">Your Open Issues</div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                            <Wrench className="w-5 h-5 text-orange-500" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-slate-900">HVAC Repair</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">Oct 12, 2026</div>
                          </div>
                          <div className="px-2 py-1 bg-orange-100 text-orange-700 text-[9px] font-bold rounded uppercase tracking-wider">Pending</div>
                        </div>
                      </motion.div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-500 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Join forward-thinking property managers who've replaced scattered tools with one premium platform.
          </p>
        </div>
      </section>
    </>
  );
}
