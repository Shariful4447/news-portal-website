import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>
        {
            fetch('./data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
        },[])
    return (
        <div className="border space-y-4">
            <h2 className='text-2xl'>All Category : {categories.length}</h2>
            {
                categories.map(category => <Link className="block text-xl ml-4 font-semibold"
                key={category.id}
                to={`/category/${category.id}`}
                >
                    {category.name}
                    </Link>)
            }
        </div>
    );
};

export default LeftSideNav;