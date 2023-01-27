import { Outlet, Route, Routes } from "react-router-dom"
import CustomerDetails from "../customers/CustomerDetails"
import CustomerList from "../customers/CustomerList"
import CustomerForm from "../profile/CustomerForm"
import { TicketForm } from "../serviceTickets/TicketForm"
import { TicketEdit } from "../tickets/TicketEdit"
import { TicketList } from "../tickets/TicketList"

export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketList /> } />
				<Route path="ticket/create" element={ <TicketForm /> } />
				<Route path="profile" element={ <CustomerForm /> } />
				<Route path="customers" element={ <CustomerList /> } />
                <Route path="customers/:customerId" element={ <CustomerDetails /> } />
                <Route path="tickets/:ticketId/edit" element={ <TicketEdit /> } />
            </Route>
        </Routes>
    )
}