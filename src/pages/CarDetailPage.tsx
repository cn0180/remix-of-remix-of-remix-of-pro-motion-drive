import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, AlertTriangle, Phone, FileText, Ban, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getCarById } from "@/data/cars";

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const car = getCarById(id || "");

  if (!car) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Auto niet gevonden</h1>
          <p className="text-muted-foreground mb-8">De auto die u zoekt bestaat niet.</p>
          <Button variant="gold" onClick={() => navigate("/autos")}>
            Terug naar auto's
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link
            to="/autos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar overzicht
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={car.image}
                alt={`${car.brand} ${car.name}`}
                className="w-full h-full object-cover aspect-video lg:aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Details */}
            <div>
              <p className="text-gold font-medium mb-2 tracking-wider uppercase">{car.brand}</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {car.name} te huur
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                {car.description}
              </p>

              {/* Price */}
              <div className="bg-card rounded-xl border border-border p-6 mb-8">
                <p className="text-muted-foreground text-sm mb-1">Huurprijs vanaf</p>
                <p className="text-gold font-display text-4xl font-bold">
                  {car.pricePerDay}
                  <span className="text-lg font-normal text-muted-foreground">/dag</span>
                </p>
              </div>

              {/* CTA */}
              <Button variant="gold" size="xl" className="w-full" asChild>
                <Link to={`/offerte?auto=${car.id}`}>
                  Vraag Offerte Aan
                </Link>
              </Button>
            </div>
          </div>

          {/* Information sections */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Voorwaarden */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-gold" />
                <h2 className="font-display text-2xl font-bold text-foreground">Voorwaarden</h2>
              </div>
              <div className="space-y-3">
                {car.voorwaarden.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reservering & betaling */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-6 w-6 text-gold" />
                <h2 className="font-display text-2xl font-bold text-foreground">Reservering & betaling</h2>
              </div>
              <div className="space-y-3">
                {car.reservering.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="h-6 w-6 text-gold" />
                <h2 className="font-display text-2xl font-bold text-foreground">Service</h2>
              </div>
              <div className="space-y-3">
                {car.service.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schade & verantwoordelijkheid */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-gold" />
                <h2 className="font-display text-2xl font-bold text-foreground">Schade & verantwoordelijkheid</h2>
              </div>
              <div className="space-y-3">
                {car.schade.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Niet toegestaan - Full width */}
          <div className="mt-8">
            <div className="bg-card rounded-2xl border border-destructive/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Ban className="h-6 w-6 text-destructive" />
                <h2 className="font-display text-2xl font-bold text-foreground">Niet toegestaan</h2>
              </div>
              <p className="text-muted-foreground mb-4">Het is nadrukkelijk niet toegestaan om:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {car.nietToegestaan.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-destructive" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 text-sm italic">
                Overtreding kan leiden tot directe beëindiging van de huur en (gedeeltelijk) verlies van de borg.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Button variant="gold" size="xl" asChild>
              <Link to={`/offerte?auto=${car.id}`}>
                Vraag Offerte Aan
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarDetailPage;
