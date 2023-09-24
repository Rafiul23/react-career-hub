
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;