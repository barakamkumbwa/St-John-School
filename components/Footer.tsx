import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { Container } from "./Container";
import { schoolInfo } from "@/lib/site";

// Function mpya ili kuepusha error ya new Date() wakati wa build
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

// Tumebadilisha kuwa async
export async function Footer() {
  // Tunaita function yetu hapo juu
  const currentYear = await getCurrentYear();

  return (
    <footer className="bg-navy-900 text-cream-100 mt-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-cream-50 leading-tight">
                  St. John
                </p>
                <p className="text-xs font-medium text-gold-400 tracking-wider uppercase">
                  Secondary School
                </p>
              </div>
            </Link>
            <p className="text-sm text-cream-200 leading-relaxed">
              {schoolInfo.tagline}
            </p>
            <div className="flex gap-3 pt-2">
              <a href={schoolInfo.social.facebook} aria-label="Facebook" className="p-2 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <SiFacebook className="h-4 w-4" />
              </a>
              <a href={schoolInfo.social.instagram} aria-label="Instagram" className="p-2 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <SiInstagram className="h-4 w-4" />
              </a>
              <a href={schoolInfo.social.youtube} aria-label="YouTube" className="p-2 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <SiYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-base font-bold text-cream-50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {schoolInfo.navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-200 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-heading text-base font-bold text-cream-50 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li><Link href="/admissions/apply" className="text-sm text-cream-200 hover:text-gold-400 transition-colors">Admissions</Link></li>
              <li><Link href="/academics" className="text-sm text-cream-200 hover:text-gold-400 transition-colors">Academics</Link></li>
              <li><Link href="/staff" className="text-sm text-cream-200 hover:text-gold-400 transition-colors">Our Staff</Link></li>
              <li><Link href="/contact" className="text-sm text-cream-200 hover:text-gold-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/news" className="text-sm text-cream-200 hover:text-gold-400 transition-colors">Latest News</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-base font-bold text-cream-50 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-cream-200">
                <MapPin className="h-4 w-4 mt-0.5 text-gold-400 shrink-0" />
                <span>{schoolInfo.address.poBox}, {schoolInfo.address.city}, {schoolInfo.address.country}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-200">
                <Phone className="h-4 w-4 mt-0.5 text-gold-400 shrink-0" />
                <a href={`tel:${schoolInfo.contact.mobile}`} className="hover:text-gold-400 transition-colors">
                  {schoolInfo.contact.mobile}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-200">
                <Mail className="h-4 w-4 mt-0.5 text-gold-400 shrink-0" />
                <a href={`mailto:${schoolInfo.contact.email}`} className="hover:text-gold-400 transition-colors">
                  {schoolInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300">
            © {currentYear} {schoolInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream-300">
            {schoolInfo.motto} · Since {schoolInfo.foundedYear}
          </p>
        </div>
      </Container>
    </footer>
  );
}
