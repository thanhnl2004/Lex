export interface Activity {
  id: number;
  type: "transport" | "hotel" | "activity" | "food";
  title: string;
  time: string;
  location?: string;
  notes?: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  location: string;
  activities: Activity[];
}

export interface FlightOption {
  id: number;
  airline: string;
  flightNumber: string;
  type: "outbound" | "return";
  departure: { time: string; airport: string; date: string };
  arrival: { time: string; airport: string; date: string };
  duration: string;
  stops: string;
  price: number;
}

export interface HotelOption {
  id: number;
  name: string;
  location: string;
  rating: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  pricePerNight: number;
  totalPrice: number;
  imageUrl?: string;
}

export interface BudgetBreakdown {
  total: number;
  budgeted: number;
  categories: Array<{
    name: string;
    amount: number;
    percentage: number;
    icon: string;
  }>;
}

// Plan Json Schema
export interface TripPlanData {
  itinerary: DayItinerary[];
  flights: FlightOption[];
  hotels: HotelOption[];
  budget: BudgetBreakdown;
}