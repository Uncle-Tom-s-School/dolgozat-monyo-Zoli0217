export type BeerType = {
  image: string,
  name: string,
  abv: string,
  volume: string,
  price: string,
  available: boolean,

}

const BeerCard = (props: BeerType) => {
  return (
    <div className='beerCard'>
      <img src={props.image} alt="" />
      <strong>{props.name} {props.abv} {props.volume}</strong>
      <p>{props.price} Ft</p>
      <strong className={props.available? "available" : "notAvailable"}>{props.available ? "Raktáron" : "Nem elérhető"}</strong>
    </div>
  )
}

export default BeerCard