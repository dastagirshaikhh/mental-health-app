"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, Clock, MapPin, AlertCircle } from "lucide-react";

const emergencyContacts = [
  {
    name: "National Crisis Hotline",
    number: "1-800-273-8255",
    available: "24/7",
    icon: Phone
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    available: "24/7",
    icon: MessageCircle
  },
  {
    name: "Women's Crisis Support",
    number: "1-800-799-7233",
    available: "24/7",
    icon: Phone
  }
];

const localResources = [
  {
    name: "Local Women's Center",
    address: "123 Support Street, City",
    contact: "support@center.com",
    hours: "Mon-Fri: 9AM-5PM"
  },
  {
    name: "Community Mental Health Clinic",
    address: "456 Healing Ave, City",
    contact: "clinic@health.com",
    hours: "Mon-Sat: 8AM-8PM"
  }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-purple-900 mb-4">Emergency Support</h1>
          <p className="text-gray-600">
            If you're experiencing a mental health emergency, please don't hesitate to reach out.
            Help is available 24/7.
          </p>
        </div>

        <Card className="mb-8 border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center gap-3 text-red-600 mb-4">
              <AlertCircle className="w-6 h-6" />
              <h2 className="text-xl font-semibold">In Immediate Danger?</h2>
            </div>
            <p className="text-gray-700 mb-4">
              If you or someone else is in immediate danger, please call emergency services immediately.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Call 911
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {emergencyContacts.map((contact) => (
            <Card key={contact.name} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <contact.icon className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-purple-900">{contact.name}</h3>
              </div>
              <p className="text-gray-600 mb-2">{contact.number}</p>
              <p className="text-sm text-purple-600">Available: {contact.available}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-purple-900 mb-6">Local Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {localResources.map((resource) => (
            <Card key={resource.name} className="p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">{resource.name}</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{resource.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{resource.contact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{resource.hours}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}