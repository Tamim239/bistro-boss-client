import { useForm } from "react-hook-form";
import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import { useAxiosPublic } from "../../../Hook/useAxiosPublic";
import { useAxiosSecure } from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";


const image_api_key= import.meta.env.VITE_IMAGE_API_KEY
const image_api_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`

export const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const onSubmit = async (data) => {
    console.log(data);
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
const menuRes = await axiosSecure.post('/menu', menuItem)
console.log(menuRes.data)
if(menuRes.data.insertedId){
   // pop un success
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your have added successfully",
    showConfirmButton: false,
    timer: 1500
  });
}

  }

  };

  return (
    <div>
      <SectionTitle
        heading={"add on item"}
        subHeading={"What's New?"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", {required: true})}
              type="text"
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
                <option disabled value="default">
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
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea {...register('recipe', {required: true})}
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
  );
};
