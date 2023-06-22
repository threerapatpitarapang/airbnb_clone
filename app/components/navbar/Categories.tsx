"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "ชายหาด",
    icon: TbBeach,
    description: "ที่พักนี้อยู่ใกล้ชายหาด!",
  },
  {
    label: "กังหันลม",
    icon: GiWindmill,
    description: "ที่พักแห่งนี้มีกังหันลม!",
  },
  {
    label: "ทันสมัย",
    icon: MdOutlineVilla,
    description: "ที่พักแห่งนี้มีความทันสมัย!",
  },
  {
    label: "ชนบท",
    icon: TbMountain,
    description: "ที่พักแห่งนี้อยู่ในชนบท!",
  },
  {
    label: "สระว่ายน้ำ",
    icon: TbPool,
    description: "ที่พักแห่งนี้มีสระว่ายน้ำที่สวยงาม!",
  },
  {
    label: "หมู่เกาะ",
    icon: GiIsland,
    description: "ที่พักแห่งนี้อยู่บนเกาะ!",
  },
  {
    label: "ทะเลสาบ",
    icon: GiBoatFishing,
    description: "ที่พักนี้อยู่ใกล้ทะเลสาบ!",
  },
  {
    label: "เล่นสกี",
    icon: FaSkiing,
    description: "ที่พักแห่งนี้มีกิจกรรมการเล่นสกี!",
  },
  {
    label: "ปราสาท",
    icon: GiCastle,
    description: "ที่พักแห่งนี้เป็นปราสาทโบราณ!",
  },
  {
    label: "ถ้ำ",
    icon: GiCaveEntrance,
    description: "ที่พักแห่งนี้อยู่ในถ้ำที่น่ากลัว!",
  },
  {
    label: "แคมป์ปิ้ง",
    icon: GiForestCamp,
    description: "ที่พักแห่งนี้มีกิจกรรมการตั้งแคมป์!",
  },
  {
    label: "อาร์กติก",
    icon: BsSnow,
    description: "ที่พักแห่งนี้อยู่ในสภาพแวดล้อมแบบอาร์กติก!",
  },
  {
    label: "ทะเลทราย",
    icon: GiCactus,
    description: "ที่พักแห่งนี้อยู่ในทะเลทราย!",
  },
  {
    label: "โรงนา",
    icon: GiBarn,
    description: "ที่พักแห่งนี้อยู่ในโรงนา!",
  },
  {
    label: "หรูหรา",
    icon: IoDiamond,
    description: "ที่พักแห่งนี้ใหม่เอี่ยมและหรูหรา!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
