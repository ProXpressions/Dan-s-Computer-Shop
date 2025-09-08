import React from "react";
import { HomeIcon, File, UserRound } from "lucide-react";
import Link from "next/link";
import NavButon from "./NavButon";

const Header = () => {
  return (
    <div>
      <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
        <div className="flex h-8 items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <NavButon href="/home" label="Home" icon={HomeIcon} />
            <Link
              href={"/home"}
              className="flex justify-center items-center gap-2 ml-0"
              title="Home"
            >
              <h1 className="hidden sm:block text-xl font-bold ml-0 mt-1">
                Computer Repair Shop
              </h1>
            </Link>
          </div>

          <div className="flex items-center">
            <NavButon href="/tickets" label="Tickets" icon={File} />
            <NavButon href="/customers" label="Customers" icon={UserRound} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
