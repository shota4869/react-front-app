
import { Setting } from "../components/pages/Setting";
import { Usermanagement } from "../components/pages/Usermanagement";

export const homeRoutes = [
    {
        path:"/user_management",
        children: <Usermanagement />
    },
    {
        path:"/setting",
        children: <Setting />
    }
]
