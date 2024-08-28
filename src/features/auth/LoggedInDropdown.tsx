"use client";

import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import { PropsWithChildren } from "react";
import { signOutAction } from "./auth.action";
import { LogOut } from "lucide-react";

export type LoggedInDropdownProps = PropsWithChildren

export const LoggedInDropdown = (props : LoggedInDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                
                <DropdownMenuItem
                onClick={() => {
                    signOutAction();
                    }}
                    >
                        <LogOut size={16} className="mr-2" />
                        Logout
                
                </DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
