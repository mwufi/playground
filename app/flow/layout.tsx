import Header from "@/components/blocks/Header";
import '@xyflow/react/dist/style.css';

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}