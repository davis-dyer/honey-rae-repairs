import React from 'react'
import { useState } from 'react'
import { TicketList } from './TicketList'
import TicketSearch from './TicketSearch'

const TicketContainer = () => {

    const [searchTerms, setSearchTerms] = useState("")

    return (
        <>
            <TicketSearch setterFunction={setSearchTerms} />
            <TicketList searchTermState={searchTerms} />
        </>
    )
}

export default TicketContainer