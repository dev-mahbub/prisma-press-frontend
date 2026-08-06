export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: "month" | "year";
  priceId: string; // Stripe price ID
  features: string[];
  isPopular?: boolean;
};

export type IPost = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  status: IPostStatus;
  tags: string[];
  views: number;
  isPremium: boolean;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};

export type IPostStatus = "DRAFT" | "PUBLISHED";

export type PostFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};
