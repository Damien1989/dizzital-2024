import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout";

export default async function RoutesPage(Props: PageParams<{}>) {
    return (
    <Layout>
    <p>Hello World</p>
    </Layout>
)}