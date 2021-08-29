import React from 'react'
import search from '../assets/img/Base.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dishсard from './Dishсard'


export default function Home() {
    return (
        <div className=" flex text-white flex-grow">
            <div className="flex bg-bacdark p-6 pb-0 flex-grow flex-col">
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
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>

                    <TabPanel className="">
                        <div className="overflow-auto notscrollbar flex flex-wrap max-w-2xl h-xxxxxl mt-0 mb-0 ml-auto mr-auto gap-x-5 gap-y-5">
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
                        <div className="overflow-auto notscrollbar flex flex-wrap max-w-2xl h-xxxxxl mt-0 mb-0 ml-auto mr-auto gap-x-5 gap-y-5">
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
                <div className="flex">
                
                </div>
                <div></div>
            </div>
            <div className="flex basedark w-96">
                
            </div>
        </div>
    )
}
