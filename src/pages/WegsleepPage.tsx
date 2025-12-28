import { Truck, Clock, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  {
    icon: Clock,
    title: "24/7 Beschikbaar",
    description: "Onze wegsleep dienst is 24 uur per dag, 7 dagen per week bereikbaar.",
  },
  {
    icon: Truck,
    title: "Moderne Bergingswagens",
    description: "Uitgerust met de nieuwste technologie voor veilig transport.",
  },
  {
    icon: Shield,
    title: "Verzekerd Transport",
    description: "Volledige dekking tijdens het transport van uw voertuig.",
  },
];

const WegsleepPage = () => {
  return (
    <Layout>
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium mb-4 tracking-wider uppercase">Wegsleep Dienst</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Pech Onderweg?<br />
                <span className="text-gradient">Wij Helpen U</span>
              </h1>
              <p className="text-muted-foreground mb-8 text-lg">
                Huurt u een auto bij ons en heeft u pech onderweg? Geen zorgen!
                Of het nu gaat om technische problemen of een ongeval, 
                wij staan 24/7 voor onze huurders klaar.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="gold" size="lg" asChild>
                <a href="tel:+31684646176">
                  <Phone className="h-5 w-5" />
                  Bel Direct: 06 84646176
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80"
                  alt="Professionele wegsleep dienst"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl border border-gold/30 p-6 shadow-gold max-w-xs animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Truck className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">24/7</p>
                    <p className="text-muted-foreground text-sm">Bereikbaar voor noodgevallen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Onze <span className="text-gradient">Diensten</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wij bieden verschillende wegsleep en transport diensten aan voor elk type situatie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-8 text-center hover:border-gold/50 transition-all">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Pechhulp</h3>
              <p className="text-muted-foreground">
                Autopech? Wij zijn snel ter plaatse om u te helpen, of het nu gaat om een lekke band of motorproblemen.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 text-center hover:border-gold/50 transition-all">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Ongevallen Berging</h3>
              <p className="text-muted-foreground">
                Na een ongeval zorgen wij voor veilige en professionele berging van uw voertuig.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 text-center hover:border-gold/50 transition-all">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Hulp Onderweg</h3>
              <p className="text-muted-foreground">
                Heeft u onze huurauto en pech onderweg? Wij zorgen voor transport naar een veilige locatie of garage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WegsleepPage;
