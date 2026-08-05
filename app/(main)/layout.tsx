"use client";
import { LeftSidebar } from "@/app/ui/left-sidebar";
import { RightSidebar } from "@/app/ui/right-sidebar";

export default function MainLayout({children}:{children:React.ReactNode}){
    return (
        <div className="flex min-h-svh bg-slate-100">
            <LeftSidebar />
            <main className="flex-1 flex flex-col items-center justify-center gap-6 md:pl-16 lg:pl-64 lg:pr-80">
                {children}
            </main>
            <RightSidebar />
        </div>
    )
}