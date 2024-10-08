import { z } from "zod";

export const ProductSchema = z.object({
    name: z.string(),
    slug: z
    .string()
    .regex(/^[a-zA-Z0-9_]*$/)
    .min(10)
    .max(20),
    noteText: z.string().optional(),
    informationText: z.string().optional(),
    reviewText: z.string().optional(),
    thanksText: z.string().optional(),
    backgroundColor: z.string(),
});

export type ProductType = z.infer<typeof ProductSchema>;

export const GRADIENTS_CLASSES = [
    "bg-gradient-to-r from-indigo-500 to-blue-500",
    "bg-gradient-to-r from-fuchsia-600 to-purple-600",
    "bg-gradient-to-r from-teal-200 to-teal-500"
];