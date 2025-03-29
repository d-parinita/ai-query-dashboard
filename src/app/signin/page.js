'use client'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "../apiService";
import { routes } from "../utils/routes";

export default function Page() {

  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: 'test@gmail.com',
    password: '123456',
  })

  const handleSignIn = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (loginData?.password.length < 6) {
      return toast.error('Password length should be more then 6 characters')
    }
    if (!regex.test(loginData?.email)) {
      return toast.error('Email is invalid')
    }
    const userData = {
      email: loginData?.email,
      token: signIn()
    }
    localStorage.setItem('user', JSON.stringify(userData))
    toast.success('Signed in successfully')
    router.push(routes.DASHBOARD)
  }

  useEffect(() => {
    const getUser = localStorage.getItem('user')
    if (getUser) {
      router.push(routes.DASHBOARD)
      return
    }
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className={'pb-2'}>Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={loginData?.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className={'pb-2'}>Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={loginData?.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                required
              />
            </div>
            <Button onClick={handleSignIn} className="w-full my-5">
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
