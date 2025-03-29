'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SideMenu from "../SideMenu"
import Navbar from "../Navbar"
import Loader from "../Loader"
import { LoaderProvider } from "@/app/context/LoaderContext"
import { useEffect } from "react"
import { routes } from "@/app/utils/routes"
import { useRouter } from "next/navigation"

export default function Layout({ children }) {

  const router = useRouter()

  useEffect(() => {
    const getUser = localStorage.getItem('user')
    if (!getUser) {
      router.push(routes.SIGNIN)
      return
    }
  }, [])

  return (
    <SidebarProvider>
      <SideMenu />
        <SidebarTrigger className={'z-11'}/>
        <div className="flex flex-col">
          <Navbar/>
        </div>
        <LoaderProvider>
          <Loader/>
          {children}
        </LoaderProvider>
    </SidebarProvider>
  )
}
