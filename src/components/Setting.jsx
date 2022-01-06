import React from 'react'
import { Tab, TabPanel, Tabs, TabList } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Dishсard from './items/Dishсard'
import Modal from './items/Modal/Modal';





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
            <Tabs>
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
                    const [modalActive, setModalActive] = useState (true)
                    <div
                        className="overflow-auto notscrollbar flex flex-wrap min-w-min h-xxxxxl mt-0 mb-0 gap-x-7 gap-y-7 items-start ">
                        <div className=' w-48 h-72  bg-basedark ml-3.5 pt-0 rounded-2xl flex flex-col justify-center items-center content-center overflow-visible  border-2 border-dashed border-danger mt-0'>
                            <button className='flex text-base flex-col items-center p-3 border-dashed' onClick={() => setModalActive(true)}>
                                
                              <div className="icon-plus border rounded border-solid text-2xl     border-danger "></div>
                                Add new dish
                                <Modal active={modalActive} setActive={setModalActive} />
                            </button>
                        </div>
                        <div className='flex flex-col '>
                        <Dishсard />
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
            </Tabs>

        </div>
    </div>
</div>
)
}

export default Setting;