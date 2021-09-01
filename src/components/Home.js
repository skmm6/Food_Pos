import React from 'react'
import search from '../assets/img/Base.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dishсard from './Dishсard'
import Dropdown from 'react-dropdown';
import '../css/react-dropdown.css';


const options = [
    'Dine In', 'To Go', 'Delivery',
  ];

const defaultOption = options[0];

export default function Home() {
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
                    <div className="">
                        <form>
                                <label className=" bg-in-gray p-4 rounded-lg border border-input-gray flex">
                                <img className="w-5 h-5" src={search} alt="Search" />
                                <input className="ml-3 bg-in-gray focus:placeholder-in-gray focus:outline-none text-sm" type="text" name="name" placeholder="Search for food, coffe, etc"/>
                                </label>
                        </form>
                        
                    </div>
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
                        <Dropdown options={options}  value={defaultOption} />
                   </div>
                    <TabPanel>
                        <div className="overflow-auto notscrollbar flex flex-wrap min-w-min h-xxxxxl mt-0 mb-0 gap-x-7 gap-y-7 items-start justify-center">
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                        </div>
                    </TabPanel>    
                    
                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                         <Dishсard/>
                        </div>
                    </TabPanel>
                </Tabs>
                </div>
            </div>
            <div className=" min-w-409 flex flex-col basedark p-6 bg-basedark rounded-l-md">
                <h1 className=" mb-8  text-xl font-semibold leading-10">Orders #34562</h1>   
                <div className="flex gap-x-2">
                    <button className=" pl-3 pr-3 pt-2 pb-2 text-sm font-semibold leading-5 bg-navitem text-white rounded-lg flex justify-center items-center">Dine In</button>
                    <button className=" pl-3 pr-3 pt-2 pb-2 text-sm font-semibold leading-5  text-navitem border-solid border border-input-gray rounded-lg flex justify-center items-center">To Go</button>
                    <button className=" pl-3 pr-3 pt-2 pb-2 text-sm font-semibold leading-5  text-navitem border-solid border border-input-gray rounded-lg flex justify-center items-center">Delivery</button>
                </div>
            </div>
        </div>
    )
}
