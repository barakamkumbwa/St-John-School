import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with St. John Secondary School. Find our address, phone, email, and send us a message.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream-100 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-9 max-w-2xl">
          <p className="section-eyebrow">Contact St. John</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">Let&apos;s start a conversation.</h1>
        </div>
        <div className="grid items-stretch border border-navy-200 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
