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
export default async function Home  () {

  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
 orderBy: {
   name: 'desc'
 }
  })
  console.log({barbershops})
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

        <div className="flex gap-4 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">

          <Button className="gap-2" variant={"secondary"}>
           <Image alt="cabelo" src="/cabelo.svg" height={16} width={16}/>
           cabelo
          </Button>

          <Button className="gap-2" variant={"secondary"}>
           <Image alt="barba" src="/barba.svg" height={16} width={16}/>
           Barba
          </Button>
          
          <Button className="gap-2" variant={"secondary"}>
           <Image alt="Acabamento" src="/acabamento.svg" height={16} width={16}/>
           Acabamento
          </Button>

           <Button className="gap-2" variant={"secondary"}>
           <Image alt="Acabamento" src="/hidratacao.svg" height={16} width={16}/>
           Hidratação
          </Button>

           <Button className="gap-2" variant={"secondary"}>
           <Image alt="massagem" src="/massagem.svg" height={16} width={16}/>
           Massagem
          </Button>

           <Button className="gap-2" variant={"secondary"}>
           <Image alt="Acabamento" src="/sobrancelha.svg" height={16} width={16}/>
           Sobrancelha
          </Button>
          
        </div>

        <div className="relative w-full h-[150px] mt-6 ">
          <Image alt="banner" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>
        <div>
            <h2 className="uppercase text-gray-400 font-bold text-xl  mb-3 mt-6">agendamentos</h2>
          <Card className="">
            <CardContent className="flex justify-between p-0">
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit rounded-2xl">Confirmado</Badge>
                <h3 className="font-bold">corte de cabelo</h3>
              <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                   <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"/>
                 </Avatar>
                  <p>Barbearia fullStack week</p>
              </div>
              </div>

              <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid ">
                  <p className="text-sm ">Agosto</p>
                  <p className="text-2xl font-semibold">05</p>
                  <p className="text-sm">20:00</p>
              </div>
            </CardContent>
          </Card>
          <div className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
             <h2 className="font-bold">Recomendados</h2> 
              <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
              
                {barbershops.map(barbershops => <BarbershopItems
                key={barbershops.id}
                barbershops={barbershops}/>)}
              
              </div>
          </div>

           <div className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
             <h2 className="font-bold">Populares</h2> 
              <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
              
                {popularBarbershops.map(barbershops => <BarbershopItems
                key={barbershops.id}
                barbershops={barbershops}/>)}
              
              </div>
          </div>
        </div>
   </div>
   <Footer/>
   </>
  );

}
