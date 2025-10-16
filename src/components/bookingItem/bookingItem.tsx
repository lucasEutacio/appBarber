
import { Avatar, AvatarImage } from "../ui/avatar"
import { Card, CardContent } from "../ui/card"
import { BarbershopItems } from "../barberShopItems/barberShopItems"
import { Badge } from "../ui/badge"


export const BookingItem = () => {
    return (
        <>
            <h2 className="uppercase text-gray-400 font-bold text-xl  mb-3 mt-6">agendamentos</h2>
            <Card className="">
                <CardContent className="flex justify-between p-0">
                    <div className="flex flex-col gap-2 py-5 pl-5">
                        <Badge className="w-fit rounded-2xl">Confirmado</Badge>
                        <h3 className="font-bold">corte de cabelo</h3>
                        <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" />
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
        </>
    )
}