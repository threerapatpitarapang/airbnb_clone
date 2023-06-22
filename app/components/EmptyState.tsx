"use client";

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";
import { useSearchParams } from "next/navigation";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "ไม่มีรายการค้นหาที่ตรงทั้งหมด",
  subtitle = "ลองเปลี่ยนหรือลบตัวค้นหาบางส่วนของคุณ.",
  showReset,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const category = params?.get("category");
  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading center title={title + ' ' + category} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="ลบค้นหาทั้งหมด"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
