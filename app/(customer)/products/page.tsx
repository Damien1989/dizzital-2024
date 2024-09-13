import { baseAuth } from "@/auth/auth";
import { requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import Link  from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import type { PageParams } from "@/types/next";
import { prisma } from "@/prisma"

export default async function RoutePage(props: PageParams<{}>) {
    const user = await requiredCurrentUser();

    const products = await prisma.product.findMany({
        where : {
            userId : user.id,
        },
    });

    return (
     <Layout>
        <LayoutTitle> Products</LayoutTitle>
        <Card className="p-4">
            {products.length ? (
          <Table>
            <TableHeader>
                <TableHead> nom</TableHead>
            </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        </TableRow>
                        ))}
                </TableBody>
         </Table>) : (
            <Link 
            href="/products/new"
            className="flex w-full flex-items-center justify-center rounded-md border-2 border-dashed border-primary p-8 transition-colors hover:bg-accent/40 ">
                create product 
            </Link>
)}
        </Card>
        <div></div>
    </Layout>
);
    }