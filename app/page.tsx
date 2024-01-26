"use client";

import { ThemeProvider } from "@material-tailwind/react";
import NavbarMenu from "./components/navigation/NavbarMenu";
import Map from "./components/Map";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center w-full gap-6">
        <div className="w-full">
          <NavbarMenu />
        </div>
        <div className="flex justify-center w-4/5">
            <Map/>
        </div>
      </div>
    </ThemeProvider>
  );
}
