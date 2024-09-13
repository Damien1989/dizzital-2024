"use server";

import { userAction } from "@/safe-action";
import { ProductSchema } from "./Product.schema";

export const createProductAction = userAction(ProductSchema, async (input, context)  => {

};

export const editProductAction = async () => {

};