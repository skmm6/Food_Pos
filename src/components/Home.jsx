import search from '../assets/img/Base.svg'
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dishсard from './items/Dishсard'
import '../css/react-dropdown.css';
import Items from './items/Items';
import React, {useContext} from "react";

import CartContext from '../context/CartContext';
import { useState } from 'react/cjs/react.development';
import ModalForms from './items/ModalForms';






const Home = () => {
    const ctx = useContext(CartContext)

    const [modelForm, setModalForm] = useState(false)

    // const options = [
    //     'Dine In', 'To Go', 'Delivery',
    //   ];
    
    // const defaultOption = options[0];
    


    return (
        <div className=" flex text-white flex-grow">
            <div className="w-full flex bg-bacdark p-6 pb-0 flex-grow flex-col">
                <div className="flex">
                    <div className=" flex-grow ">
                        <h3 className=" text-3xl font-semibold leading-10">
                             Jaegar Resto
                        </h3>
                        <h4 className=" text-base leading-6 text-t-gray font-normal">
                             Tuesday, 2 Feb 2021
                        </h4>
                    </div>
                    {/* <div className="">
                        <form>
                                <label className=" bg-in-gray p-4 rounded-lg border border-input-gray flex">
                                <img className="w-5 h-5" src={search} alt="Search" />
                                <input className="ml-3 bg-in-gray focus:placeholder-in-gray focus:outline-none text-sm" type="text" name="name" placeholder="Search for food, coffe, etc"/>
                                </label>
                        </form>
                        
                    </div> */}
                </div>
                <div>
                <Tabs>
                    <TabList>
                        <Tab>Hot Dishes</Tab>
                        <Tab>Cold Dishes</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Grill</Tab>
                        <Tab>Appetizer</Tab>
                        <Tab>Dessert</Tab>
                    </TabList>

                   <div className="flex  justify-between">
                        <h3 className=" text-xl font-semibold leading-10 mb-10">
                                Choose Dishes
                        </h3>
                        {/* <Dropdown options={options}  value={defaultOption} /> */}
                   </div>
                    <TabPanel>
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                        <Dishсard idCateg={'1'}/> 
                    </div>  
                    </TabPanel>    
                    
                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                    <Dishсard idCateg={'2'}/>  
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                        <Dishсard idCateg={'3'}/>  
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <Dishсard idCateg={'4'}/>  
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <Dishсard idCateg={'5'}/>  
                        </div>
                    </TabPanel>
                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <Dishсard idCateg={'6'}/>
                        </div>  
                    </TabPanel>
                </Tabs>
                </div>
            </div>
            <div className=" min-w-409 flex flex-col basedark p-6 bg-basedark rounded-l-md">
                <h1 className=" mb-8  text-xl font-semibold leading-10">Orders</h1>   
                {/* <div className="flex gap-x-2 mb-7">
                    <button className=" pl-3 pr-3 pt-2 pb-2 text-sm font-semibold leading-5 bg-navitem text-white rounded-lg flex justify-center items-center">Dine In</button>
                    <button className=" pl-3 pr-3 pt-2 pb-2 text-sm font-semibold leading-5  text-navitem border-solid border border-input-gray rounded-lg flex justify-center items-center">To Go</button>
                    <button className=" pl-3 pr-3 pt-2 pb-2 text-sm font-semibold leading-5  text-navitem border-solid border border-input-gray rounded-lg flex justify-center items-center">Delivery</button>
                </div> */}
                <div className=" flex pb-6 border-b border-input-gray"> 
                    <h5 className=" text-base font-semibold leading-6 flex-grow">
                        Item
                    </h5>
                    <h5 className=" text-base font-semibold leading-6 mr-11">
                        Qty
                    </h5>
                    <h5 className=" text-base font-semibold leading-6">
                        Price
                    </h5>
                </div>
                <div className=" mt-6 flex flex-col gap-y-4 overflow-y-auto notscrollbar h-h454">
                            {ctx.cart.length > 0 &&
                    ctx.cart.map((item) => (
                        <Items item={item} key={item.id}/>
                    ))}
                    
                </div>
                <div className="flex flex-col gap-y-4 pt-6 border-t border-input-gray flex-grow">
                    <div className="flex justify-between text-t-2-gray text-sm">
                      Tota: <span className=" font-medium text-white">
                        {
                             ctx.getTotalQuantity()
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-t-2-gray text-sm">
                     Sub total <span className=" font-medium text-white">
                         {
                             ctx.getTotalSumm()
                        } $
                     </span>
                    </div>
                    <button className=" mt-auto text-sm font-semibold leading-5 text-fafafa bg-navitem shadow-itemnav rounded-lg pt-4 pb-4"
                        onClick={() => setModalForm(true)}
                    >Continue to Payment</button>
                </div>
            </div>
            {
                 modelForm && 
                 <button className=' fixed overflow-auto left-0 top-0 w-full h-full bg-black bg-opacity-80 '
                 >
                    <ModalForms/>
                </button>
            }
            
        </div>
    )
}

export default Home;