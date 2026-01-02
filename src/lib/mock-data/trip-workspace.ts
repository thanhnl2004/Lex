// Mock data for trip workspace

export const mockTrip = {
  id: 1,
  title: "Summer in Italy",
  destination: "Rome, Florence, Venice",
  startDate: "2024-07-15",
  endDate: "2024-07-28",
  budget: 4500,
};

type ActivityType = "transport" | "hotel" | "activity" | "food";

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  time: string;
}

interface DayItinerary {
  day: number;
  date: string;
  location: string;
  activities: Activity[];
}

export const mockItinerary: DayItinerary[] = [
  {
    day: 1,
    date: "Jul 15",
    location: "Rome",
    activities: [
      { id: 1, type: "transport", title: "Arrive at Rome Fiumicino Airport", time: "10:00 AM" },
      { id: 2, type: "hotel", title: "Check-in at Hotel Artemide", time: "1:00 PM" },
      { id: 3, type: "activity", title: "Walk around Piazza Navona", time: "3:00 PM" },
      { id: 4, type: "food", title: "Dinner at Roscioli", time: "7:00 PM" },
    ],
  },
  {
    day: 2,
    date: "Jul 16",
    location: "Rome",
    activities: [
      { id: 5, type: "food", title: "Breakfast at hotel", time: "8:00 AM" },
      { id: 6, type: "activity", title: "Vatican Museums & Sistine Chapel", time: "9:30 AM" },
      { id: 7, type: "food", title: "Lunch near Vatican", time: "1:00 PM" },
      { id: 8, type: "activity", title: "St. Peter's Basilica", time: "3:00 PM" },
      { id: 9, type: "food", title: "Dinner in Trastevere", time: "7:30 PM" },
    ],
  },
  {
    day: 3,
    date: "Jul 17",
    location: "Rome",
    activities: [
      { id: 10, type: "activity", title: "Colosseum & Roman Forum", time: "9:00 AM" },
      { id: 11, type: "food", title: "Lunch at Mercato Centrale", time: "1:00 PM" },
      { id: 12, type: "activity", title: "Trevi Fountain & Spanish Steps", time: "4:00 PM" },
      { id: 13, type: "food", title: "Aperitivo & Dinner", time: "7:00 PM" },
    ],
  },
  {
    day: 4,
    date: "Jul 18",
    location: "Rome → Florence",
    activities: [
      { id: 14, type: "hotel", title: "Check-out from Hotel Artemide", time: "9:00 AM" },
      { id: 15, type: "transport", title: "Train to Florence (1h 30m)", time: "10:30 AM" },
      { id: 16, type: "hotel", title: "Check-in at Hotel Brunelleschi", time: "1:00 PM" },
      { id: 17, type: "activity", title: "Explore Florence Duomo", time: "3:00 PM" },
    ],
  },
];

export const mockFlights = [
  {
    id: 1,
    airline: "United Airlines",
    flightNumber: "UA 123",
    type: "outbound" as const,
    departure: {
      time: "8:30 PM",
      airport: "New York (JFK)",
      date: "Jul 14",
    },
    arrival: {
      time: "10:45 AM",
      airport: "Rome (FCO)",
      date: "Jul 15",
    },
    duration: "8h 15m",
    stops: "Direct",
    price: 845,
  },
  {
    id: 2,
    airline: "United Airlines",
    flightNumber: "UA 456",
    type: "return" as const,
    departure: {
      time: "11:00 AM",
      airport: "Venice (VCE)",
      date: "Jul 28",
    },
    arrival: {
      time: "3:30 PM",
      airport: "New York (JFK)",
      date: "Jul 28",
    },
    duration: "9h 30m",
    stops: "Direct",
    price: 920,
  },
];

export const mockHotels = [
  {
    id: 1,
    name: "Hotel Artemide",
    location: "Rome",
    rating: 4.7,
    checkIn: "Jul 15",
    checkOut: "Jul 19",
    nights: 4,
    pricePerNight: 180,
    totalPrice: 720,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
  },
  {
    id: 2,
    name: "Hotel Brunelleschi",
    location: "Florence",
    rating: 4.8,
    checkIn: "Jul 19",
    checkOut: "Jul 23",
    nights: 4,
    pricePerNight: 210,
    totalPrice: 840,
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80",
  },
  {
    id: 3,
    name: "Ca' Sagredo Hotel",
    location: "Venice",
    rating: 4.9,
    checkIn: "Jul 23",
    checkOut: "Jul 28",
    nights: 5,
    pricePerNight: 250,
    totalPrice: 1250,
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80",
  },
];

export const mockBudget = {
  total: 6000,
  budgeted: 4500,
  categories: [
    { name: "Flights", amount: 1765, percentage: 29, icon: "plane" },
    { name: "Hotels", amount: 2810, percentage: 47, icon: "building" },
    { name: "Activities", amount: 450, percentage: 8, icon: "ticket" },
    { name: "Food & Dining", amount: 600, percentage: 10, icon: "utensils" },
    { name: "Local Transport", amount: 200, percentage: 3, icon: "car" },
    { name: "Miscellaneous", amount: 175, percentage: 3, icon: "ellipsis" },
  ],
};

export const mockChatMessages = [
  {
    id: 1,
    role: "assistant" as const,
    content: "Hi! I'm your AI travel assistant. I'm here to help you plan the perfect trip to Italy. What would you like to know or adjust about your itinerary?",
  },
];

export const quickActions = [
  { label: "Optimize itinerary", icon: "sparkles" },
  { label: "Make it cheaper", icon: "sparkles" },
  { label: "Add a day trip", icon: "sparkles" },
];

