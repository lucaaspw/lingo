import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
}

export const Header = ({title}: Props) => {
  return (
    <div className="sticky top-0 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 pb-3 to-neutral-400 lg:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 stroke-2 to-neutral-400"/>
        </Button>
      </Link>
      <h1 className="to-neutral-400 text-2xl">{title}</h1>
      <div/>
    </div>
  )
}