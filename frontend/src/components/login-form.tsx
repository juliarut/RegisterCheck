import React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4", className)} {...props}>
      <div className="flex flex-col items-center gap-4 mb-6">
        <GalleryVerticalEnd className="h-8 w-8 text-blue-500" />
        <h1 className="text-2xl font-bold text-center">Välkommen till RegisterCheck</h1>
        <p className="text-sm text-gray-600 text-center">
          Logga in för att hantera och spåra dina anställdas utdrag ur belastningsregistret.
        </p>
      </div>
      <form className="w-full max-w-md">
        <div className="flex flex-col gap-4">
          {/* Email Input */}
          <div>
            <Label htmlFor="email" className="mb-1">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="din-email@example.com"
              required
            />
          </div>
          {/* Password Input */}
          <div>
            <Label htmlFor="password" className="mb-1">Lösenord</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          {/* Login Button */}
          <Button type="submit" className="w-full mt-4">
            Logga in
          </Button>
        </div>
      </form>
      {/* Divider */}
      <div className="relative text-sm text-center my-6">
        <span className="bg-gray-100 px-2 text-gray-500">Eller fortsätt med</span>
        <hr className="absolute inset-0 top-1/2 border-gray-300" />
      </div>
      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <Button variant="outline" className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
            <path
              d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
              fill="currentColor"
            />
          </svg>
          Fortsätt med Apple
        </Button>
        <Button variant="outline" className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
          Fortsätt med Google
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-6 text-center">
        Genom att fortsätta godkänner du våra{" "}
        <a href="#" className="underline">Användarvillkor</a> och{" "}
        <a href="#" className="underline">Integritetspolicy</a>.
      </p>
    </div>
  );
}