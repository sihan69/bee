"use client";
import { LeftSidebar } from "@/app/ui/left-sidebar";
import { RightSidebar } from "@/app/ui/right-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh bg-slate-100 flex justify-center">
      {/* 限制整体最大宽度，整体居中 */}
      <div className="flex w-full max-w-[1080px] justify-between mx-auto">
        <LeftSidebar />
        <main className="flex-1 min-w-0 px-4 py-6 lg:max-w-[500px] w-full mx-auto">
          {children}
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}
