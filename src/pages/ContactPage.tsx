import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Send } from "lucide-react";

// TikTok icon component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "École Hassania des Travaux Publics\nKm 7, Route d'El Jadida\nCasablanca, Morocco"
    },
    {
      icon: Mail,
      title: "Email",
      details: "btp.ehtp.20@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+212 5 22 23 07 17\n+212 6 XX XX XX XX"
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/BtpEhtp", handle: "@BtpEhtp" },
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/btpehtp?igsh=MXM4NXUyOG4xNGFldw==", handle: "@btpehtp" },
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/company/btp-ehtp/", handle: "btp-ehtp" },
    { icon: TikTokIcon, name: "TikTok", url: "https://www.tiktok.com/@btp.ehtp.club", handle: "@btp.ehtp.club" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with us. We'd love to hear from you whether you're a student, industry partner, or just interested in learning more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                    />
                  </div>

                  <Button className="w-full bg-[#FFB700] hover:bg-[#E5A600]">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <Card key={idx}>
                      <CardContent className="flex items-start gap-4 pt-6">
                        <div className="w-12 h-12 bg-[#FFB700] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-2">{info.title}</h3>
                          <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl mb-6">Follow Us</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-[#FFB700] rounded-full flex items-center justify-center">
                            {typeof Icon === 'function' && Icon.name === 'TikTokIcon' ? <Icon /> : <Icon className="w-5 h-5 text-white" />}
                          </div>
                          <div>
                            <p className="font-medium">{social.name}</p>
                            <p className="text-sm text-gray-600">{social.handle}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <h2 className="text-2xl mb-6">Find Us</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Map Integration</p>
              <p className="text-sm">Google Maps or interactive map would go here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
