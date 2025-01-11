'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Eye, EyeOff, AlertCircle, Check, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const passwordStrength = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*]/.test(password),
  }

  const isPasswordStrong = Object.values(passwordStrength).every(Boolean)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const target = event.target as typeof event.target & {
      name: { value: string }
      email: { value: string }
      password: { value: string }
      confirmPassword: { value: string }
    }

    const name = target.name.value
    const email = target.email.value
    const password = target.password.value
    const confirmPassword = target.confirmPassword.value

    if (password !== confirmPassword) {
      setError("Passwords don't match")
      setIsLoading(false)
      return
    }

    if (!isPasswordStrong) {
      setError("Please ensure your password meets all the strength criteria")
      setIsLoading(false)
      return
    }

    // TODO: Implement actual sign-up logic
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demonstration, we'll just redirect to a success page
      router.push('/signup-success')
    } catch (error) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="curved-gradient min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" type="text" autoComplete="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" autoComplete="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="text-sm">
                <ul className="space-y-1">
                  {Object.entries(passwordStrength).map(([key, value]) => (
                    <li key={key} className="flex items-center">
                      {value ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mr-2" />
                      )}
                      {key === 'minLength' && 'At least 8 characters'}
                      {key === 'hasUppercase' && 'Contains uppercase letter'}
                      {key === 'hasLowercase' && 'Contains lowercase letter'}
                      {key === 'hasNumber' && 'Contains number'}
                      {key === 'hasSpecialChar' && 'Contains special character'}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" autoComplete="new-password" required />
            </div>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )} 
            <Button className="w-full bg-gradient-to-r from-amber-500 to-nagham-gold" type="submit" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Sign up
            </Button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline">
                <Icons.apple className="mr-2 h-4 w-4" />
                Apple
              </Button>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/signin" className="font-medium text-nagham-gold hover:text-amber-500">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

