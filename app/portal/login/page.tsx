import Image from "next/image";
import { LockKeyhole } from "lucide-react";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Portal Login",
  description: "School system portal access for St. John Secondary School students and staff.",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  return (
    <section className="bg-cream-100 py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="section-eyebrow">School system</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">Portal Login</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-navy-600 sm:text-base">Secure access for the St. John school community. The portal will be available when the school system is ready.</p>
        </div>

        <div className="grid items-stretch border border-navy-200 bg-white lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative isolate hidden min-h-[30rem] overflow-hidden bg-navy-950 text-white lg:block">
            <Image src="/images/gallery-1.jpg" alt="St. John students learning together" fill sizes="(max-width: 1280px) 40vw, 32rem" className="-z-20 object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-navy-950/10" />
            <div className="absolute inset-x-0 bottom-0 p-8 xl:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">St. John Secondary School</p>
              <h2 className="mt-3 max-w-sm font-heading text-3xl font-semibold leading-tight">One place for our school community.</h2>
            </div>
          </div>

          <div className="flex min-h-[30rem] flex-col justify-center border-0 bg-white p-7 sm:p-10 lg:border-l lg:border-navy-200 lg:p-14">
            <div className="flex h-12 w-12 items-center justify-center border border-gold-400 bg-cream-50 text-navy-800">
              <LockKeyhole aria-hidden="true" className="h-5 w-5" />
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-gold-700">Portal access</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-navy-950">Login will be available soon.</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-navy-600">We&apos;re preparing the school system for students and staff. Sign-in will be enabled once setup is complete.</p>
            <form className="mt-7 grid max-w-lg gap-4" aria-label="School portal sign in">
              <label className="grid gap-2 text-sm font-medium text-navy-700">
                Student or staff ID
                <input disabled placeholder="Available when the portal opens" className="h-12 border border-navy-200 bg-navy-50 px-4 text-sm text-navy-500 outline-none disabled:cursor-not-allowed" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-navy-700">
                Password
                <input disabled type="password" placeholder="Not available yet" className="h-12 border border-navy-200 bg-navy-50 px-4 text-sm text-navy-500 outline-none disabled:cursor-not-allowed" />
              </label>
              <button type="button" disabled className="h-12 cursor-not-allowed bg-navy-300 px-5 text-sm font-semibold text-white">Portal login coming soon</button>
            </form>
            <div className="mt-8 border-l-2 border-gold-400 bg-cream-50 px-4 py-3 text-sm leading-6 text-navy-700">
              Please check back later or contact the school office if you need assistance.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
