import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Icon, Search, SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
  <>
   <Header/>
   <div className="p-5">
      <h2 className="text-xl font-bold">Olá, usuario</h2>
      <p>segunda </p>
        <div className="flex items-center gap-2 mt-6">
          <Input
          placeholder="Faça sua busca..."
          />
          <Button>
              <SearchIcon />
          </Button>
        </div>
        <div className="relative w-full h-[150px] mt-6 ">
          <Image alt="banner" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>
   </div>
   </>
  );

}
