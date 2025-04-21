import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <div className="bg-[#005F73] p-4 md:p-6 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Get in touch</h2>
      <form className="text-black grid gap-3 md:gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <Input placeholder="First Name" className="bg-white" />
          <Input placeholder="Last Name" className="bg-white" />
        </div>
        <Input placeholder="Email" type="email" className="bg-white" />
        <Input placeholder="Phone Number" type="tel" className="bg-white" />
        <Textarea placeholder="Inquire here" className="bg-white" rows={4} />
        <Button className="bg-[#333333] hover:bg-[#262626] w-full">Get Started</Button>
      </form>
    </div>
  )
}


