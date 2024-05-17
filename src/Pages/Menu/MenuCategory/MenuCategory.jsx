import { Link } from "react-router-dom"
import { CoverMenu } from "../../../Components/CoverMenu/CoverMenu"
import { MenuItem } from "../../../Components/MenuItem/MenuItem"

export const MenuCategory = ({items, title, img}) => {
  return (
    <div className="pt-8">
        { title && <CoverMenu img={img} title={title}></CoverMenu>}
         <div className="grid md:grid-cols-2 gap-10 my-16">
            {
                items?.map(item => <MenuItem key={item?._id} item={item}></MenuItem>)
            }
        </div>
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4">Order Food</button>
        </Link>
    </div>
  )
}
