import axios from "axios";
import { useEffect, useState } from "react";
import { BagværkStyle } from "./bagværk.style";

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
                {bagværk.map((data) => {
                    return( 
                    <div className="bagværk" key={data.id}>
                        <img src={data.image.fullpath} alt="Example" />
                        <h2 className="comments">{data.num_comments}</h2>
                        <h2>{data.title}</h2>
                        <p>{data.teaser} </p> 
                        <button>SE MERE</button>
                    </div>
                    )
                
                })}
            </div>            
        </BagværkStyle>
    );
};