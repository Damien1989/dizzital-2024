"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormLabel, FormControl, FormDescription, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GRADIENTS_CLASSES, ProductSchema, ProductType } from "./Product.schema";
import { useZodForm } from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectContent } from "@radix-ui/react-select";
import { SelectItem } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type ProductFormProps = {
    defaultValues?: ProductType;
};

export const ProductForm = (props: ProductFormProps) => {
    const form = useZodForm({
        schema: ProductSchema,
        defaultValues: props.defaultValues,
    });

    const isCreate = !Boolean(props.defaultValues);

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {isCreate ? "Create product" : `Edit product ${props.defaultValues?.backgroundColor}`}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form
                    form={form}
                    onSubmit={async (values) => {
                        console.log(values);
                    }}
                >
                    <FormField
                        control={form.control}
                        name="backgroundColor"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Color</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a color" />  {/* Utilisez un seul enfant ici */}
                                        </SelectTrigger>
                                        <SelectContent>
                                            {GRADIENTS_CLASSES.map((gradient) => (
                                                <SelectItem value={gradient} key={gradient}>
                                                    <span className={cn(gradient, "w-full h-8 rounded-md")}></span>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Input placeholder="I Phone" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The name of the product to review
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </Form>
            </CardContent>
        </Card>
    );
};
                  