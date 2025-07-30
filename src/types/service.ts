export interface Service {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateServiceData {
  title: string;
  description: string;
  category: string;
  price: string;
  image?: string;
}

export interface UpdateServiceData {
  title?: string;
  description?: string;
  category?: string;
  price?: string;
  image?: string;
}

export type ServiceCategory = 
  | 'home_cleaning' 
  | 'office_cleaning' 
  | 'deep_cleaning' 
  | 'window_cleaning' 
  | 'special_cleaning';

export interface Booking {
  id: string;
  clientId: string;
  serviceId: string;
  providerId?: string;
  addressId: string;
  dateTime: string; // ISO date string
  duration: number; // in minutes
  status: BookingStatus;
  totalPrice: number;
  createdAt: string;
  notes?: string;
  rating?: number;
  review?: string;
}

export type BookingStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'in_progress' 
  | 'completed' 
  | 'cancelled';

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  method: string;
  transactionId?: string;
  createdAt: string;
}

export type PaymentStatus = 
  | 'pending' 
  | 'completed' 
  | 'failed' 
  | 'refunded';

export interface Invoice {
  id: string;
  paymentId: string;
  bookingId: string;
  clientId: string;
  number: string;
  issuedAt: string;
  dueAt: string;
  items: InvoiceItem[];
  totalAmount: number;
  status: InvoiceStatus;
  pdfUrl?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export type InvoiceStatus = 
  | 'draft' 
  | 'issued' 
  | 'paid' 
  | 'overdue' 
  | 'cancelled';