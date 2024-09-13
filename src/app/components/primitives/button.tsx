import clsx from "clsx";
import { type MouseEventHandler } from "react";

export default function PrimitiveButton({
  children,
  type,
  onClick,
  addClasses,
}: Readonly<{
  children: React.ReactNode;
  type: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  addClasses?: string;
}>) {
  return (
    <div>
      <button
        className={clsx(
          "inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium text-black ring-offset-black transition hover:scale-105 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
          addClasses ?? "bg-white",
        )}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

// inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2
