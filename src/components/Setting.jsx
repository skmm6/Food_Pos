import React, { useState } from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Dishсard from './items/Dishсard'








const Setting = () => {
    
return (
<div className=" flex text-white   bg-bacdark p-6 pb-0   ">

    <div className="flex flex-col  ">
        <h1 className="text-3xl font-semibold leading-10">
            Settings
        </h1>
        <div className=' flex justify-between flex-col h-screen w-screen bg-basedark  rounded-lg m-2 border-black max-w-3xl '>
            <h1 className='text-xl font-semibold leading-10 pt-6 pl-6 font-sans'>
                Products Managment
            </h1>
            {/* <Tabs>
                <div className=' flex pl-6'>
                <TabList>
                    <Tab>Hot Dishes</Tab>
                    <Tab>Cold Dishes</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Grill</Tab>
                    <Tab>Appetizer</Tab>
                    <Tab>Dessert</Tab>
                </TabList>
                </div>
                

                <TabPanel>
                    
                    <div
                        className="overflow-auto notscrollbar flex flex-wrap min-w-min h-xxxxxl mt-0 mb-0 gap-x-7 gap-y-7 items-start ">
                        <div className=' w-48 h-72  bg-basedark ml-3.5 pt-0 rounded-2xl flex flex-col justify-center items-center content-center overflow-visible  border-2 border-dashed border-red-900 mt-0'>
                            <button className='flex text-base flex-col items-center p-3 border-dashed border-danger' >
                                
                              <div className="icon-plus border rounded border-solid text-2xl border-danger"></div>
                                Add new dish
                               
                            </button>
                        </div>
                        <div className='flex flex-col '>
                        
                        <button>
                            Edit dish
                        </button>
                        </div>
                        <Dishсard />
                        <Dishсard />
                        <Dishсard />
                        <Dishсard />

                    </div>
                </TabPanel>

                <TabPanel className="">
                    <div
                        className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                        <Dishсard />
                        <Dishсard />
                        <Dishсard />
                        
                    </div>
                </TabPanel>

                <TabPanel className="">
                    <div
                        className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                        <Dishсard />
                        <Dishсard />
                        <Dishсard />
                       
                    </div>
                </TabPanel>

                <TabPanel className="">
                    <div
                        className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                        <Dishсard />
                        <Dishсard />
                        <Dishсard />
                        
                    </div>
                </TabPanel>

                <TabPanel className="">
                    <div
                        className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                        <Dishсard />
                        <Dishсard />
                        <Dishсard />
                       
                    </div>
                </TabPanel>

                <TabPanel className="">
                    <div
                        className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                        <Dishсard />
                        <Dishсard />
                        <Dishсard />
                        

                    </div>
                </TabPanel>
            </Tabs> */}

<div className='flex pl-6'>
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
                        
                        {/* <Dropdown options={options}  value={defaultOption} /> */}
                   </div>

                    <TabPanel>
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start ">
                        <Dishсard idCateg={'1'}/>  
                        <button className=' w-56 h-12 flex items-center justify-center border rounded-lg border-navitem text-navitem hover:border-red hover:text-red focus:border-red focus:text-red mt-96'>
                        <i className="icon-edit"> Edit dish</i>
                        </button>
                    </div>  
                    </TabPanel>    
                    
                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start ">
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
    </div>
</div>
)
}

export default Setting;