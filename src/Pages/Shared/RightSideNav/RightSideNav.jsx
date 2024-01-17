import { FaGoogle,FaGithubSquare,FaFacebook,FaTwitterSquare,FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
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
            <div className='border m-2 p-4 space-y-3'>
                <div>
                    <h2 className="text-3xl">Find Us on</h2>
                </div>
                <a className='flex p-4 items-center border rounded-t-lg' href=''> 
                    <FaFacebook className='mr-3 text-lg'></FaFacebook> 
                    <span className='text-lg'>Facebook</span>
                </a>
                <a className='flex p-4 items-center border rounded-t-lg' href=''> 
                    <FaTwitterSquare className='mr-3 text-lg'></FaTwitterSquare>
                    <span className='text-lg'>Twitter</span>
                </a>
                <a className='flex p-4 items-center border rounded-t-lg' href=''> 
                    <FaInstagram className='mr-3 text-lg'></FaInstagram> 
                    <span className='text-lg'>Instagram</span>
                </a>
            </div>

            <div className='border m-2 p-4 space-y-3'>
                <div>
                    <h2 className="text-3xl">Q zone</h2>
                </div>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;