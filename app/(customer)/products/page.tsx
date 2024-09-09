import { baseAuth } from "@/auth/auth";
import { Layout, LayoutTitle } from "@/components/layout";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
    const session = await baseAuth();

    console.log(session);

    return (
        <Layout>
        <LayoutTitle> Products</LayoutTitle>

        <div></div>
        </Layout>
    )
}