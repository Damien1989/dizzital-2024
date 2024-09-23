import { actionClient } from "@/safe-action";
import { ProductSchema } from "./Product.schema";
import { prisma } from "@/prisma";

export const createProductAction = async (input: typeof ProductSchema['_type'], context: { user: { id: string } }) => {
    const product = await prisma.product.create({
        data: {
            ...input,
            userId: context.user.id,
        },
    });
    return product;
};


export const editProductAction = async () => {
};