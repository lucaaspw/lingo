import Link from "next/link";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/button";
import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferInsert;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

export const UserProgress = ({
  activeCourse, hearts, points, hasActiveSubscription
  }: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image src={activeCourse.imageSrc} width={32} height={32} className="border rounded-md" alt={activeCourse.title}/>
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image src="/points.svg" width={28} height={28} className="mr-2" alt="Points"/>
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image src="/heart.svg" width={22} height={22} className="mr-2" alt="Hearts"/>
          {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]"/> : hearts}
        </Button>
      </Link>
    </div>
  )
}