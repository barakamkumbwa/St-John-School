"use client";

import { useState } from "react";
import Link from "next/link";
import { SiFacebook, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { ChevronDown, GraduationCap, Mail, Menu, Phone, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { schoolInfo } from "@/lib/site";

const academicGroups = [
  {
    title: "O-Level",
    links: [
      { label: "Form 1–4", href: "/academics#o-level" },
      { label: "Subjects & curriculum", href: "/academics#o-level" },
      { label: "Academic Calendar", href: "/academics#school-calendar" },
    ],
  },
  {
    title: "A-Level",
    links: [
      { label: "Form 5–6", href: "/academics/a-level#form-five-six" },
      { label: "Subject combinations", href: "/academics/a-level#subject-combinations" },
      { label: "Academic Calendar", href: "/academics/a-level#a-level-calendar" },
    ],
  },
  {
    title: "Beyond the classroom",
    links: [
      { label: "Co-curricular activities", href: "/academics#co-curricular" },
      { label: "School life", href: "/gallery" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: schoolInfo.social.facebook, icon: SiFacebook },
  { label: "Instagram", href: schoolInfo.social.instagram, icon: SiInstagram },
  { label: "YouTube", href: schoolInfo.social.youtube, icon: SiYoutube },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      onMouseLeave={() => { setAcademicsOpen(false); setAdmissionsOpen(false); }}
    >
      <div className="hidden bg-navy-900 text-navy-100 sm:block">
        <Container>
          <div className="flex min-h-10 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-[11px] xl:flex-nowrap xl:py-0 xl:text-xs">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 xl:gap-x-6">
              <a href={`mailto:${schoolInfo.contact.email}`} className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-gold-300">
                <Mail className="h-3.5 w-3.5 text-gold-300" />
                <span className="hidden sm:inline">{schoolInfo.contact.email}</span>
                <span className="sm:hidden">Email us</span>
              </a>
              <a href={`tel:${schoolInfo.contact.phone}`} className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-gold-300">
                <Phone className="h-3.5 w-3.5 text-gold-300" />
                <span>{schoolInfo.contact.phone}</span>
              </a>
              <a href={`tel:${schoolInfo.contact.mobile}`} className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-gold-300">
                <Phone className="h-3.5 w-3.5 text-gold-300" />
                <span>{schoolInfo.contact.mobile}</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="hidden whitespace-nowrap text-navy-200 xl:inline">Knowledge for Life</span>
              <nav aria-label="Social media" className="flex flex-wrap items-center gap-x-2 gap-y-1 xl:gap-x-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} @stjohnschool`} className="inline-flex items-center gap-1.5 rounded px-1.5 py-1 text-navy-100 transition-colors hover:bg-white/10 hover:text-gold-300">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="whitespace-nowrap">@stjohnschool</span>
                  </a>
                ))}
              </nav>
              <span className="whitespace-nowrap border-l border-white/20 pl-4 font-medium text-white">Admissions open · 2026</span>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative border-b border-navy-100 bg-white shadow-sm">
        <Container>
          <div className="flex h-[4.5rem] items-center justify-between lg:h-[5.15rem]">
            <Link href="/" className="group flex items-center gap-3" aria-label="St. John Secondary School home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-gold-400 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <span>
                <span className="block font-heading text-base font-bold leading-tight text-navy-900 sm:text-lg">St. John</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-600 sm:text-xs">Secondary School</span>
              </span>
            </Link>

            <nav aria-label="Main navigation" className="hidden h-full items-center gap-1 xl:flex">
              {schoolInfo.navLinks.map((link) => link.label === "Academics" ? (
                <button
                  key={link.href}
                  type="button"
                  aria-expanded={academicsOpen}
                  aria-controls="academics-mega-menu"
                  onMouseEnter={() => { setAcademicsOpen(true); setAdmissionsOpen(false); }}
                  onFocus={() => { setAcademicsOpen(true); setAdmissionsOpen(false); }}
                  onClick={() => { setAcademicsOpen((open) => !open); setAdmissionsOpen(false); }}
                  className={`group relative flex h-full items-center gap-1 px-3 text-[13px] font-semibold transition-colors hover:text-forest-600 ${academicsOpen ? "text-forest-600" : "text-navy-800"}`}
                >
                  Academics
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${academicsOpen ? "rotate-180" : ""}`} />
                  <span className={`absolute bottom-0 left-1/2 h-[3px] w-5 -translate-x-1/2 origin-center bg-forest-600 transition-transform duration-300 ${academicsOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </button>
              ) : link.label === "Admissions" ? (
                <div key={link.href} className="relative h-full" onMouseEnter={() => { setAdmissionsOpen(true); setAcademicsOpen(false); }}>
                  <button
                    type="button"
                    aria-expanded={admissionsOpen}
                    aria-controls="admissions-menu"
                    onFocus={() => { setAdmissionsOpen(true); setAcademicsOpen(false); }}
                    onClick={() => setAdmissionsOpen((open) => !open)}
                    className={`group relative flex h-full items-center gap-1 px-3 text-[13px] font-semibold transition-colors hover:text-gold-600 ${admissionsOpen ? "text-gold-600" : "text-navy-800"}`}
                  >
                    Admissions
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${admissionsOpen ? "rotate-180" : ""}`} />
                    <span className={`absolute bottom-0 left-1/2 h-[3px] w-5 -translate-x-1/2 origin-center bg-gold-500 transition-transform duration-300 ${admissionsOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </button>
                  {admissionsOpen && (
                    <div id="admissions-menu" className="absolute left-0 top-full z-50 w-52 bg-white shadow-[0_12px_24px_-10px_rgba(10,25,56,0.35)]">
                      <Link href="/admissions/apply" onClick={() => setAdmissionsOpen(false)} className="block border-b border-navy-100 px-4 py-3 text-xs font-medium uppercase tracking-wide text-navy-900 transition-colors hover:text-gold-600">Apply Now</Link>
                      <Link href="/admissions/fees" onClick={() => setAdmissionsOpen(false)} className="block px-4 py-3 text-xs font-medium uppercase tracking-wide text-gold-700 transition-colors hover:text-navy-900">School Fee</Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} onMouseEnter={() => { setAcademicsOpen(false); setAdmissionsOpen(false); }} onFocus={() => { setAcademicsOpen(false); setAdmissionsOpen(false); }} className="group relative flex h-full items-center px-3 text-[13px] font-semibold text-navy-800 transition-colors hover:text-forest-600">
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-5 -translate-x-1/2 origin-center scale-x-0 bg-forest-600 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button href="/portal/login" size="sm" variant="primary" className="hidden rounded-md bg-forest-600 text-white shadow-none hover:bg-forest-700 sm:inline-flex">Portal Login</Button>
              <button onClick={() => setIsOpen(!isOpen)} className="rounded-lg p-2 text-navy-800 hover:bg-navy-50 xl:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>

        {academicsOpen && (
          <div id="academics-mega-menu" className="absolute inset-x-0 top-full z-50 hidden border-t border-navy-100 bg-white shadow-[0_24px_55px_-28px_rgba(10,25,56,0.45)] xl:block" onMouseEnter={() => setAcademicsOpen(true)}>
            <Container>
              <div className="grid grid-cols-4">
                {academicGroups.map((group) => (
                  <div key={group.title} className="border-r border-navy-100 px-7 py-7 first:pl-2">
                    <h2 className="mb-5 font-heading text-base font-semibold text-navy-900">{group.title}</h2>
                    <ul className="space-y-3">
                      {group.links.map((item) => (
                        <li key={item.label}><Link href={item.href} onClick={() => setAcademicsOpen(false)} className="text-sm text-navy-600 transition-colors hover:text-forest-600">{item.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href="/academics" onClick={() => setAcademicsOpen(false)} className="group flex min-h-52 flex-col justify-between bg-navy-900 p-7 text-white transition-colors duration-300 hover:bg-navy-800">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gold-300 transition-transform duration-300 group-hover:scale-110"><GraduationCap className="h-6 w-6" /></span>
                  <span>
                    <span className="mb-2 block font-heading text-lg font-semibold">St. John Academics</span>
                    <span className="block text-sm leading-6 text-white/75">Strong foundations, supportive teachers, and a future worth shaping.</span>
                    <span className="mt-4 block text-sm font-semibold text-gold-300">Explore academics <span aria-hidden="true">→</span></span>
                  </span>
                </Link>
              </div>
            </Container>
          </div>
        )}

        {isOpen && (
          <div className="border-t border-navy-100 bg-white py-4 shadow-lg animate-fade-down xl:hidden">
            <Container>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                {schoolInfo.navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50">{link.label}</Link>
                ))}
                <div className="grid grid-cols-2 gap-2 px-4">
                  <Link href="/portal/login" onClick={() => setIsOpen(false)} className="rounded-lg bg-navy-50 px-3 py-2 text-sm font-medium text-navy-700">Portal Login</Link>
                  <Link href="/admissions/fees" onClick={() => setIsOpen(false)} className="rounded-lg bg-navy-50 px-3 py-2 text-sm font-medium text-navy-700">School Fees</Link>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 pb-2">
                  <Link href="/academics#o-level" onClick={() => setIsOpen(false)} className="rounded-lg bg-navy-50 px-3 py-2 text-sm text-navy-700">O-Level</Link>
                  <Link href="/academics/a-level#a-level" onClick={() => setIsOpen(false)} className="rounded-lg bg-navy-50 px-3 py-2 text-sm text-navy-700">A-Level</Link>
                </div>
              </nav>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
