import { CoursePackCard, CoursePack } from "@/app/ui/coursepack-card";

const allPacks: CoursePack[] = [
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
  },
  {
    id:"3",
    title:"旅行英语",
    desc:"出国出行必备",
    bgColor:"bg-sky-500",
    progress:0
  },
];

export default function Page() {
  return (
    <div className="w-full px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">全部课程包</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {allPacks.map(pack => (
          <CoursePackCard pack={pack} key={pack.id} />
        ))}
      </div>
    </div>
  );
}