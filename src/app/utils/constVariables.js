import { routes } from "./routes"
import { Home } from "lucide-react"

export const columns = [
    {
      accessorKey: "id",
      header: "Id"
    },
    {
      accessorKey: "userId",
      header: "User Id",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "body",
      header: "Body",
    },
]

export const items = [
  {
    title: "AI Query",
    url: routes.DASHBOARD,
    icon: Home,
  }
]