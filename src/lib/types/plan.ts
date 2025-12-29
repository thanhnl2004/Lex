// src/lib/types/plan.ts
export interface TripPlanData {
  itinerary: DayPlan[];
  flights: FlightOption[];
  hotels: HotelOption[];
  budget: BudgetBreakdown;
}

export interface DayPlan {
  day: number;
  date: string;
  location: string;
  activities: Activity[];
}

export interface Activity {
  time: string;
  title: string;
  type: "flight" | "hotel" | "food" | "activity" | "transport";
}

export interface FlightOption {
  airline: string;
  flightNumber: string;
  type: "Outbound" | "Return";
  departureTime: string;
  departureAirport: string;
  departureDate: string;
  arrivalTime: string;
  arrivalAirport: string;
  arrivalDate: string;
  duration: string;
  stops: string;
  price: number;
}

export interface HotelOption {
  name: string;
  location: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  pricePerNight: number;
  totalPrice: number;
  rating: number;
  imageUrl?: string;
}

export interface BudgetBreakdown {
  total: number;
  budgeted: number;
  items: BudgetItem[];
}

export interface BudgetItem {
  category: string;
  amount: number;
  percentage: number;
}