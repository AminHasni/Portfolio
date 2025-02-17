"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Votre photo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Je suis un Développeur Web Passionné 🚀</h1>
        <p className="text-xl text-muted-foreground mb-8">Transformant des idées en expériences web exceptionnelles</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/projects">
              Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Me contacter</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

