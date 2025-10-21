import { db } from "@/_lib/prisma";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ListStartIcon, MapPin, Menu, MenuIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
interface BarbershopPageProps {
    params: {
        id: string
    }

}
const BarbershopPage = async ({ params }: BarbershopPageProps) => {
    const barbershops = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })

    if (!barbershops) {
        return notFound()
    }

   console.log(barbershops.services)
    return (
        <div >
            <div className="relative w-full h-[250px]">
                <Image src={`${barbershops?.imageUrl}`} alt={`${barbershops?.name}`} fill className="object-cover  " />

                <Button size={"icon"} variant={"outline"} className="absolute top-4 left-4 z-50" asChild>
                    <Link href="/">
                        <ChevronLeft />
                    </Link>
                </Button>

                <Button size={"icon"} variant={"outline"} className="absolute top-4 right-4 z-50" asChild>
                    <MenuIcon />
                </Button>
            </div>


            <div className="p-5 border-b border-solid">
                <h1 className="font-bold text-xl ">{barbershops?.name}</h1>

                <div className="flex items-center mb-2 gap-2a">
                    <MapPin size={18} className="text-primary" />
                    <p className="text-sm">{barbershops?.address}</p>
                </div>


                <div className="flex items-center mb-2 gap-2">
                    <Star size={18} className="fill-primary text-primary" />
                    <p className="text-sm">5,0</p>
                </div>
            </div>
            <div className="p-5 border-b border-solid">
                <h2 className="font-bold uppercase text-xs text-gray-400 space-y-3">Sobre nos</h2>
                <p className="text-sm text-justify">{barbershops?.description}</p>
            </div>
        </div>

    );
}

export default BarbershopPage;