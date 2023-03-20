import axios from "axios";
import { useEffect, useState } from "react";
import { ProductListStyle } from "./ProductsList.style";

export const ProductsList = () => {
    const url = "https://api.mediehuset.net/bakeonline/products";
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        axios.get(url).then((data) => {
            console.log(data.data.items);
            setProductsList(data.data.items.slice(0, 6));
        });
    }, []);

    return (
        <ProductListStyle>
            <div className="grid">
                {productsList.map((data) => {
                    return( 
                    <div className="news" key={data.id}>
                        <img src={data.image.fullpath} alt="Billed" />
                        <h2 className="comments">{data.num_comments}</h2>
                        <h2>{data.title}</h2>
                        <p>{data.teaser.substring(0, 90)}</p>
                        <button>SE MERE</button>
                    </div>
                    )
                
                })}
            </div>
            </ProductListStyle>            

    );
};