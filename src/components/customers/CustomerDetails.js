import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const CustomerDetails = () => {

    const {customerId} = useParams()

    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&embed=customerTickets&userId=${customerId}`)
                .then(res => res.json())
                .then(
                    (data) => {
                        const singleCustomer = data[0]
                        updateCustomer(singleCustomer)
                    }
                )
        },
        [customerId]
    )

  return (
    <section className="employee">
        <header>{customer?.user?.fullName}</header>
        <div>Phone Number: {customer?.user?.phoneNumber}</div>
        <div>Address: {customer.address}</div>
    </section>
  )
}

export default CustomerDetails