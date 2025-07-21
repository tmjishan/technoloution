import ContactSection from "@/components/contactForm";
import ContactInfoSection from "@/components/ContactInfoSection";
import RevealText from "@/components/RevealText";

export default function ContactPage() {
  return (
    <div>
      <RevealText text="CONtent" />
      <ContactInfoSection />
      <ContactSection />
    </div>
  );
}
