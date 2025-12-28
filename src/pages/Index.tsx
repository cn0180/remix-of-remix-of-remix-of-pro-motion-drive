import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car.jpg";
import Layout from "@/components/Layout";
import { cars } from "@/data/cars";

const availableCars = cars.filter(car => car.available);

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxe sportwagen bij Pro Motion Cars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-gold font-medium mb-4 tracking-wider uppercase">Premium Autoverhuur</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Luxe Rijden,<br />
              <span className="text-gradient">Betaalbare Prijzen</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Ontdek onze exclusieve collectie auto's voor bijzondere gelegenheden. Maak een onvergetelijke indruk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/autos">
                  Bekijk Auto's
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/offerte">
                  Vraag Offerte Aan
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-4 tracking-wider uppercase">Onze Vloot</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Populaire <span className="text-gradient">Auto's</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bekijk een selectie van onze meest gevraagde voertuigen.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {cars.map((car, index) => (
              <Link
                key={car.id}
                to={car.available ? `/auto/${car.id}` : "#"}
                className={`opacity-0 animate-fade-in block ${!car.available ? "pointer-events-none" : ""}`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className={`group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 h-full ${car.available ? "hover:border-gold/50 hover:shadow-gold" : "opacity-70"}`}>
                  <div className="aspect-video overflow-hidden relative">
                    {car.image ? (
                      <img
                        src={car.image}
                        alt={`${car.brand} ${car.name}`}
                        className={`w-full h-full object-cover transition-transform duration-700 ${car.available ? "group-hover:scale-110" : ""}`}
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Car className="h-16 w-16 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    {!car.available && (
                      <div className="absolute top-3 right-3 bg-muted/90 text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {car.availabilityStatus || "Niet beschikbaar"}
                      </div>
                    )}
                  </div>

                  <div className="p-4 md:p-6">
                    <p className="text-gold text-sm font-medium mb-1">{car.brand}</p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">{car.name}</h3>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-6">
                      {car.available ? (
                        <>
                          <Calendar className="h-4 w-4 text-gold flex-shrink-0" />
                          <span className="text-xs md:text-sm">Beschikbaar</span>
                        </>
                      ) : (
                        <>
                          <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs md:text-sm">{car.availabilityStatus || "Niet beschikbaar"}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-muted-foreground text-xs">Vanaf</p>
                        <p className="text-gold font-display text-lg md:text-xl font-bold">{car.pricePerDay}<span className="text-sm font-normal">/dag</span></p>
                      </div>
                      <span className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${car.available ? "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        {car.available ? "Bekijk" : "Binnenkort"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/autos">
                Bekijk Alle Auto's
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Klaar om te <span className="text-gradient">rijden</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Vraag vandaag nog een offerte aan en ervaar luxe rijden voor een betaalbare prijs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/offerte">
                Vraag Offerte Aan
              </Link>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/contact">
                Neem Contact Op
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
