import Image from "next/image";
import { ArrowDown, Phone, UsersRound } from "lucide-react";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { schoolInfo } from "@/lib/site";

export const metadata = {
  title: "Our Staff",
  description: "Meet the leadership, teachers, and support staff at St. John Secondary School.",
};

const leadership = [
  { name: "Madam Josephine Shana", title: "School Manager", initials: "JS" },
  { name: "Mr Baraka Mkumbwa", title: "Head of School", initials: "BM" },
  { name: "Mr John Mrema", title: "Deputy Head of School", initials: "JM" },
];

const staffMembers = [
  { name: "Mwalimu Neema Joseph", title: "Academic Teacher", initials: "NJ" },
  { name: "Bi Asha Peter", title: "Accountant", initials: "AP" },
  { name: "Mr Peter Daudi", title: "Discipline Teacher", initials: "PD" },
  { name: "Mr Daniel John", title: "Subject Teachers", initials: "DJ" },
  { name: "Bi Grace Michael", title: "Matron", initials: "GM" },
  { name: "Mr Hassan Mushi", title: "Patron", initials: "HM", phone: "+255 123 456 789" },
];

const staffHierarchy = [
  { ...staffMembers[0], reports: [staffMembers[3]] },
  { ...staffMembers[1], reports: [] },
  { ...staffMembers[2], reports: staffMembers.slice(4) },
];

const communityPhotos = [
  { src: "/images/gallery-1.jpg", alt: "Students working together in a classroom", label: "Learning together" },
  { src: "/images/gallery-9.jpg", alt: "A student meeting with family and school staff", label: "Family partnership" },
  { src: "/images/gallery-2.jpg", alt: "Students participating in a school sports event", label: "Beyond the classroom" },
  { src: "/images/gallery-4.jpg", alt: "School campus grounds", label: "Our campus" },
];

const staffProfiles = [...leadership, ...staffMembers];

export default function StaffPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-20">
          <Image src="/images/gallery-banner.jpg" alt="" fill sizes="100vw" preload className="object-cover object-center" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/75" />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <ScrollReveal className="max-w-3xl">
              <p className="section-eyebrow text-gold-300">Our people</p>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">The people behind every student&apos;s progress.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">Meet the leaders, teachers, and staff who guide learning and support everyday life at St. John.</p>
              <a href="#organization-structure" className="mt-8 inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300">Explore our structure <ArrowDown aria-hidden="true" className="h-4 w-4 text-gold-300" /></a>
            </ScrollReveal>
            <ScrollReveal direction="right" className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative col-span-2 aspect-[16/8] overflow-hidden bg-navy-800">
                <Image src="/images/gallery-5.jpg" alt="Science learning at St. John" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                <span className="absolute bottom-3 left-3 bg-navy-950/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">Teaching and learning</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-800">
                <Image src="/images/gallery-9.jpg" alt="A school family partnership moment" fill sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-800">
                <Image src="/images/gallery-6.jpg" alt="Students celebrating together" fill sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section id="organization-structure" className="scroll-mt-20 bg-cream-50 py-20 sm:py-24">
        <Container>
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">How we work together</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">Organization structure.</h2>
            <p className="mt-4 text-base leading-7 text-navy-600">A clear reporting line connects school management, leadership, and the staff who support students every day.</p>
          </ScrollReveal>

          <ScrollReveal className="mx-auto mt-12 max-w-7xl">
            <div className="staff-org-chart">
              <article className="staff-org-person staff-org-node staff-org-manager">
                <span className="staff-org-avatar staff-org-leader-avatar">{leadership[0].initials}</span>
                <div className="staff-org-person-details">
                  <p className="staff-org-eyebrow">School Management</p>
                  <h3 className="staff-org-title">{leadership[0].name}</h3>
                  <p className="staff-org-role">{leadership[0].title}</p>
                </div>
              </article>
              <span aria-hidden="true" className="staff-org-flow-line" />
              <article className="staff-org-person staff-org-node staff-org-head">
                <span className="staff-org-avatar staff-org-leader-avatar">{leadership[1].initials}</span>
                <div className="staff-org-person-details">
                  <p className="staff-org-eyebrow">School Leadership</p>
                  <h3 className="staff-org-title">{leadership[1].name}</h3>
                  <p className="staff-org-role">{leadership[1].title}</p>
                </div>
              </article>
              <span aria-hidden="true" className="staff-org-flow-line" />
              <article className="staff-org-person staff-org-node staff-org-deputy">
                <span className="staff-org-avatar staff-org-leader-avatar">{leadership[2].initials}</span>
                <div className="staff-org-person-details">
                  <p className="staff-org-eyebrow">School Leadership</p>
                  <h3 className="staff-org-title">{leadership[2].name}</h3>
                  <p className="staff-org-role">{leadership[2].title}</p>
                </div>
              </article>
              <span aria-hidden="true" className="staff-org-flow-line staff-org-team-line" />
              <ul className="staff-org-positions" aria-label="Teaching and school support staff">
                {staffHierarchy.map((member) => (
                  <li key={member.title} className="staff-org-position-group">
                    <article className="staff-org-person staff-org-node staff-org-position">
                      <span className="staff-org-avatar staff-org-role-avatar">{member.initials}</span>
                      <div className="staff-org-person-details">
                        <h4 className="staff-org-title">{member.name}</h4>
                        <p className="staff-org-role">{member.title}</p>
                      </div>
                    </article>
                    {member.reports.length > 0 && (
                      <>
                        <span aria-hidden="true" className="staff-org-report-stem" />
                        <ul className={`staff-org-reports${member.reports.length > 1 ? " staff-org-reports-multiple" : " staff-org-reports-single"}`}>
                          {member.reports.map((report) => (
                            <li key={report.title}>
                              <article className="staff-org-person staff-org-node staff-org-position staff-org-report">
                                <span className="staff-org-avatar staff-org-role-avatar">{report.initials}</span>
                                <div className="staff-org-person-details">
                                  <h4 className="staff-org-title">{report.name}</h4>
                                  <p className="staff-org-role">{report.title}</p>
                                </div>
                              </article>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ScrollReveal className="flex flex-col justify-between gap-5 border-b border-navy-200 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-eyebrow">The people of St. John</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">Meet our staff.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-navy-600">The educators and staff who guide learning and care for our school community.</p>
          </ScrollReveal>
          <ScrollReveal stagger className="mt-5 grid gap-x-12 lg:grid-cols-2">
            {staffProfiles.map(({ name, title, initials, phone }, index) => (
              <article key={title} className="group flex min-w-0 items-center gap-5 border-b border-navy-100 py-6 transition-colors hover:border-gold-400 sm:gap-6">
                <span aria-hidden="true" className="w-12 shrink-0 font-sans text-xl font-semibold tracking-tight text-navy-700 transition-colors group-hover:text-forest-700 sm:w-14 sm:text-2xl">{initials}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold tracking-[0.07em] text-forest-700">{title}</p>
                  <h3 className="mt-1 font-sans text-lg font-semibold leading-snug tracking-tight text-navy-900 sm:text-xl">{name}</h3>
                  <p className="mt-1 text-sm text-navy-600">{schoolInfo.name}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span className="font-sans text-sm font-medium tabular-nums text-gold-700">{String(index + 1).padStart(2, "0")}</span>
                  {phone && <a href={`tel:${phone.replaceAll(" ", "")}`} aria-label={`Call ${name} at ${phone}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 transition-colors hover:text-gold-700"><Phone aria-hidden="true" className="h-3.5 w-3.5" /><span className="hidden sm:inline">{phone}</span></a>}
                </div>
              </article>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ScrollReveal className="flex flex-col justify-between gap-5 border-b border-navy-200 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-eyebrow">Our community</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">A team, working together.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-navy-600">Our school is supported by {schoolInfo.stats.teachers} teachers, alongside staff who contribute to student care and daily campus life.</p>
          </ScrollReveal>
          <ScrollReveal stagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {communityPhotos.map((photo) => (
              <figure key={photo.src} className="group relative aspect-[4/3] overflow-hidden bg-navy-900">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent px-4 pb-3 pt-8 text-xs font-semibold text-white">{photo.label}</figcaption>
              </figure>
            ))}
          </ScrollReveal>
          <div className="mt-12 flex justify-center">
            <a href={`mailto:${schoolInfo.contact.email}`} className="inline-flex items-center gap-2 border border-navy-200 px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-gold-400 hover:text-gold-700"><UsersRound aria-hidden="true" className="h-4 w-4 text-gold-600" />Contact the school</a>
          </div>
        </Container>
      </section>
    </>
  );
}
