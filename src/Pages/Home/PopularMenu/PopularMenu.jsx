import { useEffect, useState } from "react"
import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle"
import { MenuItem } from "../../../Components/MenuItem/MenuItem";

export const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch('/menu.json')
    .then(res => res.json())
    .then(data =>{
        const popularMenu = data.filter(item=> item.category === 'popular');
        setMenu(popularMenu)
    })

  },[])


  return (
    <section className="mb-12 ">
        <SectionTitle 
        heading={"from our menu"}
        subHeading={"Check it Out"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                menu?.map(item => <MenuItem key={item?._id} item={item}></MenuItem>)
            }
        </div>

    </section>
  )
}
