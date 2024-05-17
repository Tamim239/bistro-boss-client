import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CoverMenu } from '../../Components/CoverMenu/CoverMenu'
import shopImg from '../../assets/shop/banner2.jpg'
import { useState } from 'react';
import { useMenu } from '../../Hook/useMenu'; 
import { OrderTab } from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

export const Oder = () => {
const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
const {category} = useParams()
console.log(category)
const initialIndex = categories.indexOf(category)

    const [menu] = useMenu()
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const drinks = menu.filter(item=> item.category === 'drinks');
  const soup = menu.filter(item=> item.category === 'soup');
  const salad = menu.filter(item=> item.category === 'salad');
  const pizza = menu.filter(item=> item.category === 'popular');
  const desserts = menu.filter(item=> item.category === 'dessert');

  return (
    <div>
        <CoverMenu img={shopImg} title={"Our Shop"}></CoverMenu>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  <TabPanel>
   <OrderTab items={salad}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={desserts}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}/>
  </TabPanel>
</Tabs>
    </div>
  )
}
