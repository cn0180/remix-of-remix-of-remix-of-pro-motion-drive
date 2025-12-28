import { Link } from "react-router-dom";
import { Calendar, Clock, Car } from "lucide-react";
import Layout from "@/components/Layout";
import { cars } from "@/data/cars";

const AutosPage = () => {
  return (
    <Layout>
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-4 tracking-wider uppercase">Onze Vloot</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium <span className="text-gradient">Auto's</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kies uit onze selectie van high performance sportwagens en luxe voertuigen.
              Elke auto wordt perfect onderhouden voor de ultieme rijervaring.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
        </div>
      </section>
    </Layout>
  );
};

export default AutosPage;
