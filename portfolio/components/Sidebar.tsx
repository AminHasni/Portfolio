"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"
import { Menu, X, Home, User, FolderGit2, Brain, Briefcase, Mail, BookOpen } from "lucide-react"

const navItems = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/about", label: "À propos", icon: User },
  { href: "/projects", label: "Projets", icon: FolderGit2 },
  { href: "/skills", label: "Compétences", icon: Brain },
  { href: "/experience", label: "Expérience", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/blog", label: "Blog", icon: BookOpen },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background border-r transform transition-transform duration-200 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <ModeToggle />
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent transition-colors ${
                        pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="p-4 border-t">
            <p className="text-sm text-muted-foreground">© 2024 Portfolio</p>
          </div>
        </div>
      </div>
    </>
  )
}

