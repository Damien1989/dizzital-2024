"use client";

import { ThemeProvider } from "@/components/Theme-Provider";
import { Toaster } from "@/components/ui/sonner";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Créez une seule instance de QueryClient à utiliser dans l'application
const queryClient = new QueryClient();

export type ProvidersProps = PropsWithChildren;

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <QueryClientProvider client={queryClient}>
                {children}
                <Toaster />
            </QueryClientProvider>
        </ThemeProvider>
    );
};