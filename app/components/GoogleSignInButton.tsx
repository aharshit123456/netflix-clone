"use client";

import { Button } from "@/components/ui/button";
import GoogleIcon from "../../public/google.png";
import Image from "next/image";

export default function GoogleSignInButton() {
  return (
    <Button variant="outline" size="icon">
      <Image className="w-4 h-4" src={GoogleIcon} alt="Google Icon" />
    </Button>
  );
}
