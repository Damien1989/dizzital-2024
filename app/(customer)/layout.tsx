import { Header } from '@/features/layout/Header'; // Assure-toi que le chemin est correct

export default function RouteLayout({ children }) {
    return (
        <div className="h-full">
            <Header />
            <main>{children}</main>
        </div>
    );
}