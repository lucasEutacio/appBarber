"use client"

import { SmartphoneIcon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";


interface PhoneItemProps {
    phone: string;

}
const PhoneItem = ({ phone }: PhoneItemProps) => {


    const handleCopyToClipboard = (phone: string) => {
        navigator.clipboard.writeText(phone)
        toast.success("Número copiado com sucesso!")
    }
    return (


        <div className="flex justify-between" key={phone}>
            <div className="flex items-center gap-2">
                <SmartphoneIcon />
                <p>{phone}</p>
            </div>
            <div>
                <Button variant={"outline"} size='sm' onClick={() => handleCopyToClipboard(phone)}>Copiar</Button>
            </div>
        </div>


    );
}

export default PhoneItem;