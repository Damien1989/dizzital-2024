import { actionClient } from "@/safe-action";
import { ProductSchema } from "./Product.schema";
import { prisma } from "@/prisma";


export const createProductAction = actionClient.define(ProductSchema, async (input, context) => {
    const product = await prisma.product.create({
        data: {
            ...input,
            userId: context.user.id,
        },
    });
    return product;
});

export const editProductAction = async () => {
};