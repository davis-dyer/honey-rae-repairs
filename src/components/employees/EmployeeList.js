import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Employee from './Employee'

const EmployeeList = () => {

    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            return fetch(`http://localhost:8088/users?isStaff=true`)
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )

    return (
        <article className='employees'>
            {
                employees.map(employee => <Employee id={employee.id} fullName={employee.fullName} email={employee.email} key={`employee--${employee.id}`} />)
            }
        </article>   
  )
}

export default EmployeeList