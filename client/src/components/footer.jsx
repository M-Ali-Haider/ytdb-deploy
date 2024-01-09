import '../assets/styles/footer.css';
import home from '../assets/images/home.svg'
import shorts from '../assets/images/shorts.svg'
import subs from '../assets/images/subs.svg'
import you from '../assets/images/you.svg'
import browse from '../assets/images/browse.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Footer=()=>{
    const {currentUser} = useSelector(state=>state.user)
    return(
        <>
        <footer>
            <Link to={`/`} className="footer-unit">
                <img src={home} alt="" />
                <span>Home</span>
            </Link>
            <div className="footer-unit">
                <img src={shorts} alt="" />
                <span>Shorts</span>
            </div>
            <div className="footer-unit ">
                <img className='browse-footer' src={browse} alt="" />
            </div>
            <Link to={currentUser?`/subscriptions`:'/subout'} className="footer-unit">
                <img src={subs} alt="" />
                <span>Subscriptions</span>
            </Link>
            <Link to={currentUser?`/channel/${currentUser._id}`:'/channel'} className="footer-unit">
                <img src={you} alt="" />
                <span>Library</span>
            </Link>
        </footer>
        </>
    )
}
export default Footer;