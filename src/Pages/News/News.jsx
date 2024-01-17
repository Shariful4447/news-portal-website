import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const {id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2>Details News coming</h2>
                    <p>{id}</p>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-col">
                                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-full max-w-80 h-full max-h-96 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <Link className="btn btn-primary" to='/'>Back to Home</Link>
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;