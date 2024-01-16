import { FaGoogle,FaGithubSquare } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div className='border m-2 p-4 space-y-3'>
            <div>
                <h2 className="text-3xl">Login Here</h2>
            </div>
            <button className="btn btn-outline w-full text-xl">
                <FaGoogle></FaGoogle>
                Google
                
            </button>
            <button className="btn btn-outline w-full text-xl mt-2">
                <FaGithubSquare></FaGithubSquare>
                GIthub
                
            </button>

        </div>
    );
};

export default RightSideNav;