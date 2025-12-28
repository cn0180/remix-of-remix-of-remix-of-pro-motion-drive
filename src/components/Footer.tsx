import { Link } from "react-router-dom";
import { Car, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <Link to="/" className="flex items-center justify-center gap-2 mb-4">
          <Car className="h-6 w-6 text-gold" />
          <span className="font-display text-xl font-bold text-foreground">
            Pro<span className="text-gradient">Motion</span> Cars
          </span>
        </Link>
        <p className="text-muted-foreground text-sm">
          © 2023 Pro Motion Cars. Alle rechten voorbehouden.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          <MapPin className="inline h-4 w-4 mr-1" />
          Wiersedreef 22
        </p>
      </div>
    </footer>
  );
};

export default Footer;
