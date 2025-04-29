"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { buttonVariants } from "../ui/button";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const AuthButtons = () => {
    const { data: session } = useSession();
    const { toast } = useToast();

    const handleLogout = async () => {
        await signOut({ redirect: false, callbackUrl: "/" });
        toast({
            title: "Logged Out Successfully",
            description: "See you Soon",
        });

        window.location.replace("/");
    };

    if (session) {
        return (
            <div className="px-4 space-x-4"> 
                <Link
                    href={"/signup"}
                    className={`${buttonVariants({ variant: "outline" })} text-black p-3`}
                >
                    Register New Admin
                </Link>
                <Button onClick={handleLogout} className={`${buttonVariants({ variant: "outline" })} text-black p-3`}>
                    Logout
                </Button>
            </div>
        );
    } else {
        return (
            <div className="px-2">
                <Link
                    href={"/signin"}
                    className={`${buttonVariants({ variant: "outline" })} text-black p-3`}
                >
                    Sign In
                </Link>
            </div>
        );
    }
};

export default AuthButtons;
