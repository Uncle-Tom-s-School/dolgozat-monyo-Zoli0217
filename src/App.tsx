import { useEffect, useState } from "react"
import BeerCard from "./components/BeerCard"
import type { BeerType } from "./components/BeerCard"

const App = () => {

  const [beer, setBeer] = useState<BeerType[]>([])

  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setBeer(data))
  }, [])

  return (
    <div className="beerCardWrapper">
      {beer.map(item => <BeerCard {...item}/> )}
    </div>
  )
}

export default App