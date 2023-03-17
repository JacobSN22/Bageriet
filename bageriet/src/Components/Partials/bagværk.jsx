import axios from "axios";
import { useEffect, useState } from "react";
import { BagværkStyle } from "./bagværk.style";
import { BagværkCard } from "./BagværkCard";

export const Bagværk = () => {
    const url = "https://api.mediehuset.net/bakeonline/products";
    const [bagværk, setBagværk] = useState([]);
    useEffect(() => {
        axios.get(url).then((data) => {
            console.log(data.data.items);
            setBagværk(data.data.items.slice(0, 6));
        });
    }, []);

    return (
        <BagværkStyle>
            <div className="grid">
                {bagværk.map((data, i) =>
                    <BagværkCard data={data} key={i}/>
                )}
            </div>            
        </BagværkStyle>
    );
};