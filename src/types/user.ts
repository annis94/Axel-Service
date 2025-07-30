export type UserRole = 'client' | 'provider' | 'admin';

export interface Address {
  id: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface ProviderInfo {
  skills: string[];
  interventionZones: string[];
  availability: {
    [key: string]: {
      start: string;
      end: string;
    };
  };
  documents: {
    id?: File;
    insurance?: File;
    certification?: File;
    rib?: File;
  };
  minDuration: number;
  preferredServices: string[];
  status: 'pending' | 'approved' | 'rejected';
  hourlyRate: number;
  experience: number;
  description: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone: string;
  createdAt: string;
  addresses: Address[];
  providerInfo?: ProviderInfo;
  avatar?: string;
}

export interface Provider extends User {
  isVerified: boolean;
  legalDocuments?: string[];
  rating?: number;
  availability?: string[]; // ISO date strings
  specialties?: string[];
}

export interface Client extends User {
  paymentMethods?: PaymentMethod[];
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'bank_account';
  last4: string;
  expiryDate?: string;
  isDefault: boolean;
}

export interface Admin extends User {
  permissions: string[];
}