"use client";

import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export function NewsSearchbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (value: string) => {
    if (debouncedReference.current) {
      clearTimeout(debouncedReference.current);
    }

    debouncedReference.current = setTimeout(() => {
      const params = new URLSearchParams();

      if (value) {
        params.set("searchTerm", value);
      } else {
        params.delete("searchTerm");
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 500);
  };

  return (
    <Field>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-2 h-4 w-4 text-muted-foreground" />
        <Input
          defaultValue={
            searchParams.get("searchTerm")
              ? searchParams.get("searchTerm")?.toString()
              : ""
          }
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          type="text"
          placeholder="Search news..."
          className="pl-8"
        />
      </div>
    </Field>
  );
}
