"use client";
import React, { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loginAction } from "../_actions/loginAction";
import { toast } from "sonner";

const LoginFormSection = () => {
  const [state, action, pending] = useActionState(loginAction, false);

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(state.message || "Login Successfully");
    }
    if (!state.success) {
      toast.error(state.message || "Login Failed");
    }
  }, [state]);
  return (
    <form action={action} className="space-y-4">
      <Card className="space-y-4 p-5">
        <Input name="email" type="email" placeholder="Email"></Input>
        <Input name="password" type="password" placeholder="Password"></Input>
        <Button type="submit">{pending ? "Submitting" : "Login"}</Button>
      </Card>
    </form>
  );
};

export default LoginFormSection;
