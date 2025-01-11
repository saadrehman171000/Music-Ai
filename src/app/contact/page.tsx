import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section with proper spacing */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <span className="text-amber-700 text-xl font-semibold">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about Nagham AI? We're here to help you create amazing music.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-nagham-gold" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Music Street, Dubai, UAE</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 mx-auto mb-4 text-nagham-gold" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+971 50 123 4567</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 mx-auto mb-4 text-nagham-gold" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">contact@naghamai.com</p>
            </Card>
          </div>

          <Card className="form-container max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input type="text" id="name" name="name" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" id="email" name="email" required className="w-full" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input type="text" id="subject" name="subject" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="w-full resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-nagham-gold hover:from-amber-600 hover:to-amber-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}