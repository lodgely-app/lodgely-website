import React from "react";
import { Shield, Receipt, TicketCheck, Bell } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Shield,
    title: "Multi-Tenant Architecture",
    description: "Secure, isolated environments for every property you manage. Each community operates independently with its own data, users, and configurations.",
    color: "from-teal-500 to-cyan-500",
    shadow: "shadow-teal-500/15",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Receipt,
    title: "Automated Finances & Ledger",
    description: "Track service charges, automate billing cycles, and process payments instantly through integrated payment gateways. Every transaction, accounted for.",
    color: "from-cyan-500 to-sky-500",
    shadow: "shadow-cyan-500/15",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    icon: TicketCheck,
    title: "Community Ticketing",
    description: "A modern helpdesk where tenants can raise, track, and upvote maintenance tickets. Managers see real-time priority queues based on community impact.",
    color: "from-indigo-500 to-indigo-400",
    shadow: "shadow-indigo-500/15",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Keep everyone in the loop with instant announcements, payment reminders, and maintenance updates pushed directly to their devices.",
    color: "from-emerald-500 to-emerald-400",
    shadow: "shadow-emerald-500/15",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function BentoFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
              Core Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Everything you need,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">nothing you don't</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Purpose-built tools that work together to simplify property management from top to bottom.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1} className={f.span}>
              <div className={`group relative h-full p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 ${f.shadow} shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${f.color} opacity-[0.06] rounded-bl-full group-hover:opacity-[0.12] transition-opacity duration-500`} />

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg ${f.shadow}`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-base text-slate-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
