import React from 'react'

const TicketSearch = ({setterFunction}) => {
  return (
    <div>
        <input 
            type="text"
            placeholder='Enter search terms'
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            } 
        />
    </div>
  )
}

export default TicketSearch