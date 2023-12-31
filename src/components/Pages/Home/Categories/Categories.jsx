import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-car-server-vert.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <Tabs className="py-20 bg-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-semibold text-center mb-8 text-primary">Shop By Category</h2>
                <TabList>
                    <Tab>All Car</Tab>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Police Car</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            toys.map(toy => <Category
                                key={toy._id}
                                toy={toy}
                            ></Category>)
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default Categories;