import axios from "axios";
import { useEffect, useState } from "react";
import { NewsStyle } from "./news.style";

export const News = () => {
    const url = "https://api.mediehuset.net/bakeonline/news";
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get(url).then((data) => {
            console.log(data.data.items);
            setNews(data.data.items.slice(0, 3));
        });
    }, []);

    return (
        <NewsStyle>
            <div className="grid">
                {news.map((data) => {
                    return( 
                    <div className="news" key={data.id}>
                        <img src={data.image} alt="Billed" />
                        <h2>{data.title}</h2>
                        <p>{data.teaser}</p>
                    </div>
                    )
                
                })}
            </div>            
        </NewsStyle>

    );
};