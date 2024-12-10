"use server"

import { signIn, signOut } from "next-auth/react";

export const signOutAction = async () => {
     await signOut();
}

export const signInAction = async () => {
     await signIn();
}