import Image  from "next/image";
import { LoggedInButton } from "../auth/LoggedInButton";
import { Layout } from "@/components/layout";
import { SignInButton } from "../auth/SignInButton";

export const Header = async() => {
    return (
        <header className="w-full border-b border-border px-4">
        <Layout className="flex items-center gap-4">
            <div className="flex-1">
            <Image src="/icon.png" width={38} height={38} alt="icon" />
            </div>
            <div>
            <LoggedInButton/>
        </div>
        </Layout>
        </header>
    );
};