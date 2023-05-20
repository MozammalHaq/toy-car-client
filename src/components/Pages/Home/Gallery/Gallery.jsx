import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee"
import Gall from './Gall';


const Gallery = () => {
    const [toys, setToys] = useState([]);

    const url = 'http://localhost:5000/gallery'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <Marquee>
            {
                toys.map(toy => <Gall
                    key={toy._id}
                    
                ></Gall>)
            }
        </Marquee>
    );
};

export default Gallery;