import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarbershopItemsProps {
    barbershops: Barbershop;
}

export const BarbershopItems = ({ barbershops }: BarbershopItemsProps) => {

    return (
        <>
            <Card className="min-w-[167px] rounded-2xl ">
                <CardContent className="p-0 px-1 pt-1">
                    <div className="relative h-[159px] w-full">

                        <Image alt="barber-shops" src={barbershops.imageUrl} fill className="object-cover rounded-2xl " />
                        <Badge variant="secondary" className="absolute top-2 left-2 z-50 space-x-1">
                            <StarIcon size={12} className="fill-primary text-primary" />
                            <p className="text-xs font-semibold">5,0</p>
                        </Badge>
                    </div>
                    <div className=" py-3 px-1">
                        <h3 className="font-semibold text-sm truncate">{barbershops.name}</h3>
                        <p className=" text-gray-400 truncate">{barbershops.address}</p>
                        <Button
                        variant="secondary"
                         className="w-full mt-3">
                            <Link href={`/barbershops/${barbershops.id}`}>
                            Reservar
                            </Link>
                            </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};