import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center m-2'>
            <img  src={logo} alt="" />
            <p className='text-2xl'>Always Ride for truth, never Betray</p>
            <p className='text-xl'>{moment().format('MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;