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
   // Use FormSubmit.co directly from the client side as a fallback
   // This bypasses the API route if it's having issues
   const formSubmitEndpoint = "https://formsubmit.co/ajax/admin@epiphanyenterprisesinternational.com";
   
   const formData = {
     name: `${firstName} ${lastName}`,
     email: email,
     phone: phone || 'Not provided',
     message: message,
     _subject: 'New Contact Form Submission'
   };
   
   const res = await fetch(formSubmitEndpoint, {
     method: "POST",
     headers: { 
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body: JSON.stringify(formData),
   });
   
   if (!res.ok) {
     const text = await res.text();
     let errorData;
     try {
       errorData = JSON.parse(text);
     } catch (e) {
       throw new Error(text || res.statusText);
     }
     throw new Error(errorData.message || res.statusText);
   }
   
   // Reset form on success
   setFirstName("");
   setLastName("");
   setEmail("");
   setPhone("");
   setMessage("");
   setStatus("success");
   
   // Reset success message after 5 seconds
   setTimeout(() => {
     setStatus("idle");
   }, 5000);
 } catch (err) {
   console.error("Failed to send email:", err);
   setStatus("error");
   
   // Reset error message after 5 seconds
   setTimeout(() => {
     setStatus("idle");
   }, 5000);
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
