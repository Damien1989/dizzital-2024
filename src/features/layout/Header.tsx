import Image  from "next/image";
import { LoggedInButton } from "../auth/LoggedInButton";
import { Layout } from "@/components/layout";
import { SignInButton } from "../auth/SignInButton";
import { ModeToggle } from "../themes/ModeToggle";

export const Header = async() => {
    return (
        <header className="w-full border-b border-border px-4">
        <Layout className="flex items-center flex-row gap-4">
            <div className="flex items-center gap-2">
            <Image src="/icon.png" width={50} height={40} alt="dizzital-logo" />
            <span className="text-lg font-bold"> Dizzital</span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
                <ModeToggle />
            <LoggedInButton/>
        </div>
        </Layout>
        </header>
    );
};