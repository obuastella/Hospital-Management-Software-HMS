import { usePathname } from "next/navigation";

import { Calendar, Home, LogOut, Phone, Settings, User } from "lucide-react";
export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }
  return [
    {
      name: "Dashboard",
      href: "/records",
      icon: <Home size={20} />,
      active: pathname === "/records",
      position: "top",
    },
    {
      name: "Profile",
      href: "/userprofile",
      icon: <User size={20} />,
      active: isNavItemActive(pathname, "/userprofile"),
      position: "top",
    },
    {
      name: "Appointments",
      href: "/appointments",
      icon: <Calendar size={20} />,
      active: isNavItemActive(pathname, "/appointment"),
      position: "top",
    },
    {
      name: "Support",
      href: "/contactus",
      icon: <Phone size={20} />,
      active: isNavItemActive(pathname, "/contactus"),
      position: "top",
    },
    {
      name: "Logout",
      href: "/",
      icon: <LogOut size={20} />,
      active: isNavItemActive(pathname, "/logout"),
      position: "bottom",
    },
  ];
};
