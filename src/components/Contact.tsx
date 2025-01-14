import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [inquiryType, setInquiryType] = useState("info");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipientEmail = inquiryType === "info" ? "info@orosweden.com" : "booking@orosweden.com";
    
    // In a real application, this would be handled by a backend service
    console.log(`Sending email to: ${recipientEmail}`);
    console.log("Form data:", { name, email, message, inquiryType });
    
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setInquiryType("info");
  };

  return (
    <section id="contact" className="py-20 bg-metal-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">CONTACT</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label>Inquiry Type</Label>
            <RadioGroup
              defaultValue="info"
              value={inquiryType}
              onValueChange={setInquiryType}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="info" id="info" />
                <Label htmlFor="info">General Info</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="booking" id="booking" />
                <Label htmlFor="booking">Booking</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;