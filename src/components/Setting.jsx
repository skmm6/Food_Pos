import React, { useState } from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import DishсardEdit from './items/DishcardEdit';








const Setting = () => {
    
return (
<div className=" flex text-white   bg-bacdark p-6 pb-0   ">

    <div className="flex flex-col  ">
        <h1 className="text-3xl font-semibold leading-10">
            Settings
        </h1>
        <div className=' flex p-5 '>
            <div className=' flex justify-between flex-col bg-basedark  rounded-lg m-2 border-black '>
            <h1 className='text-xl font-semibold leading-10 pt-6 pl-6 font-sans'>
                Products Managment
            </h1>
            

            <div className='flex pl-6 '>
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
                       <DishсardEdit idCateg={'1'}/>  
                   
                    </div>  
                    </TabPanel>    
                    
                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start ">
                    <DishсardEdit idCateg={'2'}/>  
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                        <DishсardEdit idCateg={'3'}/>  
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <DishсardEdit idCateg={'4'}/>  
                        </div>
                    </TabPanel>

                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <DishсardEdit idCateg={'5'}/>  
                        </div>
                    </TabPanel>
                    <TabPanel className="">
                    <div className="overflow-auto notscrollbar flex flex-wrap max-w-7xl h-xxxxxl mt-0 mb-0 gap-x-5 gap-y-5 items-start">
                         <DishсardEdit idCateg={'6'}/>
                        </div>  
                    </TabPanel>
                </Tabs>
                </div>


            </div>
            <div className='flex ml-5 justify-between flex-col bg-basedark  rounded-lg m-2 border-black'>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, recusandae.</h1>
            </div>
        </div>
    </div>
</div>
)
}

export default Setting;