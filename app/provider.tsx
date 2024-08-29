"use client"

import { ThemeProvider } from "@/components/Theme-Provider";
import { Toaster } from "@/components/ui/sonner";
import { PropsWithChildren } from "react";

export type ProviderProps = PropsWithChildren; 

export const Providers = (props: ProviderProps) => {
return (
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Toaster />
          {props.children}
          
          </ThemeProvider>
);
};