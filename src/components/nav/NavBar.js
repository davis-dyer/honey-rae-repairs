import { CustomerViews } from "../views/CustomerViews"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"
import "./NavBar.css"


export const NavBar = () => {
    const localHoneyUser = localStorage.getItem('honey_user')
    const honeyUserObject = JSON.parse(localHoneyUser)

    if (honeyUserObject.staff){
        return <EmployeeNav />
    } else {
        return <CustomerNav />
    }
}

