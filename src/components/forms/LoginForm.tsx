"use client"

import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format"
    if (!password) newErrors.password = "Password is required"
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) throw new Error("Login failed")
      const data = await res.json()
      console.log("Login success:", data)
      // TODO: redirect to dashboard
    } catch (err) {
      console.error(err)
      alert("Invalid credentials")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4 lg:space-y-6 w-full">
      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5 w-full">
        {/* Email Field */}
        <div className="transform transition-all duration-300 hover:translate-y-[-2px] w-full">
          <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 lg:py-4 text-sm lg:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 backdrop-blur-sm"
          />
          {errors.email && <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.email}</p>}
        </div>
        
        {/* Password Field */}
        <div className="transform transition-all duration-300 hover:translate-y-[-2px] w-full">
          <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 lg:py-4 text-sm lg:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 backdrop-blur-sm pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-xs sm:text-sm w-full">
          <label className="flex items-center space-x-2 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-colors duration-200"
            />
            <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
              Remember me
            </span>
          </label>
          <a 
            href="#" 
            className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2.5 sm:py-3 lg:py-4 px-6 text-sm lg:text-base rounded-xl hover:from-blue-600 hover:to-blue-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-xs sm:text-sm">
          <span className="px-4 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
        <button className="flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 lg:py-4 border border-gray-200 rounded-xl hover:bg-gray-50/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md group backdrop-blur-sm">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">Google</span>
        </button>
        
        <button className="flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 lg:py-4 border border-gray-200 rounded-xl hover:bg-gray-50/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md group backdrop-blur-sm">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#000">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">Apple</span>
        </button>
      </div>
    </div>
  )
}