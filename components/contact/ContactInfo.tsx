import Image from "next/image";
import { SiFacebook, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { schoolInfo } from "@/lib/site";

const items = [
  { icon: MapPin, label: "Address", value: `${schoolInfo.address.poBox}, ${schoolInfo.address.city}, ${schoolInfo.address.country}` },
  { icon: Phone, label: "Phone", value: schoolInfo.contact.mobile, href: `tel:${schoolInfo.contact.mobile}` },
  { icon: Mail, label: "Email", value: schoolInfo.contact.email, href: `mailto:${schoolInfo.contact.email}` },
  { icon: Clock, label: "Office Hours", value: schoolInfo.contact.hours },
];

export function ContactInfo() {
  return (
    <div className="relative isolate h-full overflow-hidden bg-navy-950 p-7 text-white sm:p-10 lg:p-12">
      <Image src="/images/Contact Us.jpeg" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="-z-10 object-cover object-center opacity-45" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/80 via-navy-950/65 to-navy-900/55" />
      <div className="border-l-2 border-gold-400 pl-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">Get in touch</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight sm:text-4xl">We&apos;re here to help.</h2>
        <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
          Visit our school in Morogoro or contact us by phone or email. Our team will be glad to assist.
        </p>
      </div>

      <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="group flex items-start gap-4 py-5">
              <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">{item.label}</p>
                <p className="mt-1 text-sm font-medium leading-6 text-white transition-colors group-hover:text-gold-200">{item.value}</p>
              </div>
            </div>
          );
          return (
            <li key={item.label}>
              {item.href ? <a className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300" href={item.href}>{content}</a> : content}
            </li>
          );
        })}
      </ul>

      <div className="mt-9">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">Follow us</p>
        <div className="flex gap-2">
          <a href={schoolInfo.social.facebook} aria-label="Facebook" className="grid h-11 w-11 place-items-center border border-white/25 text-white transition-colors hover:border-gold-300 hover:bg-gold-400 hover:text-navy-950">
            <SiFacebook className="h-4 w-4" />
          </a>
          <a href={schoolInfo.social.instagram} aria-label="Instagram" className="grid h-11 w-11 place-items-center border border-white/25 text-white transition-colors hover:border-gold-300 hover:bg-gold-400 hover:text-navy-950">
            <SiInstagram className="h-4 w-4" />
          </a>
          <a href={schoolInfo.social.youtube} aria-label="YouTube" className="grid h-11 w-11 place-items-center border border-white/25 text-white transition-colors hover:border-gold-300 hover:bg-gold-400 hover:text-navy-950">
            <SiYoutube className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
