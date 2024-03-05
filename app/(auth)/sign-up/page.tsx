import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "../../../public/google.png";
import Image from "next/image";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";

export default function SignUp() {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-grat-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            {" "}
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        Already have an account?{" "}
        <Link className="text-white hover-underline" href="/login">
          Log in now
        </Link>
        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <GithubSignInButton />
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  );
}
