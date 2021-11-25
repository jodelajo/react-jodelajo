import React, { createContext, useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

export const PortfolioContext = createContext({})

export default function PortfolioContextProvider( { children } ) {
const [portData, setData] = useState()
let currentId = 1
const contextData = portfolio.map((port)=> ({...port, id: currentId++}))

useEffect(()=>{
    setData(contextData)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
console.log(portData);

const data = {
    portData
}
    return (
        <PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>
    )

}