import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

const Footer = () => {
    return (
        <>
            <footer className="bg-secondary ">
                <p className="items-center flex flex-row p-5 text-sm font-bold text-gray-700">
                    @2025 Copyright FWS Barber</p>
            </footer>
        </>
    );
}

export default Footer;