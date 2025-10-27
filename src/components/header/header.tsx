import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Calendar, CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { SheetTrigger, Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "../ui/sheet";
import { quickSearchOptions } from "@/app/_constants/search";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <Card>
                <CardContent className="justify-between items-center flex flex-row p-5 ">
                    <Image alt="logo" src="/logo.png" height={18} width={120} />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size='icon'
                                variant='outline'
                            >
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                            <SheetHeader>
                                <div className="py-5 border-b  gap-3 flex items-center border-solid">
                                    <Avatar  >
                                        <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" />
                                    </Avatar>
                                    <div className="">
                                        <p className="font-bold">Lucas Eutacio</p>
                                        <p className="text-xs">lucas@fullstack.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 py-5 border-solid border-b ">
                                    <SheetClose asChild>
                                        <Button className="justify-start gap-2" asChild>

                                            <Link href="/">
                                                <HomeIcon size={18} />
                                                Inicio
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                    <Button className="justify-start gap-2" variant={"ghost"}>
                                        <CalendarIcon size={18} />
                                        Agendamento
                                    </Button>
                                </div>

                            </SheetHeader>

                            <div className="flex flex-col gap-2 py-5 border-solid border-b ">
                                {quickSearchOptions.map((option) => (
                                    <Button key={option.title} className="justify-start gap-2" variant={"ghost"}>
                                        <Image src={option.imageUrl} alt={option.title} height={18} width={18} />
                                        {option.title}</Button>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2 py-5 ">
                                <Button className="justify-start gap-2" variant={"ghost"}>
                                    <LogOutIcon size={18} />
                                    Sair da conta</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </>
    );
}

export default Header;