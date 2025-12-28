import mercedesG63Image from "@/assets/mercedes-g63.jpg";
import vwGolfGtiImage from "@/assets/vw-golf-gti.jpg";
import cupraFormentorImage from "@/assets/cupra-formentor.jpg";

export interface CarData {
  id: string;
  name: string;
  brand: string;
  pricePerDay: string;
  image: string;
  description: string;
  voorwaarden: string[];
  reservering: string[];
  service: string[];
  schade: string[];
  nietToegestaan: string[];
  available: boolean;
  availabilityStatus?: string;
}

export const cars: CarData[] = [
  {
    id: "mercedes-g63",
    name: "Mercedes G63",
    brand: "Mercedes",
    pricePerDay: "€650",
    image: mercedesG63Image,
    description: "Onze Mercedes G63 is een prachtig exemplaar dat wij met trots aanbieden voor verhuur. Wij zijn gespecialiseerd in het verhuren van luxe auto's voor onder andere bruiloften en andere bijzondere gelegenheden. Met deze indrukwekkende auto maakt u gegarandeerd een onvergetelijke indruk.",
    voorwaarden: [
      "Minimale leeftijd bestuurder: 18 jaar",
      "Geldig rijbewijs verplicht",
      "Borg: € 3.000 bij overboeking of € 2.500 bij contante betaling"
    ],
    reservering: [
      "De borg dient uiterlijk 24 uur vóór aanvang van de huur te zijn voldaan om de reservering definitief vast te leggen",
      "Betaling kan via bankoverschrijving (€3.000 borg) of contant (€2.500 borg)",
      "Huurprijs: € 850 bij overboeking of € 650 contant, te voldoen bij inlevering van de auto",
      "Betaling van de huursom wordt bij inlevering van de auto voldaan (tenzij anders afgesproken)"
    ],
    service: [
      "Bij pech onderweg staat onze 24/7 service voor u klaar en komen wij naar uw locatie om mee te kijken"
    ],
    schade: [
      "Bij schade is de bestuurder verplicht dit binnen 3 uur bij ons te melden",
      "Alle boetes en overtredingen tijdens de huurperiode zijn volledig voor rekening van de bestuurder"
    ],
    nietToegestaan: [
      "De auto door te verhuren",
      "Te roken in de auto",
      "Gevaarlijk of roekeloos te rijden",
      "De auto te gebruiken in strijd met de wet of deze voorwaarden"
    ],
    available: true
  },
  {
    id: "vw-golf-gti-clubsport",
    name: "Volkswagen Golf GTI Clubsport",
    brand: "Volkswagen",
    pricePerDay: "€350",
    image: vwGolfGtiImage,
    description: "De Volkswagen Golf GTI Clubsport is de ultieme hot hatch voor echte rijliefhebbers. Met zijn sportieve uitstraling, krachtige motor en uitstekende wegligging is deze auto perfect voor speciale gelegenheden waar u indruk wilt maken.",
    voorwaarden: [
      "Minimale leeftijd bestuurder: 21 jaar",
      "Geldig rijbewijs verplicht",
      "Borg: € 2.000 bij overboeking of € 1.500 bij contante betaling"
    ],
    reservering: [
      "De borg dient uiterlijk 24 uur vóór aanvang van de huur te zijn voldaan om de reservering definitief vast te leggen",
      "Betaling kan via bankoverschrijving (€2.000 borg) of contant (€1.500 borg)",
      "Huurprijs: € 450 bij overboeking of € 350 contant, te voldoen bij inlevering van de auto",
      "Betaling van de huursom wordt bij inlevering van de auto voldaan (tenzij anders afgesproken)"
    ],
    service: [
      "Bij pech onderweg staat onze 24/7 service voor u klaar en komen wij naar uw locatie om mee te kijken"
    ],
    schade: [
      "Bij schade is de bestuurder verplicht dit binnen 3 uur bij ons te melden",
      "Alle boetes en overtredingen tijdens de huurperiode zijn volledig voor rekening van de bestuurder"
    ],
    nietToegestaan: [
      "De auto door te verhuren",
      "Te roken in de auto",
      "Gevaarlijk of roekeloos te rijden",
      "De auto te gebruiken in strijd met de wet of deze voorwaarden"
    ],
    available: true
  },
  {
    id: "cupra-formentor",
    name: "Cupra Formentor",
    brand: "Cupra",
    pricePerDay: "€400",
    image: cupraFormentorImage,
    description: "De Cupra Formentor combineert sportieve prestaties met SUV-gemak. Deze stijlvolle crossover biedt een unieke rijervaring met zijn krachtige motor en dynamische design.",
    voorwaarden: [
      "Minimale leeftijd bestuurder: 21 jaar",
      "Geldig rijbewijs verplicht",
      "Borg: € 2.500 bij overboeking of € 2.000 bij contante betaling"
    ],
    reservering: [
      "De borg dient uiterlijk 24 uur vóór aanvang van de huur te zijn voldaan om de reservering definitief vast te leggen",
      "Betaling kan via bankoverschrijving (€2.500 borg) of contant (€2.000 borg)",
      "Huurprijs: € 500 bij overboeking of € 400 contant, te voldoen bij inlevering van de auto",
      "Betaling van de huursom wordt bij inlevering van de auto voldaan (tenzij anders afgesproken)"
    ],
    service: [
      "Bij pech onderweg staat onze 24/7 service voor u klaar en komen wij naar uw locatie om mee te kijken"
    ],
    schade: [
      "Bij schade is de bestuurder verplicht dit binnen 3 uur bij ons te melden",
      "Alle boetes en overtredingen tijdens de huurperiode zijn volledig voor rekening van de bestuurder"
    ],
    nietToegestaan: [
      "De auto door te verhuren",
      "Te roken in de auto",
      "Gevaarlijk of roekeloos te rijden",
      "De auto te gebruiken in strijd met de wet of deze voorwaarden"
    ],
    available: false,
    availabilityStatus: "Op uitlevering"
  },
  {
    id: "audi-rs3",
    name: "Audi RS3",
    brand: "Audi",
    pricePerDay: "€500",
    image: "",
    description: "De Audi RS3 is een compacte sportwagen met indrukwekkende prestaties. Met zijn krachtige vijfcilinder motor en quattro vierwielaandrijving biedt deze auto een ongeëvenaarde rijervaring.",
    voorwaarden: [
      "Minimale leeftijd bestuurder: 23 jaar",
      "Geldig rijbewijs verplicht",
      "Borg: € 3.000 bij overboeking of € 2.500 bij contante betaling"
    ],
    reservering: [
      "De borg dient uiterlijk 24 uur vóór aanvang van de huur te zijn voldaan om de reservering definitief vast te leggen",
      "Betaling kan via bankoverschrijving (€3.000 borg) of contant (€2.500 borg)",
      "Huurprijs: € 600 bij overboeking of € 500 contant, te voldoen bij inlevering van de auto",
      "Betaling van de huursom wordt bij inlevering van de auto voldaan (tenzij anders afgesproken)"
    ],
    service: [
      "Bij pech onderweg staat onze 24/7 service voor u klaar en komen wij naar uw locatie om mee te kijken"
    ],
    schade: [
      "Bij schade is de bestuurder verplicht dit binnen 3 uur bij ons te melden",
      "Alle boetes en overtredingen tijdens de huurperiode zijn volledig voor rekening van de bestuurder"
    ],
    nietToegestaan: [
      "De auto door te verhuren",
      "Te roken in de auto",
      "Gevaarlijk of roekeloos te rijden",
      "De auto te gebruiken in strijd met de wet of deze voorwaarden"
    ],
    available: false,
    availabilityStatus: "Binnenkort beschikbaar"
  }
];

export const getCarById = (id: string): CarData | undefined => {
  return cars.find(car => car.id === id);
};
