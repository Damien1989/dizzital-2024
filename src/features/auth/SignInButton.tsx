import { signIn } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export const SignInButton = () => {
    return (
        <form>
        <Button
        variant="secondary"
        size="sm"
        formAction={async () => {
            await signIn();
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            <LogIn size={16} className="mr-2"></LogIn>Sign In
        </Button>
        </form>
    );
};