import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CategoriesStyle } from "./categories.style";

export const Categories = () => {
    const url = "https://api.mediehuset.net/bakeonline/categories";
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(url).then((data) => {
            console.log(data.data.items);
            setCategories(data.data.items.slice(0, 5));
        });
    }, []);

    return (
            <div className="grid">
                {categories.map((data) => {
                    return( 
                        <CategoriesStyle>
                    <div className="products" key={data.id}>
                        <li><NavLink>{data.title}</NavLink></li>
                    </div>
                    </CategoriesStyle>
                    )
                
                })}
            </div>

    );
};