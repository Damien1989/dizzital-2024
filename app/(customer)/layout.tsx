import { Header } from '@/features/layout/Header';

export default function RouteLayout({ children }) {
    return (
        <div className="h-full">
            <Header />
            <main>{children}</main>
        </div>
    );
}