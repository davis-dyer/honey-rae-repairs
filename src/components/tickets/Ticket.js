import React from 'react'
import { Link } from 'react-router-dom'

const Ticket = ({ticketObject, isStaff}) => {
    return 
    <section className='ticket' key={`ticket--${ticketObject.id}`}>
        <header>
            {
               isStaff ? (
                   `Ticket ${ticketObject.id}`
               ) : (
                    <h2>Nothing</h2>
               ) 
            }
        </header>
        <section>{ticketObject.description}</section>
        <footer>Emergency: {ticketObject.emergency ? "🧨" : "No"}</footer>
    </section>
}

export default Ticket