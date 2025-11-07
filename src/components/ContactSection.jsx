import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email to site owner
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vansh',
          to_email: 'nazwaniv@gmail.com',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      // Send thank you email to sender
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_THANK_YOU_TEMPLATE_ID', // Replace with your thank you email template ID
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. You'll receive a confirmation email shortly.",
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact directly via email.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
<div className="space-y-6 text-left">
  {/* The outer div is now a standard block container, allowing default left alignment 
      and vertical stacking provided by space-y-6. */}
  
  {/* 1. Email Item */}
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Mail className="h-6 w-6 text-primary" />{" "}
    </div>
    <div>
      <h4 className="font-medium">Email:</h4>
      <a
        href="mailto:nazwaniv@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        nazwaniv@gmail.com
      </a>
    </div>
  </div>

  {/* 2. Phone Item */}
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Phone className="h-6 w-6 text-primary" />{" "}
    </div>
    <div>
      <h4 className="font-medium">Phone:</h4>
      <a
        href="tel:+919675914307"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        +91 9675914307
      </a>
    </div>
  </div>

  {/* 3. Location Item */}
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <MapPin className="h-6 w-6 text-primary" />{" "}
    </div>
    <div>
      <h4 className="font-medium">Location:</h4>
      <a className="text-muted-foreground hover:text-primary transition-colors">
        Greater Noida
      </a>
    </div>
  </div>
</div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/vanshnazwani?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHSJcVKYYS5GFAUFdj5xd%2FQ%3D%3D" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://x.com/VanshNazwa27968" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/ig_vansh2005/" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                 
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Vansh Nazwani..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                 
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="nazwaniv@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
