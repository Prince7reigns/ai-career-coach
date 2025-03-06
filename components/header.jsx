
"use client";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import React from 'react'
import Image from "next/image";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


function Header() {
  const {user} = useUser()
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image 
           src="/logo.png"
           alt="logo"
           width={200}
           height={60}
           className="h-12 py-1 w-auto object-contain"
          />
        </Link>

          <div>
            <SignedIn>
                <Link href="/dashnoard">
                <Button>
                  <LayoutDashboard className="h-4 w-4"/>
                   <span className="hidden md:block">Industry Insights</span>
                </Button>
                </Link>
             </SignedIn>
             <DropdownMenu>
                  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>

          </div>
        </nav>
    </header>
  )
}

export default Header
