import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Menu",
    path: "#menu",
    newTab: false,
  },
  {
    id: 33,
    title: "Locations",
    path: "#locations",
    newTab: false,
  },
  {
    id: 3,
    title: "Purchase Gift Cards for Flagship Location",
    path: "https://www.toasttab.com/nadc-burger-1007-east-6th-street/giftcards",
    newTab: true,
  },
  {
    id: 4,
    title: "Contact",
    path: "#contact",
    newTab: false,
  },
];
export default menuData;
