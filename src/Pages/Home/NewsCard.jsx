import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title, thumbnail_url, details} = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16 border-2">

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                    {
                        details.length > 200 ?<p>{details.slice(0,200)}<Link className="text-blue-500"> Read More..</Link> </p>
                        :
                        <p>{details}</p>
                    }

                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;