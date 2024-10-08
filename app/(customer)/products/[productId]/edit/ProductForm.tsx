"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormLabel, FormControl, FormDescription, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GRADIENTS_CLASSES, ProductSchema, ProductType } from "./Product.schema";
import { useZodForm } from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectContent } from "@radix-ui/react-select";
import { SelectItem } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { createProductAction } from "./product.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export type ProductFormProps = {
    defaultValues?: ProductType;
};

export const ProductForm = (props: ProductFormProps) => {
    const form = useZodForm({
        schema: ProductSchema,
        defaultValues: props.defaultValues,
    });

    const isCreate = !Boolean(props.defaultValues);
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async (values: ProductType) => {
            try {
                const response = await fetch("/api/products", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });
    
                if (!response.ok) {
                    throw new Error("Failed to create product");
                }
    
                const data = await response.json();
                toast.success("Product created");
                router.push(`/products/${data.id}`);
            } catch (error) {
                toast.error(error instanceof Error ? error.message : "Error creating product");
            }
        },
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {isCreate ? "Create product" : `Edit product ${props.defaultValues?.name}`}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form
                    className="flex flex-col gap-4"
                    form={form}
                    onSubmit={async (values) => {
                        await mutation.mutateAsync(values);
                    }}
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="iphone 15" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The name of the product to review
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
    control={form.control}
    name="backgroundColor"
    render={({ field }) => (
        <FormItem>
            <FormLabel>Background Color</FormLabel>
            <FormDescription>
                The review page background color
            </FormDescription>
            <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                        <SelectValue placeholder={field.value || "Select a color"} />
                    </SelectTrigger>
                    <SelectContent>
                        {GRADIENTS_CLASSES.map((gradient) => (
                            <SelectItem value={gradient} key={gradient} className="flex">
                                <div className={cn(gradient, "block w-80 h-8 rounded-md flex-1")}>
                                    TEST
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
/>
                    <Button>
                        {isCreate ? "Create Product" : "Save Product"}
                    </Button>
                </Form>
            </CardContent>
        </Card>
    );
};