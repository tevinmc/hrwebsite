import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  buttonText: string
  href: string
}

export function ServiceCard({ title, description, buttonText, href }: ServiceCardProps) {
  return (
    <Card className="bg-[#333333] text-white h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="mb-6 text-sm md:text-base leading-relaxed">{description}</p>
        <Button 
          asChild 
          variant="outline" 
          className="text-black border-white hover:bg-white/10 opacity-50 mt-auto w-full sm:w-auto"
        >
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

