import {createBrowserRouter} from "react-router-dom";
import {Root} from "../../Root.jsx";
import {Home} from "../user/Home/Home.jsx";
import {CategoryDetails} from "../Categories/CategoryDetails.jsx";
import {Login} from "../auth/Login.jsx";
import {Register} from "../auth/Register.jsx";
import {Verify} from "../auth/Verify.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[{
            path:'/',
            element:<Home></Home>
        },{
            path:'CategoreisDetails/:categoryId',
            element:<CategoryDetails></CategoryDetails>
        },{
            path:'/Login',
            element:<Login></Login>
        },
            {
                path:'/Register',
                element:<Register></Register>

            },{
            path:'/Verify',
                element:<Verify></Verify>
            }]
    }
])
export default router