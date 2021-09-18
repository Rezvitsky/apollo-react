import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_RATES } from './graphql/queries'

import RateItem from './components/RateItem'
import CurrencyItem from './components/CurrencyItem'

function App() {

  const { loading, error, data } = useQuery(GET_RATES, {
    variables: {
      currency: 'USD'
    }
  })

  if (loading) return null
  if (error) return `Error! ${error}`
  
  return (
    <div className="flex justify-center items-center mt-6 h-full lg:h-screen overflow-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <RateItem rates={data.rates} />
      <CurrencyItem rates={data.rates} />
      </div>
    </div>
  )
}

export default App
