import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




export default function PMC() {
    return (
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
                  
                    <TabPanel>
                        <div className="overflow-auto notscrollbar flex flex-wrap min-w-min h-xxxxxl mt-0 mb-0 gap-x-7 gap-y-7 items-start justify-center">

                         
                        </div>
                    </TabPanel>    
            </Tabs>
        </div>
    )
}
