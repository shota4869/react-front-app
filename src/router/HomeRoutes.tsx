
import { EditAmount } from "../components/pages/EditAmount";
import { Usermanagement } from "../components/pages/Usermanagement";

export const homeRoutes = [
    {
        path:"/user_management",
        children: <Usermanagement />
    },
    {
        path:"/setting",
        children: <EditAmount />
    }
]
