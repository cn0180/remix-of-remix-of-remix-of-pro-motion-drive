import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { cars } from "@/data/cars";

const OffertePage = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const preselectedCar = searchParams.get("auto") || "";
  
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: preselectedCar,
    startDate: "",
    endDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Offerte Aangevraagd!",
      description: "We nemen binnen 24 uur contact met u op.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-16">
              <CheckCircle className="h-20 w-20 text-gold mx-auto mb-6 animate-scale-in" />
              <h1 className="font-display text-3xl font-bold text-foreground mb-4">
                Bedankt voor uw aanvraag!
              </h1>
              <p className="text-muted-foreground mb-8">
                We hebben uw offerte aanvraag ontvangen en nemen zo snel mogelijk contact met u op.
              </p>
              <Button variant="goldOutline" onClick={() => setSubmitted(false)}>
                Nieuwe Aanvraag
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-4 tracking-wider uppercase">Offerte Aanvragen</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vraag Een <span className="text-gradient">Offerte</span> Aan
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte op maat.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Uw volledige naam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="uw@email.nl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefoonnummer *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="+31 6 12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Gewenste Auto *
                  </label>
                  <select
                    name="car"
                    required
                    value={formData.car}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  >
                    <option value="">Selecteer een auto</option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.brand} {car.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Start Datum *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Eind Datum *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    required
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Opmerkingen
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="Eventuele extra wensen of vragen..."
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button type="submit" variant="gold" size="xl">
                  Verstuur Aanvraag
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default OffertePage;
