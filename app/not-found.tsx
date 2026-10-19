import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream-50 py-20">
      <Container>
        <div className="max-w-md mx-auto text-center">
          <p className="text-9xl font-heading font-bold text-navy-100">404</p>
          <h1 className="mt-4 text-3xl font-bold text-navy-900 font-heading">
            Page Not Found
          </h1>
          <p className="mt-4 text-navy-600">
            Oops! The page you are looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/" variant="primary" size="lg">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <ArrowLeft className="h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
