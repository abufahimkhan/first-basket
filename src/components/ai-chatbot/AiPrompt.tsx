import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
const AiPrompt = () => {
  return (
    <div className="grid w-full gap-5 mt-12 md:mt-0">
      <Label htmlFor="message-2" className="text-4xl font-bold text-gray-900 sm:text-4xl">
        Your Message
      </Label>
      <Textarea
        className="h-52 outline-none "
        placeholder="Type your message here."
        id="message-2"
      />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
      <Button className=" ml-auto w-fit">Send message</Button>
    </div>
  );
};

export default AiPrompt;
