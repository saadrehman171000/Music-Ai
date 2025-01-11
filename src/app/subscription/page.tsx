"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Check, X, Music, Headphones, Mic, Wand2, Zap, HelpCircle } from 'lucide-react'
import { useState } from "react"

const plans = [
  {
    name: "Basic",
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    features: [
      "5 AI-generated tracks per month",
      "Basic stem separation",
      "Standard audio quality",
      "Email support"
    ],
    notIncluded: [
      "Advanced AI tools",
      "Unlimited cloud storage",
      "Priority support"
    ]
  },
  {
    name: "Pro",
    monthlyPrice: 19.99,
    yearlyPrice: 199.99,
    features: [
      "20 AI-generated tracks per month",
      "Advanced stem separation",
      "High-quality audio output",
      "Access to voice synthesis",
      "Priority email support"
    ],
    notIncluded: [
      "Unlimited AI-generated tracks",
      "Custom AI model training"
    ]
  },
  {
    name: "Ultimate",
    monthlyPrice: 39.99,
    yearlyPrice: 399.99,
    features: [
      "Unlimited AI-generated tracks",
      "Professional stem separation",
      "Studio-quality audio output",
      "Advanced voice synthesis",
      "Custom AI model training",
      "Unlimited cloud storage",
      "24/7 priority support"
    ],
    notIncluded: []
  }
]

export default function SubscriptionPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="curved-gradient min-h-screen">
      <div className="pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-[#FFD580]">
              Choose Your Plan
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock the full potential of AI-powered music creation with our flexible subscription plans.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={`text-lg ${!isYearly ? 'text-[#B8860B] font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="border-2 border-[#B8860B] rounded-full p-0.5 h-7 w-12"
            >
              <div className="h-5 w-5 bg-white rounded-full shadow-md" />
            </Switch>
            <span className={`text-lg ${isYearly ? 'text-[#B8860B] font-semibold' : 'text-gray-500'}`}>
              Yearly (Save 20%)
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`form-container overflow-hidden ${plan.name === 'Pro' ? 'border-nagham-gold' : ''}`}>
                <CardHeader className="text-center pb-0">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <Button className="w-full mb-6 bg-gradient-to-r from-amber-500 to-nagham-gold hover:from-amber-600 hover:to-amber-700">
                    Choose Plan
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-500">
                        <X className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-nagham-gold">
              Compare Features
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left">Feature</th>
                    {plans.map((plan, index) => (
                      <th key={index} className="p-4 text-center">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "AI-generated tracks", icon: Music },
                    { name: "Stem separation", icon: Headphones },
                    { name: "Voice synthesis", icon: Mic },
                    { name: "Custom AI training", icon: Wand2 },
                    { name: "Cloud storage", icon: Zap },
                  ].map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 flex items-center">
                        <feature.icon className="w-5 h-5 mr-2 text-nagham-gold" />
                        {feature.name}
                      </td>
                      {plans.map((plan, planIndex) => (
                        <td key={planIndex} className="p-4 text-center">
                          {plan.features.some(f => f.toLowerCase().includes(feature.name.toLowerCase())) ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-nagham-gold">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Can I change my plan later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "We offer a 7-day free trial for new users to test our Basic plan features. No credit card required."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and select cryptocurrencies for subscription payments."
                },
                {
                  question: "Can I cancel my subscription at any time?",
                  answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
                }
              ].map((faq, index) => (
                <Card key={index} className="form-container">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2 text-nagham-gold" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-32 mb-20 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-nagham-gold">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you find the perfect plan for your needs. Don't hesitate to reach out!
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

