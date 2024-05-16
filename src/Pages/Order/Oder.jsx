import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CoverMenu } from '../../Components/CoverMenu/CoverMenu'
import shopImg from '../../assets/shop/banner2.jpg'
import { useState } from 'react';
import { useMenu } from '../../Hook/useMenu';

export const Oder = () => {
    const [menu] = useMenu()
    const [tabIndex, setTabIndex] = useState(0)
    const offered = menu.filter(item=> item.category === 'offered');
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
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
    </div>
  )
}
