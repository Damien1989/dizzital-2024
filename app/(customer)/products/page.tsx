import { baseAuth } from "@/auth/auth";
import { requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { PageParams } from "@/types/next";
import { Prisma } from "@prisma/client";

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
                <Table>
<TableHeader>
    <TableHead> nom</TableHead>
</TableHeader>
<TableBody>
    {products.map((product) => {
        <TableRow key={product.id}></TableRow>
    })}
</TableBody>
                </Table>
            </Card>
        <div></div>
        </Layout>
    )
}