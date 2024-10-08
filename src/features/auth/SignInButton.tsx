"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
    return (
        <Button
            variant="secondary"
            size="sm"
            onClick={async () => {
                await signIn();  
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            <LogIn size={16} className="mr-2"></LogIn>Sign In
        </Button>
    );
};