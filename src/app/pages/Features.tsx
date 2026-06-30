import React from "react";
import {
  Building, Layers, Users, DollarSign, CreditCard, FileText,
  TicketCheck, ArrowUpCircle, Bell, ShieldCheck, Eye, Lock,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { Link } from "react-router";
import ScrollReveal from "../components/ScrollReveal";

const MANAGER_IMG = "https://media.base44.com/images/public/6a3e9361967ebc0861f2fc57/689ebc434_generated_f180fa0e.png";
const TENANT_IMG = "https://media.base44.com/images/public/6a3e9361967ebc0861f2fc57/8b15ea428_generated_4a1ec652.png";

const sections = [
  {
    id: "property",
    badge: "Facility Management",
    title: "Every building, every unit — organized effortlessly",
    description: "From sprawling estates to individual apartments, manage your entire portfolio with a clear, hierarchical view that mirrors how your properties actually work.",
    image: MANAGER_IMG,
    imageAlt: "Premium workspace showing facility management dashboard",
    color: "#0d9488", // Using teal-600 to match lodgely brand
    features: [
      { icon: Building, text: "Multi-building portfolio management with detailed facility profiles" },
      { icon: Layers, text: "Hierarchical unit tracking — buildings, floors, apartments, and rooms" },
      { icon: Users, text: "Real-time occupancy dashboard with tenant assignment and history" },
    ],
    bullets: [
      "Drag-and-drop tenant assignments",
      "Vacancy tracking and alerts",
      "Custom facility metadata fields",
      "Bulk import from spreadsheets",
    ],
  },
  {
    id: "finance",
    badge: "Financial Management",
    title: "Automate billing, track every cent, sleep soundly",
    description: "Integrated with secure payment processing, Lodgely automates the entire financial lifecycle — from charge calculation to receipt generation.",
    image: null,
    color: "#0891b2", // Cyan-600
    features: [
      { icon: DollarSign, text: "Automated service charge calculation based on unit type and occupancy" },
      { icon: CreditCard, text: "Secure payment processing with real-time reconciliation" },
      { icon: FileText, text: "Individual tenant ledgers with complete transaction history and receipts" },
    ],
    bullets: [
      "Auto-generated invoices on custom schedules",
      "Multiple payment methods (bank transfer, card, USSD)",
      "Payment reminders and overdue notifications",
      "Exportable financial reports (PDF, CSV)",
    ],
  },
  {
    id: "support",
    badge: "Support & Engagement",
    title: "A living community, not just a building",
    description: "Transform tenant-manager communication with a modern, community-driven system where issues surface by impact, not just by date.",
    image: TENANT_IMG,
    imageAlt: "Modern apartment interior with smart home aesthetics",
    color: "#0f766e", // Teal-700
    features: [
      { icon: TicketCheck, text: "Community-driven ticketing with tenant upvoting to surface critical issues" },
      { icon: Bell, text: "Real-time notifications for tickets, payments, and announcements" },
      { icon: ArrowUpCircle, text: "Manager-to-tenant broadcasting with read receipts and targeting" },
    ],
    bullets: [
      "Photo and video attachments on tickets",
      "Priority queues based on community votes",
      "Scheduled and targeted announcements",
      "Full audit trail for every interaction",
    ],
  },
  {
    id: "rbac",
    badge: "Role-Based Access Control",
    title: "The right access for the right people",
    description: "Security isn't an afterthought — it's foundational. Lodgely enforces strict, differentiated views so every user sees exactly what they need and nothing more.",
    image: null,
    color: "#0f172a", // Slate-900
    features: [
      { icon: ShieldCheck, text: "Three distinct roles — Admin, Manager, and Tenant — each with purpose-built views" },
      { icon: Eye, text: "Granular permission controls down to individual feature and data access" },
      { icon: Lock, text: "Secure authentication with session management and activity logging" },
    ],
    bullets: [
      "Admin: full system configuration and user management",
      "Manager: facility operations, billing, and tenant support",
      "Tenant: personal dashboard, payments, and ticket submission",
      "API-level permission enforcement",
    ],
  },
];

interface FeatureSectionProps {
  section: typeof sections[0];
  index: number;
}

function FeatureSection({ section, index }: FeatureSectionProps) {
  const isReversed = index % 2 !== 0;
  const hasImage = !!section.image;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid ${hasImage ? "lg:grid-cols-2" : "lg:grid-cols-5"} gap-16 items-center`}>
          {/* Content */}
          <div className={`${hasImage ? "" : "lg:col-span-3"} ${isReversed && hasImage ? "lg:order-2" : ""}`}>
            <ScrollReveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: `${section.color}15`, border: `1px solid ${section.color}30` }}
              >
                <span className="text-sm font-semibold" style={{ color: section.color }}>
                  {section.badge}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
                {section.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                {section.description}
              </p>
            </ScrollReveal>

            <div className="space-y-5 mb-8">
              {section.features.map((f, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.08}>
                  <div className="flex gap-4 items-start">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${section.color}15` }}
                    >
                      <f.icon className="w-5 h-5" style={{ color: section.color }} />
                    </div>
                    <p className="text-base text-slate-600 font-light leading-relaxed pt-2">
                      {f.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: section.color }} />
                    <span className="text-sm text-slate-500">{b}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image or Feature Cards */}
          {hasImage ? (
            <ScrollReveal delay={0.2} direction={isReversed ? "right" : "left"} className={isReversed ? "lg:order-1" : ""}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-10"
                  style={{ background: `linear-gradient(135deg, ${section.color}, #0d9488)` }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-100">
                  <img src={section.image as string} alt={section.imageAlt} className="w-full h-auto" />
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4">
                {section.features.map((f, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${section.color}10` }}
                    >
                      <f.icon className="w-5 h-5" style={{ color: section.color }} />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-8">
              <span className="text-sm font-semibold text-teal-700">Features Deep-Dive</span>
            </div>
          </ScrollReveal> */}
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] mb-6 max-w-4xl mx-auto tracking-tight">
              Built for how facility management{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500 font-medium">actually works</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              Explore every capability designed to streamline your operations, delight your tenants, and grow your portfolio with confidence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dividers between sections */}
      {sections.map((s, i) => (
        <React.Fragment key={s.id}>
          {i > 0 && (
            <div className="max-w-7xl mx-auto px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </div>
          )}
          <FeatureSection section={s} index={i} />
        </React.Fragment>
      ))}

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center p-12 md:p-20 rounded-[2rem] bg-slate-900 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 max-w-2xl mx-auto tracking-tight">
                  See all features in action
                </h2>
                <p className="text-lg text-slate-400 font-light mb-10 max-w-xl mx-auto">
                  Book a personalized demo and discover how Lodgely fits your unique facility portfolio.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/schedule-demo"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all active:scale-95"
                  >
                    Schedule a Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
