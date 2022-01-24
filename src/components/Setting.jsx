import React, { useState } from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import DishсardEdit from './items/DishcardEdit';
import axios from 'axios';








const Setting = () => {


    const [modifiedData, setModifiedData] = useState({
       title:"",
       price:"",
       sum:"",
      });
      
      const handleChange = ({ target: { name, value } }) => {
        setModifiedData(prev => ({
          ...prev,
          [name]: value,
        }));
      };
      const [errorRestaurants, setErrorRestaurants] = useState(null);

      const handleSubmit = async e => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:1337/foods', modifiedData);
          console.log(response);
        } catch (error) {
          setErrorRestaurants(error);
        }
      };


    
return (
<div className=" flex text-white   bg-bacdark p-6 pb-0   ">

    <div className="flex flex-col  ">
        <h1 className="text-3xl font-semibold leading-10">
            Settings
        </h1>
        <div className=' flex p-5  '>
            <div className=' flex min-w-409 flex-col bg-basedark  rounded-lg m-2 border-black '>
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
            <div className='flex w-96 ml-5 justify-start flex-col bg-basedark  rounded-lg m-2 border-black'>
            
            <div className='flex p-6 justify-center'>
                <h2 className=' text-3xl font-semibold leading-10 '>
                    Add new dish
                </h2>
            </div>
            <div className="flex flex-col justify-center p-6 justify-items-center gap-x-10">

          <div>
          {modifiedData.name}
          </div>
          <form onSubmit={handleSubmit}> 
          <input
                    className="form-input w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    id='name'
                    type='text'
                    placeholder='New dish title' 
                    value={modifiedData.title} onChange={handleChange}
                    name='title'
                 />
                 

                <input
                    className="form-input w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    id='num'
                    type='number'
                    placeholder='New dish value' 
                    value={modifiedData.sum} onChange={handleChange}
                    name='sum'
                 />
                 <input
                    className="form-input w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    id='num'
                    type='number'
                    placeholder='New dish price' 
                    value={modifiedData.price} onChange={handleChange}
                    name='price'
                 />
                 {/* <input
                    className="form-input w-full p-2 text-gray-700 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    id='num'
                    type='image'
                    placeholder='New dish price' 
                 /> */}
                 <button className=''>
                      <span className=' w-56 h-12 flex items-center justify-center border rounded-lg border-navitem text-navitem hover:border-red hover:text-red focus:border-red focus:text-red'>
                          <i className="icon-plus">Add new dish</i>
                      </span>
                 </button>

          </form>
                
                 

            
             

             </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Setting;