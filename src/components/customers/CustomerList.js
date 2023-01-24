import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Customer from './Customer'



const CustomerList = () => {

    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            return fetch(`http://localhost:8088/users?isStaff=false`)
                .then(res => res.json())
                .then((customerArr) => {
                    setCustomers(customerArr)
                })
        },
        []
    )

    return (
        <article className='customers'>
            {
                customers.map(customer => <Customer id={customer.id} fullName={customer.fullName} address={customer.address} phoneNumber={customer.phoneNumber} key={`customer--${customer.id}`} />)
            }
        </article>   
  )
}

export default CustomerList