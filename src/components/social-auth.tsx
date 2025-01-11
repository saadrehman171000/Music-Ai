import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SocialAuth() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-amber-100" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or Continue With</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          className="w-full border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-colors"
        >
          <Image src="/google.svg" alt="Google" width={20} height={20} className="mr-2" />
          Google
        </Button>
        <Button 
          variant="outline" 
          className="w-full border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-colors"
        >
          <Image src="/facebook.svg" alt="Facebook" width={20} height={20} className="mr-2" />
          Facebook
        </Button>
      </div>
    </div>
  )
}

