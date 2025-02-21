import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <div className="bg-[#005F73] p-6 rounded-lg">
      <form className="grid gap-4">
        <Input placeholder="First Name" className="bg-white" />
        <Input placeholder="Last Name" className="bg-white" />
        <Input placeholder="Email" type="email" className="bg-white" />
        <Textarea placeholder="Let your request here" className="bg-white" />
        <Button className="bg-[#333333] hover:bg-[#262626] w-full">Get Started</Button>
      </form>
    </div>
  )
}

