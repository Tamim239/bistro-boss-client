
export const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="flex space-x-2">
        <img style={{borderRadius: '0 200px 200px 200px'}} className="w-24" src={image} alt="" />
        <div>
            <h3 className="uppercase">{name}--------</h3>
            <p className="text-yellow-500">{recipe}</p>
        </div>
        <p>${price}</p>
    </div>
  )
}
