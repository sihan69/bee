import { Button } from "@/components/ui/button";

export function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Button
        variant="duolingo" size="xl"
      >
        开始学习
      </Button>

      <div className="flex items-center gap-4 flex-wrap justify-center">
      </div>
    </div>
  );
}