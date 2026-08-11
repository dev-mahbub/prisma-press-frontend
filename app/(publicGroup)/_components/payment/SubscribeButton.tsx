"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { subscribePremium } from "../../_actions/subscribePremium";

const SubscribeButton = () => {
  const [state, action, pending] = useActionState(subscribePremium, null);

  useEffect(() => {
    if (!state) return;
    if (!state.success) {
      toast.error(state.message || "Failed to start checkout.");
    }
  }, [state]);

  return (
    <form action={action}>
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Redirecting..." : "Subscribe"}
      </Button>
    </form>
  );
};

export default SubscribeButton;
