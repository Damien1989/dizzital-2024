import { actionClient } from "@/safe-action";
import { ProductSchema } from "./Product.schema";
import { prisma } from "@/prisma";

export const createProductAction = userAction
  .schema(ProductSchema)
  .action(async ({ parsedInput, ctx: { user } }) => {
    // verify if slug already exists
    const slugExists = await prisma.product.count({
      where: {
        slug: parsedInput.slug,
      },
    });

    if (slugExists) {
      throw new ActionError("Slug already exists");
    }

    const product = await prisma.product.create({
      data: {
        ...parsedInput,
        userId: user.id,
      },
    });
    return product;
  }
  );

export const editProductAction = async () => {
};