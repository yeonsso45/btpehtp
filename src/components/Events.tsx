import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Events() {
  const events = [
    {
      id: 1,
      title: "Upcoming Visit ",
      date: "-",
      time: "-",
      location: "-",
      type: "Site Visit",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Upcoming workshop",
      date: "-",
      time: "-",
      location: "-",
      type: "Workshop",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Upcoming conference ",
      date: "-",
      time: "-",
      location: "-",
      type: "Conference",
      status: "Coming soon",
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-[#FFB700] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us at our upcoming events to learn, network, and gain practical experience in civil engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-[#FFB700] text-black hover:bg-[#E5A600]">
                    {event.type}
                  </Badge>
                  <Badge variant="outline">{event.status}</Badge>
                </div>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
