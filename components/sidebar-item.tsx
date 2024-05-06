"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  iconSrc: string;
  href: string;
  label: string;
};

export const SidebarItem = ({
  iconSrc,
  href,
  label,
}: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]" 
      asChild
    >
      <Link href={href}>
        <Image src={iconSrc} className="mr-5" width={32} height={32} alt={label}/>
        {label}
      </Link>
    </Button>
  )
}
