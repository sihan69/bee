"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Dumbbell,
  Trophy,
  Store,
  User,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "学习", icon: Home, href: "/learn" },
  { label: "课程", icon: Dumbbell, href: "/course" },
  { label: "排行榜", icon: Trophy, href: "/rank" },
  { label: "个人主页", icon: User, href: "/profile" },
  { label: "更多", icon: MoreHorizontal, href: "/more" },
];

export function LeftSidebar() {
  const pathname = usePathname();


  return (
    <aside className="fixed left-0 top-0 hidden h-svh border-r-2 border-slate-200 p-4 md:flex md:flex-col justify-between bg-white z-40
    w-16 lg:w-64 transition-all duration-300">
      <div className="flex flex-col gap-6">
        {/* Logo：图标模式隐藏文字logo */}
        <div className="px-4 py-2 lg:block md:hidden">
          <h1 className="text-3xl font-extrabold text-brand-green tracking-wide">
            BEE
          </h1>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <Link key={item.label} href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full gap-4 h-12 rounded-2xl font-bold text-base transition-all
                  ${isActive
                      ? "bg-sky-100 text-brand-blue border-2 border-brand-blue/40 hover:bg-sky-100"
                      : "text-slate-500 hover:bg-slate-100"}
                  justify-center lg:justify-start lg:gap-4`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? "text-brand-blue" : "text-slate-400"}`}/>
                  {/* md(平板窄栏)隐藏导航文字；大屏lg才展示文字 */}
                  <span className="lg:block md:hidden">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 底部Super按钮：平板图标模式隐藏 */}
      <div className="px-2 lg:block md:hidden">
        <Button variant="duolingo-blue" size="xl" className="w-full text-sm">
          LOG OUT
        </Button>
      </div>
    </aside>
  );
}