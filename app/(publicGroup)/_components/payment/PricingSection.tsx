import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import SubscribeButton from "./SubscribeButton";
import { PricingPlan } from "@/types/types";

const PricingSection = async () => {
  // Replace with a real fetch() call to your API once ready
  const statusResult = {
    success: true,
    data: {
      isSubscribed: true,
      currentPeriodEnd: "2026-07-28T10:00:00.000Z",
    },
  };

  const isActive = Boolean(
    statusResult?.success && statusResult?.data?.isSubscribed,
  );

  const plan: PricingPlan = {
    id: "premium",
    name: "Premium",
    description: "Unlock every premium story, ad-free",
    price: 12,
    currency: "USD",
    interval: "month",
    priceId: "price_premium_monthly",
    features: [
      "Access to all premium articles",
      "Ad-free experience",
      "Early access to breaking news",
      "Exclusive newsletter",
    ],
    isPopular: true,
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      {isActive && (
        <div className="flex items-center flex-col gap-3 rounded-lg border border-primary-foreground bg-neutral-200 px-4 py-3 text-lg text-natural-400 dark:border-green-900 dark:bg-green-950 dark:text-green-200">
          <h1>
            <span className="text-shadow-emerald-600">Go</span> Premium
          </h1>
          <p className="text-center text-sm">
            {` Subscribe to unlock premium news content. ${" "}`}
            <span className="font-medium">
              {new Date(statusResult.data.currentPeriodEnd).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </span>
            .
          </p>
        </div>
      )}

      <Card className="relative flex flex-col border-primary shadow-lg">
        {plan.isPopular && !isActive && (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
            Most Popular
          </Badge>
        )}

        <CardHeader>
          <CardTitle className="text-xl">{plan.name}</CardTitle>
          <CardDescription>{plan.description}</CardDescription>
          <div className="pt-4">
            <span className="text-3xl font-bold">${plan.price}</span>
            <span className="text-sm text-muted-foreground">
              /{plan.interval}
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        {/* <CardFooter>{isActive && <SubscribeButton />}</CardFooter> */}
        <CardFooter>
          <SubscribeButton />
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingSection;
