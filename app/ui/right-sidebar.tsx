import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, ShieldAlert, Sparkles } from "lucide-react";

export function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-80 fixed right-0 top-0 h-svh p-4 overflow-y-auto bg-white">
      <Card className="border-2 border-slate-200 shadow-none rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-extrabold flex items-center gap-2 text-purple-600">
            <Sparkles className="w-5 h-5 fill-purple-600" /> 学习记录
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs font-bold text-slate-500">
            之后展示学习打卡图
          </p>
          <Button className="w-full bg-purple-600 border-b-4 border-purple-800 hover:bg-purple-500 text-white font-bold rounded-xl active:translate-y-1 active:border-b-0">
            占位符
          </Button>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-200 shadow-none rounded-2xl">
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <CardTitle className="text-base font-extrabold text-slate-700">
            每日任务
          </CardTitle>
          <span className="text-xs font-bold text-brand-blue cursor-pointer hover:underline">
            查看全部
          </span>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Flame className="w-8 h-8 text-brand-orange fill-brand-orange shrink-0"/>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">获得 30 经验值</span>
                <span className="text-slate-400">12 / 30</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                <div className="bg-brand-orange h-full w-[40%]"/>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-200 shadow-none rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-extrabold text-slate-700 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-yellow-500"/> 红宝石联赛
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xs font-bold text-slate-500">
          完成一次课程，进入本周排行榜争夺晋级名额！
        </CardContent>
      </Card>
    </aside>
  );
}