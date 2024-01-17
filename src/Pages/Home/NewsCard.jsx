

const NewsCard = ({news}) => {
    const {title, thumbnail_url, details} = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16 border-2">

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={thumbnail_url} alt="Shoes" /></figure>

                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;