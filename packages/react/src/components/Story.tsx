import React from "react";
import { twMerge } from "tailwind-merge";

const layoutClasses = {
  default: "",
  centered: "flex items-center justify-center",
};

export function Story({
  layout = "default",
  children,
  className,
}: {
  layout?: keyof typeof layoutClasses;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        `bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 rounded-lg w-full p-4 min-h-48 h-auto mt-8 ${layoutClasses[layout]}`,
        className
      )}
    >
      {children}
    </div>
  );
}
