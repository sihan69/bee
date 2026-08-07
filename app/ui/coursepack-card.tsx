import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Eye, BookOpen } from "lucide-react";
import Link from "next/link";

// 映射 Duolingo 风格的颜色配置（含主色、3D底边色、浅色背景与文本色）
const COLOR_MAPS: Record<string, {
  cardBg: string;
  borderColor: string;
  progressBg: string;
  progressFill: string;
  tagBg: string;
  tagText: string;
}> = {
  "bg-emerald-500": {
    cardBg: "bg-emerald-500",
    borderColor: "border-emerald-600",
    progressBg: "bg-emerald-700/40",
    progressFill: "bg-emerald-200",
    tagBg: "bg-emerald-600/50",
    tagText: "text-emerald-100",
  },
  "bg-rose-500": {
    cardBg: "bg-rose-500",
    borderColor: "border-rose-600",
    progressBg: "bg-rose-700/40",
    progressFill: "bg-rose-200",
    tagBg: "bg-rose-600/50",
    tagText: "text-rose-100",
  },
  "bg-sky-500": {
    cardBg: "bg-sky-500",
    borderColor: "border-sky-600",
    progressBg: "bg-sky-700/40",
    progressFill: "bg-sky-200",
    tagBg: "bg-sky-600/50",
    tagText: "text-sky-100",
  },
  "bg-violet-500": {
    cardBg: "bg-violet-500",
    borderColor: "border-violet-600",
    progressBg: "bg-violet-700/40",
    progressFill: "bg-violet-200",
    tagBg: "bg-violet-600/50",
    tagText: "text-violet-100",
  },
};

export type CoursePack = {
  id: string;
  title: string;
  desc?: string;
  bgColor: string; // 如 "bg-emerald-500"
  progress: number; // 0~100
};

interface Props {
  pack: CoursePack;
}

export function CoursePackCard({ pack }: Props) {
  // 回退默认颜色配置
  const colors = COLOR_MAPS[pack.bgColor] || COLOR_MAPS["bg-sky-500"];

  return (
    <Card
      className={`w-full flex flex-col justify-between overflow-hidden rounded-2xl ${colors.cardBg} text-white border-2 ${colors.borderColor} border-b-8 transition-transform active:translate-y-1 active:border-b-4`}
    >
      <div>
        {/* 卡片头部 */}
        <CardHeader className="p-4 pb-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl font-black tracking-wide text-white">
                {pack.title}
              </CardTitle>
            </div>
          </div>
          {pack.desc && (
            <p className="text-white/90 text-sm font-bold mt-2 line-clamp-2">
              {pack.desc}
            </p>
          )}
        </CardHeader>

        {/* 进度条区块 */}
        <CardContent className="px-4 py-1.5">
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-black tracking-wider uppercase">
              <span className="opacity-90">学习进度</span>
              <span>{pack.progress}%</span>
            </div>
            {/* Duolingo 风格高亮圆角进度条 */}
            <div className={`h-3.5 ${colors.progressBg} rounded-full p-0.5 overflow-hidden`}>
              <div
                className={`h-full ${colors.progressFill} rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${pack.progress}%` }}
              />
            </div>
          </div>
        </CardContent>
      </div>

      {/* 底部按钮组 */}
      <CardFooter className="p-3 pt-2 gap-2 grid grid-cols-2 mt-1">
        <Link href={`/course/${pack.id}`} className="w-full">
          <Button
            size="sm"
            variant="ghost"
            className="w-full h-10 rounded-xl bg-white/20 hover:bg-white/30 text-white font-extrabold border-2 border-transparent border-b-white/30 active:border-b-0"
          >
            <Eye className="w-4 h-4 mr-1.5 shrink-0" />
            查看
          </Button>
        </Link>
        <Link href={`/learn?pack=${pack.id}`} className="w-full">
          <Button
            size="sm"
            className="w-full h-10 rounded-xl bg-white text-slate-800 hover:bg-slate-100 font-extrabold shadow-sm border-b-4 border-slate-300 active:translate-y-0.5 active:border-b-0"
          >
            <Play className="w-4 h-4 mr-1.5 fill-slate-800 shrink-0" />
            {pack.progress > 0 ? "继续" : "开始"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}