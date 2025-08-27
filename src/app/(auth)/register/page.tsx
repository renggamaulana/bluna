import RegisterForm from "@/components/forms/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
      <p className="text-gray-500">Join us today, it’s free!</p>
      <RegisterForm />
    </div>
  )
}
