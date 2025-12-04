import { useState } from "react";
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const upcomingEvents = [
  {
    id: 1,
    title: "Coming Soon",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    category: "Upcoming",
    description: "New events will be announced soon.",
    spots: "TBA",
    image: "https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 2,
    title: "Coming Soon",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    category: "Upcoming",
    description: "New events will be announced soon.",
    spots: "TBA",
    image: "https://images.unsplash.com/photo-1759477274116-e3cb02d2b9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 3,
    title: "Coming Soon",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    category: "Upcoming",
    description: "New events will be announced soon.",
    spots: "TBA",
    image: "https://images.unsplash.com/photo-1759477274116-e3cb02d2b9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 4,
    title: "Coming Soon",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    category: "Upcoming",
    description: "New events will be announced soon.",
    spots: "TBA",
    image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

const pastEvents = [
  {
    id: 5,
    title: "Coming Soon",
    date: "TBA",
    location: "TBA",
    category: "Past Event",
    description: "Past event information will be added soon.",
  },
  {
    id: 6,
    title: "Coming Soon",
    date: "TBA",
    location: "TBA",
    category: "Past Event",
    description: "Past event information will be added soon.",
  },
  {
    id: 7,
    title: "Coming Soon",
    date: "TBA",
    location: "TBA",
    category: "Past Event",
    description: "Past event information will be added soon.",
  },
];

const monthEvents = [
  { date: 8, events: 0, title: "Coming Soon" },
  { date: 18, events: 0, title: "Coming Soon" },
  { date: 25, events: 0, title: "Coming Soon" },
];


export default function EventsPage() {
  const [currentMonth, setCurrentMonth] = useState("October 2025");

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Site Visit":
        return "bg-blue-100 text-blue-800";
      case "Workshop":
        return "bg-green-100 text-green-800";
      case "Conference":
        return "bg-purple-100 text-purple-800";
      case "Networking":
        return "bg-orange-100 text-orange-800";
      case "Competition":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Events & Calendar</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Discover our upcoming events, workshops, and activities designed to enhance your civil engineering journey
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className={`absolute top-4 right-4 ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
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
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{event.spots}</span>
                      </div>
                      <Button className="w-full bg-[#FFB700] hover:bg-[#E5A600] text-white mt-4">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Calendar View */}
            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="icon">
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <CardTitle>{currentMonth}</CardTitle>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
                      const hasEvent = monthEvents.find((e) => e.date === date);
                      const isToday = date === 8;
                      return (
                        <div
                          key={date}
                          className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-colors ${
                            isToday
                              ? "bg-[#FFB700] text-white"
                              : hasEvent
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {date}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3>Events This Month</h3>
                    <ul className="space-y-2">
                      {upcomingEvents.slice(0, 3).map((event) => (
                        <li key={event.id} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#FFB700] rounded-full mt-2" />
                          <div>
                            <p>{event.date} - {event.title}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past" className="space-y-4">
              {pastEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle>{event.title}</CardTitle>
                          <Badge className={getCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                        </div>
                        <CardDescription>{event.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
