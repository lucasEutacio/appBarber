import { db } from "@/_lib/prisma";
import { BarbershopItems } from "@/components/barberShopItems/barberShopItems";
import Header from "@/components/header/header";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Icon, Search, SearchIcon } from "lucide-react";
import Image from "next/image";
import Footer from "../components/footer/footer";
import { quickSearchOptions } from "./_constants/search";
import { BookingItem } from "@/components/bookingItem/bookingItem";


export default async function Home() {

  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })

  return (
    <>
      <Header />
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

        <div className="flex gap-4 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">

          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant={"secondary"} key={option.title}>
              <Image alt={option.title} src={option.imageUrl} height={16} width={16} />
              {option.title}
            </Button>
          ))}

        </div>

        <div className="relative w-full h-[150px] mt-6 ">
          <Image alt="banner" src="/banner-01.png" fill className="object-cover rounded-xl" />
        </div>
        <div>
          <BookingItem />

          <div className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            <h2 className="uppercase text-gray-400 font-bold text-xl  mb-3 mt-6">Recomendados</h2>
            <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">

              {barbershops.map(barbershops => <BarbershopItems
                key={barbershops.id}
                barbershops={barbershops} />)}

            </div>
          </div>

          <div className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            <h2 className="uppercase text-gray-400 font-bold text-xl  mb-3 mt-6">Populares</h2>
            <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">

              {popularBarbershops.map(barbershops => <BarbershopItems
                key={barbershops.id}
                barbershops={barbershops} />)}

            </div>
          </div>
        </div>
      </div>
    
    </>
  );

}
