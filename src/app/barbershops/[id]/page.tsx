import { db } from "@/_lib/prisma";
import Footer from "@/components/footer/footer";
import PhoneItem from "@/components/phoneItem/phoneitem";
import ServiceItem from "@/components/serviceItem/serviceItem";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ListStartIcon, MapPin, Menu, MenuIcon, Phone, PhoneIcon, Smartphone, SmartphoneIcon, Star } from "lucide-react";
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

            <div className="p-1 border-b border-solid space-y-3">
                <h2 className="font-bold uppercase text-xs text-gray-400 space-y-3">Serviços</h2>
                {barbershops?.services.map((service) => <ServiceItem key={service.id} service={service} /> )}
            </div>

            <div className="p-5 mb-5space-y-3 ">
                {barbershops?.phones.map(phone => 
                    <PhoneItem 
                    key={phone}
                    phone={phone}
                   />
                )}
            </div>
           
        </div>

    );
}

export default BarbershopPage;