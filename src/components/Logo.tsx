import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    spanClassName?: string;
}

const Logo = ({ className, spanClassName }: Props) => {
  return (
    <Link href={"/"} className={cn("text-zinc-950 text-xl group", className)}>
      <span
        className={cn(
          "bg-zinc-950 text-white w-8 h-8 rounded-full text-center text-2xl pr-1 pl-[11px] py-1 font-bold mr-1 group-hover:bg-blue-700 duration-200",
          spanClassName
        )}
      >
        Shop{" "}
      </span>
      now
    </Link>
  );
};

export default Logo;
