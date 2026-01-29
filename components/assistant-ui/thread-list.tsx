"use client";

import { Button } from "@/components/ui/button";
import type { FC } from "react";

interface ThreadListProps {
  currentPerson?: string; // the currently selected persona
  onChange: (person: string) => void; // callback to update parent
}

export const ThreadList: FC<ThreadListProps> = ({ currentPerson, onChange }) => {
  return (
    <div className="flex flex-col gap-2 p-2 w-full">
      <Button
        variant={currentPerson === "East LA foo" ? "secondary" : "ghost"}
        className={`justify-start ${currentPerson === "East LA foo" ? "font-bold" : ""}`}
        onClick={() => onChange("East LA foo")}
      >
        East LA foo🌴
      </Button>

      <Button
        variant={currentPerson === "Oakland fella" ? "secondary" : "ghost"}
        className={`justify-start ${currentPerson === "Oakland fella" ? "font-bold" : ""}`}
        onClick={() => onChange("Oakland fella")}
      >
        Oakland fella🌉
      </Button>

      <Button
        variant={currentPerson === "Bronx yankee" ? "secondary" : "ghost"}
        className={`justify-start ${currentPerson === "Bronx yankee" ? "font-bold" : ""}`}
        onClick={() => onChange("Bronx yankee")}
      >
        Bronx yankee🗽
      </Button>

      <Button
        variant={currentPerson === "London roadman" ? "secondary" : "ghost"}
        className={`justify-start ${currentPerson === "London roadman" ? "font-bold" : ""}`}
        onClick={() => onChange("London roadman")}
      >
        London roadman🇬🇧
      </Button>

      <Button
        variant={currentPerson === "Toronto gerbert" ? "secondary" : "ghost"}
        className={`justify-start ${currentPerson === "Toronto gerbert" ? "font-bold" : ""}`}
        onClick={() => onChange("Toronto gerbert")}
      >
        Toronto gerbert🇨🇦
      </Button>
    </div>
  );
};
