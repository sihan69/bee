// 独立的 Duolingo 卡片组件 (components/duolingo/lesson-node.tsx)
import { Button } from "@/components/ui/button";
import { Star, Check, Play } from "lucide-react";

interface NodeProps {
  title: string;
  status: "completed" | "current" | "locked";
  offset?: "left" | "center" | "right"; // 模仿多邻国 S 型交错布局
}

export function LessonNode({ title, status, offset = "center" }: NodeProps) {
  // 多邻国关卡 S 型蛇形交错偏移
  const offsetClasses = {
    left: "-translate-x-8",
    center: "translate-x-0",
    right: "translate-x-8",
  };

  return (
    <div className={`flex flex-col items-center my-4 ${offsetClasses[offset]}`}>
      {/* 关卡节点按钮 */}
      {status === "current" && (
        <div className="relative">
          {/* 顶部的“开始”浮动气泡 */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-green text-white font-bold text-xs px-3 py-1 rounded-xl shadow-md animate-bounce border-b-2 border-brand-green-dark">
            开始
          </div>
          <Button
            variant="duolingo"
            className="w-16 h-16 rounded-full border-b-8 active:border-b-0 text-white p-0 shadow-lg"
          >
            <Play className="w-8 h-8 fill-current" />
          </Button>
        </div>
      )}

      {status === "completed" && (
        <Button
          className="w-16 h-16 rounded-full bg-brand-orange border-b-8 border-orange-600 text-white p-0 rounded-2xl active:translate-y-1 active:border-b-0"
        >
          <Check className="w-8 h-8 stroke-[3]" />
        </Button>
      )}

      {status === "locked" && (
        <Button
          disabled
          className="w-16 h-16 rounded-full bg-slate-200 border-b-8 border-slate-300 text-slate-400 p-0"
        >
          <Star className="w-8 h-8" />
        </Button>
      )}

      <span className="mt-2 text-xs font-bold text-slate-600">{title}</span>
    </div>
  );
}