import { Field, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function NewsSearchbar() {
  return (
    <Field>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-2 h-4 w-4 text-muted-foreground" />
        <Input type="text" placeholder="Search news..." className="pl-8" />
      </div>
    </Field>
  );
}
