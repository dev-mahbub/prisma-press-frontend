"use client";

import { useState } from "react";
import { LayoutDashboard, LogOut, Menu, Settings, User, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
];

const userMenuItems = [
  { label: "Profile", href: "#", icon: User },
  { label: "Dashboard", href: "#", icon: LayoutDashboard },
  { label: "Settings", href: "#", icon: Settings },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Text logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="rounded-md bg-primary px-2 py-1 text-primary-foreground">
            Acme
          </span>
          <span className="hidden sm:inline">Studio</span>
        </a>

        {/* Desktop nav items */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center rounded-full outline-none cursor-pointer focus:ring-1 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background"
              >
                <Avatar className="size-9">
                  <AvatarImage
                    src="/diverse-user-avatars.png"
                    alt="User avatar"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Open user menu</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium">Jane Doe</span>
                    <span className="text-xs font-normal text-muted-foreground">
                      jane@example.com
                    </span>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {userMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem key={item.label}>
                      <Icon />
                      {item.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile nav items */}
      <nav
        className={cn(
          "flex-col gap-1 border-t px-4 py-3 md:hidden",
          mobileOpen ? "flex" : "hidden",
        )}
      >
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            className="justify-start"
            asChild
          >
            <a href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          </Button>
        ))}
      </nav>
    </header>
  );
}
