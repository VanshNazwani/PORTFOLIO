import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto animate-fade-in-delay-1">
          No contact form. Just clean and simple ways to reach me quickly.
        </p>

        {/* UNIQUE CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delay-2">

          {/* Email Card */}
          <div className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition">
            <div className="p-3 rounded-full bg-primary/10 w-fit mb-3">
              <Mail className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground mb-3">
              Reach me anytime for opportunities or discussions.
            </p>
            <a
              href="mailto:nazwaniv@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              nazwaniv@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition">
            <div className="p-3 rounded-full bg-primary/10 w-fit mb-3">
              <Phone className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground mb-3">
              Available for quick calls or WhatsApp.
            </p>
            <a
              href="tel:+919675914307"
              className="text-primary font-medium hover:underline"
            >
              +91 96759 14307
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition">
            <div className="p-3 rounded-full bg-primary/10 w-fit mb-3">
              <MapPin className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">
              Greater Noida, Uttar Pradesh, India
            </p>
          </div>
        </div>

        {/* SOCIALS SECTION */}
        <div className="mt-16 text-center animate-fade-in-delay-3">
          <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex justify-center space-x-6 text-foreground/80">
            <a
              href="https://www.linkedin.com/in/vanshnazwani"
              target="_blank"
              className="hover:text-primary transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://x.com/VanshNazwa27968"
              target="_blank"
              className="hover:text-primary transition"
            >
              <Twitter size={28} />
            </a>
            <a
              href="https://www.instagram.com/ig_vansh2005"
              target="_blank"
              className="hover:text-primary transition"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
