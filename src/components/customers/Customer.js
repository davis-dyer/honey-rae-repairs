import React from 'react'
import { Link } from 'react-router-dom'

const Customer = ({id, fullName, address, phoneNumber}) => {
    return (
    <section className='customers'>
        <div>
            <Link to={`/customers/${id}`}>Name: {fullName}</Link>
        </div>
        <div>Address: {address}</div>
        <div>Phone Number: {phoneNumber}</div>
    </section>
  )
}

export default Customer