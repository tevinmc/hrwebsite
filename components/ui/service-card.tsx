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
    <Card className="bg-[#333333] text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6">{description}</p>
        <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

