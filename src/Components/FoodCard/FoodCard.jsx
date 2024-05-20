import Swal from "sweetalert2";
import { useAuth } from "../../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";
import { useCart } from "../../Hook/useCart";

export const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();

const handleAddToCart = () =>{
  if(user && user.email){
    // add to cart product
    const cartItem = {
      menuId: _id,
      email: user?.email,
      name, image, price
    }
    axiosSecure.post('/carts', cartItem)
    .then(res=>{
      console.log(res.data)
      if(res.data?.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} added successfully`,
          showConfirmButton: false,
          timer: 1500
        });
        // refetch the card to update cart
      }
      refetch();
    })
    
  }
  else{
    Swal.fire({
      title: "You are not Logged in?",
      text: "please login fast!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
    }).then((result) => {
      if (result.isConfirmed) {
      //  send the user login page
      navigate("/login", {state: {from: location}} )
      }
    });
  }
}

  return (
    <div className=" bg-base-100 shadow-xl">
  <figure><img src={image} alt="food" /></figure>
  <p className="absolute right-0 mt-4 mr-4 px-2 bg-black text-white">{price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button
      onClick={handleAddToCart}
      className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
    </div>
  </div>
</div>
  )
}
