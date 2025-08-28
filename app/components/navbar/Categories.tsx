"use client";
import React from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiDesert,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This Property is close to the beach!",
  },
  {
    label: "Windmill",
    icon: GiWindmill,
    description: "This Property has windmill!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This Property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This Property is modern!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This Property is modern!",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This Property is modern!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This Property is modern!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This Property is modern!",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description: "This Property is modern!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This Property is modern!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This Property is modern!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This Property is modern!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This Property is modern!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This Property is modern!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This Property is modern!",
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
      <div className="pt-4 flex flex-row items-center justify-between  overflow-x-auto">
        {categories.map((items) => (
          <CategoryBox
            key={items.label}
            label={items.label}
            selected={category === items.label}
            icon={items.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
