import LoginForm from "@/components/forms/LoginForm"

export default function LoginPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-gray-500 text-xl font-semibold">Login to your account</h1>
      <LoginForm />
    </div>
  )
}
