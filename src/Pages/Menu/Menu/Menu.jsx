import { Helmet } from "react-helmet-async"
import { CoverMenu } from "../../../Components/CoverMenu/CoverMenu"
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import { useMenu } from "../../../Hook/useMenu"
import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle"
import { MenuCategory } from "../MenuCategory/MenuCategory"
export const Menu = () => {
  const [menu] = useMenu()

  const offered = menu.filter(item=> item.category === 'offered');
  const soup = menu.filter(item=> item.category === 'soup');
  const salad = menu.filter(item=> item.category === 'salad');
  const pizza = menu.filter(item=> item.category === 'popular');
  const desserts = menu.filter(item=> item.category === 'dessert');

  return (
    <div>
          <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <CoverMenu img={menuImg} title={"our menu"}></CoverMenu>
        <SectionTitle subHeading={"Don't Miss"} heading={"Today's offers"}></SectionTitle>
        {/* offered menu items */}
         <MenuCategory items={offered}></MenuCategory>
         {/* desserts menu items */}
         <MenuCategory
         items={desserts}
         title={"Dessert"}
         img={dessertImg}
         ></MenuCategory>
         <MenuCategory
         items={pizza}
         title={"Pizza"}
         img={pizzaImg}
         ></MenuCategory>
         <MenuCategory
         items={salad}
         title={"Salad"}
         img={saladImg}
         ></MenuCategory>
         <MenuCategory
         items={soup}
         title={"Soup"}
         img={soupImg}
         ></MenuCategory>
    </div>
  )
}
