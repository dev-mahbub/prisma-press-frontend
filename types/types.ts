export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: "month" | "year";
  priceId: string; // Stripe price ID
  features: string[];
  isPopular?: boolean;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  status: "DRAFT" | "PUBLISHED";
  tags: string[];
  views: number;
  isPremium: boolean;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
