import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    { type: "General Info", email: "info@orosweden.com" },
    { type: "Booking", email: "booking@orosweden.com" },
    { type: "Press", email: "press@orosweden.com" }
  ];

  return (
    <section id="contact" className="py-20 bg-metal-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">CONTACT</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((contact) => (
            <Card key={contact.type} className="p-6 bg-metal-light hover:bg-metal-gray transition-colors">
              <h3 className="text-xl font-bold mb-3">{contact.type}</h3>
              <a 
                href={`mailto:${contact.email}`}
                className="text-lg text-[#9b87f5] hover:text-[#8B5CF6] transition-colors break-words"
              >
                {contact.email}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;