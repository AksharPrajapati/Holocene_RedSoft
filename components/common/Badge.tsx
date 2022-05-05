import { ReactNode } from "react";

type IBadge = {
  variant: "red" | "yellow" | "green" | "indigo" | "gray";
  children: ReactNode;
  className?: string;
};

export const Badge: React.FC<IBadge> = ({
  variant,
  children,
  className = "",
}) => {
  const colorclasses =
    variant === "red"
      ? "bg-red-100 text-red-800"
      : variant === "green"
      ? "bg-green-100 text-green-800"
      : variant === "yellow"
      ? "bg-yellow-100 text-yellow-800"
      : variant === "indigo"
      ? "bg-indigo-50 text-indigo-600"
      : "bg-gray-100 text-gray-500";

  return (
    <span
      className={
        className +
        " inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium " +
        colorclasses
      }
    >
      {children}
    </span>
  );
};
