'use client'
import { Tab, TabList, TabPanel, Tabs as Tb } from 'react-tabs';
import UpsertProfileForm from "../Auth/UpsertProfileForm";
import TourPackage from '../TourPackage';
const Tabs = ({ data }: any) => {
    console.log(data);

    return (
        <Tb className="tabs" selectedTabClassName='tab-active'>
            <TabList>
                <Tab className="tab tab-lifted">პაკეტი</Tab>
                {/* <Tab>სქრინები</Tab> */}
                <Tab>პროფილის რედაქტირება</Tab>
            </TabList>
            <TabPanel>
                <TourPackage
                    id={7}
                // id={data.tour} 
                />
            </TabPanel>
            {/* <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel> */}
            <TabPanel>
                <UpsertProfileForm defaults={{ ...data }} />
            </TabPanel>
        </Tb>
    )
}

export default Tabs