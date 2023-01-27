import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


export const TicketEdit = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [ticket, assignTicket] = useState({
        description: "",
        emergency: false
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const { ticketId } = useParams()
   const navigate = useNavigate()

   useEffect(() => {
        return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`)
            .then(res => res.json())
            .then(
                (data) => {
                    assignTicket(data)
                }
            )

    }, [ticketId])


    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
        // TODO: Create the object to be saved to the API
        /* {
            "id": 3,
            "userId": 1,
            "description": "Sunt pariatur et quidem hic voluptatem. Neque aliquam voluptas eos incidunt repellendus. Vero expedita non sit quaerat sit et eum. Quasi dolor voluptatem illum eum qui est expedita sequi accusamus.",
            "emergency": false,
            "dateCompleted": ""
          }, */
          return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
            method: "PUT",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
          })
          .then(res => res.json())
          .then(() => {
            navigate("/tickets")
          })
          }


    return <form className="ticketForm">
        <h2 className="ticketForm__title">Service Ticket</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={ticket.description}
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                            const copy = {...ticket}
                            copy.description = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.description}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Emergency:</label>
                <input type="checkbox"
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                            const copy = {...ticket}
                            copy.emergency = evt.target.checked
                            assignTicket(copy)
                        }
                    } />
            </div>
        </fieldset>
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
}