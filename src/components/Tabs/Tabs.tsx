'use client'
import { Tab, TabList, TabPanel, Tabs as Tb } from 'react-tabs';
import UpsertProfileForm from "../Auth/UpsertProfileForm";
import TourPackage from '../TourPackage';
import SocialScreens from '../SocialScreens';

const Tabs = ({ data,userId }: any) => {

    return (
        <Tb
            className=""

            selectedTabClassName='tab-active'>
            <TabList>
                <Tab className="tab tab-lg tab-lifted font-arial-caps">პაკეტი</Tab>
                <Tab className="tab tab-lg tab-lifted font-arial-caps">სქრინები</Tab>
                <Tab className="tab tab-lg tab-lifted font-arial-caps">პროფილის რედაქტირება</Tab>
            </TabList>
            <TabPanel>
                <TourPackage
                    id={data.tour}
                />
            </TabPanel>
            <TabPanel>
                <SocialScreens userId={userId} />
            </TabPanel>
            <TabPanel>
                <UpsertProfileForm defaults={{ ...data }} />
            </TabPanel>
        </Tb>
    )
}

export default Tabs