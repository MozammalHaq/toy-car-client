import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee"
import Gall from './Gall';


const Gallery = () => {
    const [toys, setToys] = useState([]);

    const url = 'https://toy-car-server-vert.vercel.app/gallery'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-semibold text-center my-8 text-primary">Gallery</h2>            <Marquee>
                {
                    toys.map(toy => <Gall
                        key={toy._id}
                        toy={toy}
                    ></Gall>)
                }
            </Marquee>
        </div>
    );
};

export default Gallery;