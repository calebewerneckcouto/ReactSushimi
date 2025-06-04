"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LaptopIcon } from "lucide-react"

export function ThemeToggle() {
    const { setTheme } = useTheme()

    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                <Button  className="fixed top-4 right-4" variant={"outline"} size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-0"></SunIcon>
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transation-all"></MoonIcon>
                    <span className="sr-only">Toggle Theme</span>
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                   <SunIcon className="mr-3"/>Light
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => setTheme("dark")}>
                   <MoonIcon className="mr-3"/>Dark
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => setTheme("system")}>
                   <LaptopIcon className="mr-3"/>System
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>

    );
}