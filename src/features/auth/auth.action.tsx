"use server"

import { signOut } from "@/auth/auth"
import { signIn } from "next-auth/react"

export const signOutAction = async () => {
     await signOut();
}

export const signInAction = async () => {
     await signIn();
}