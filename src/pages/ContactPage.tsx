import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Wiersedreef 22",
    link: "https://maps.google.com/?q=Wiersedreef+22",
  },
  {
    icon: Phone,
    title: "Telefoon",
    content: "06 84646176",
    link: "tel:+31684646176",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@promotioncars.nl",
    link: "mailto:info@promotioncars.nl",
  },
  {
    icon: Clock,
    title: "Openingstijden",
    content: "Ma t/m Vr: 9:00 tot 18:00 | Za: 10:00 tot 16:00",
    link: null,
  },
];

const ContactPage = () => {
  return (
    <Layout>
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-4 tracking-wider uppercase">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Neem <span className="text-gradient">Contact</span> Op
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Heeft u vragen over onze diensten? Neem gerust contact met ons op.
              We helpen u graag verder!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl border border-border p-6 text-center hover:border-gold/50 transition-all duration-300 hover:shadow-gold"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-gold transition-colors"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.8!2d5.0833!3d52.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f5c3b5a5555%3A0x0!2sWiersedreef%2022%2C%20Nieuwegein!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pro Motion Cars locatie - Wiersedreef 22, Nieuwegein"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
