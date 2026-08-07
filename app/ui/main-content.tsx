import { CoursePackCard, CoursePack } from "@/app/ui/coursepack-card";

// 模拟最近学习列表
const recentPacks: CoursePack[] = [
  {
    id:"1",
    title:"日常口语",
    desc:"基础生活英语",
    bgColor:"bg-emerald-500",
    progress:62
  },
  {
    id:"2",
    title:"美食词汇",
    desc:"餐厅点餐对话",
    bgColor:"bg-rose-500",
    progress:35
  }
]

export function MainContent() {
  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <h2 className="text-2xl font-bold text-slate-800">最近学习</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {recentPacks.map((item)=>(
          <CoursePackCard pack={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
}