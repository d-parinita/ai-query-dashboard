'use client'
import { useRouter } from "next/navigation";
import Layout from "./Components/Layout";
import { routes } from "./utils/routes";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const getUser = localStorage.getItem('user')
    if (!getUser) {
      router.push(routes.SIGNIN)
      return
    }
    router.push(routes.DASHBOARD)
  }, [])
  
  return (
    <>
      <Layout></Layout>
    </>
  );
}
