"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactForm() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName]   = useState("");
const [email, setEmail]         = useState("");
const [phone, setPhone]         = useState("");
const [message, setMessage]     = useState("");

const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setStatus("sending");
 try {
   const res = await fetch("/api/contact", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ firstName, lastName, email, phone, message }),
   });
   if (!res.ok) throw new Error((await res.json()).error || res.statusText);
   
   // Reset form on success
   setFirstName("");
   setLastName("");
   setEmail("");
   setPhone("");
   setMessage("");
   setStatus("success");
   
   // Reset success message after 3 seconds
   setTimeout(() => {
     if (status === "success") setStatus("idle");
   }, 3000);
 } catch (err) {
   console.error("Failed to send email:", err);
   setStatus("error");
 }
};

return (
 <div className="bg-[#005F73] p-4 md:p-6 rounded-lg w-full max-w-md mx-auto">
   <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
     Get in touch
   </h2>
   <form onSubmit={handleSubmit} className="text-black grid gap-3 md:gap-4">
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
       <Input
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
         placeholder="First Name"
         className="bg-white"
       />
       <Input
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
         placeholder="Last Name"
         className="bg-white"
       />
     </div>
     <Input
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       placeholder="Email"
       type="email"
       className="bg-white"
     />
     <Input
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
       placeholder="Phone Number"
       type="tel"
       className="bg-white"
     />
     <Textarea
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       placeholder="Inquire here"
       className="bg-white"
       rows={4}
     />

     <Button
       type="submit"
       className="bg-[#333333] hover:bg-[#262626] w-full"
       disabled={status === "sending"}
     >
       {status === "sending"
         ? "Sending..."
         : status === "success"
         ? "Sent!"
         : "Get Started"}
     </Button>

     {status === "error" && (
       <p className="text-red-500 text-sm mt-2">
         Something went wrong. Please try again.
       </p>
     )}
   </form>
 </div>
);
}
