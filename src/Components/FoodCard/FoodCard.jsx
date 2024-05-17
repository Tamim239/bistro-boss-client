
export const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className=" bg-base-100 shadow-xl">
  <figure><img src={image} alt="food" /></figure>
  <p className="absolute right-0 mt-4 mr-4 px-2 bg-black text-white">{price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
  )
}
