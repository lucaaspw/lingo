import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return(
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 pt-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/hr.svg" height={32} width={40} className="mr-4 rounded-md" alt="Croatian"/>
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/fr.svg" height={32} width={40} className="mr-4 rounded-md" alt="French"/>
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/it.svg" height={32} width={40} className="mr-4 rounded-md" alt="Italian"/>
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/jp.svg" height={32} width={40} className="mr-4 rounded-md" alt="Japonese"/>
          Japonese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/es.svg" height={32} width={40} className="mr-4 rounded-md" alt="Spanish"/>
          Spanish
        </Button>
      </div>
    </footer>
  );
}