import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center m-2'>
            <img className='mx-auto'  src={logo} alt="" />
            <p className='text-2xl m-2'>Always Ride for truth, never Betray</p>
            <p className='text-xl m-2'>{moment().format('MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;