import { useLoaderData } from "react-router-dom"
import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle"
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import { useAxiosPublic } from "../../../Hook/useAxiosPublic";
import { useAxiosSecure } from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_api_key= import.meta.env.VITE_IMAGE_API_KEY
const image_api_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`

export const UpdateItem = () => {
    const { register, handleSubmit}=useForm();
const {_id,name, price, category, recipe } = useLoaderData()

const axiosPublic = useAxiosPublic()
const axiosSecure = useAxiosSecure()

const onSubmit = async (data) =>{
    console.log(data)
    const imageFile = {image: data.image[0]}
    // upload image in hosting side imgBB
      const res = await axiosPublic.post(image_api_url, imageFile,{
        headers:{
          'content-type' : 'multipart/form-data'
        }
      })
      console.log(res.data)
      if(res.data.success){
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image : res.data.data.display_url
        }
    const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
    console.log(menuRes.data)
    if(menuRes.data.modifiedCount > 0){
       // pop un success
    //    reset()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your have added successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
    
      }
}

  return (
    <div>
        <SectionTitle heading={"update an item"} subHeading={"Refresh Info"}></SectionTitle>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", {required: true})}
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-6 items-center">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue="default"
                {...register("category", {required: true})}
                className="select select-bordered w-full"
              >
                <option disabled value={category}>
                  select a category?
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", {required: true})}
                type="number"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea defaultValue={recipe} {...register('recipe', {required: true})}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>

          <div className="form-control w-full my-6">
            <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs" />
          </div>

         <div>
          <button className="btn">
            Add Item <FaUtensils className="ml-4"/>
          </button>
         </div>
        </form>
      </div>

    </div>
  )
}
