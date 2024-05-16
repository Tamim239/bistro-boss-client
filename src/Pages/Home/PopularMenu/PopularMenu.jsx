
import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle"
import { MenuItem } from "../../../Components/MenuItem/MenuItem";
import { useMenu } from "../../../Hook/useMenu";

export const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item=> item.category === 'popular');
  return (
    <section className="mb-12 ">
        <SectionTitle 
        heading={"from our menu"}
        subHeading={"Check it Out"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                popular?.map(item => <MenuItem key={item?._id} item={item}></MenuItem>)
            }
        </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4">View More</button>
      </div>
    </section>
  )
}
