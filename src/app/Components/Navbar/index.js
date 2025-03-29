
'use client'
import { routes } from "@/app/utils/routes";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { toast } from "react-toastify";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [myTheme, setMyTheme] = useState(null)
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem('user')
      toast.success('Logout successfully')
      router.push(routes.SIGNIN)
    }
  }

  useEffect(() => {
    const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    setUser(userData?.email)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setMyTheme(savedTheme)
  }, [theme])

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 shadow-md px-6 py-3 z-10 flex justify-end ${myTheme == 'dark' ? 'bg-[#010000]' : 'bg-white'}`}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 border border-2 rounded-full p-2 focus:outline-none"
        >
          <FiUser className="w-5 h-5" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-4 border border-2 w-40 bg-white text-black rounded-lg overflow-hidden">
            <div className="px-3 py-2 text-xs text-gray-700 bg-gray-100">
               {user}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 text-sm py-2 w-full cursor-pointer"
            >
              <MdLogout className="w-5 h-5" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
