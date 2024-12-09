
import { NextApiRequest, NextApiResponse } from 'next';
import { actionClient } from '@/safe-action';
import { ProductSchema } from '../../../(customer)/products/[productId]/edit/Product.schema';
import { prisma } from '@/prisma';

interface MetadataType {
  actionName: string;
}

export const createProductAction = userAction
  .schema(ProductSchema)
  .action(async ({ parsedInput, ctx: { user } }) => {
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