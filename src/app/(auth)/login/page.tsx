import LoginForm from "@/components/forms/LoginForm"

export default function LoginPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
      <p className="text-gray-500">Login to your account</p>
      <LoginForm />
    </div>
  )
}
