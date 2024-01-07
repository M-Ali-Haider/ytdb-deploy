import '../assets/styles/video.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import pfp from '../assets/images/pfp.webp'
import noThumbnail from '../assets/images/noThumbnail.webp'
import { Link, useLocation } from 'react-router-dom';
import { format } from 'timeago.js';
import deleter from '../assets/images/delete.svg'
import deleterr from '../assets/images/deleter.svg'
import { useSelector } from 'react-redux';


const ChannelVideo=({resetSidebar,video})=>{

    const { currentUser } = useSelector((state) => state.user);

    const [channel,setChannel]=useState({});
    const [ispop,setPop]=useState(false)

    const path=useLocation().pathname.split("/")[2]
    console.log('path: '+path)
    useEffect(()=>{
        const fetchChannel = async ()=>{
            const res = await axios.get(`/api/users/find/${video.userId}`)
            setChannel(res.data)
        }
        fetchChannel()
    },[video.userId])
    const [thumbnailSrc, setThumbnailSrc] = useState(video.imgUrl);
    const handleThumbnailError = () => {
        setThumbnailSrc(noThumbnail);
    };
    const imgSrc = channel.img? channel.img : pfp
    const handlePop=()=>{
        setPop(!ispop)
    }

    const handleDelete = async () => {
        try {
          await axios.delete(`/api/videos/${video._id}`);
        } catch (error) {console.error('Error deleting video:', error);}
    };
    return(
        <>
        
            <div className="video">
                <div className="video-helper">
                    <Link className='video-link' onClick={resetSidebar} to={`/video/${video._id}`}>
                        <div className="thumbnail">
                            {/* <div className="vid-tt">{video.duration}</div> */}
                            <img src={thumbnailSrc} onError={handleThumbnailError} alt="No Image Found" />
                        </div>
                    </Link>
                    <div className="vid-details">
                        <div className="vid-pfp">
                            <Link className='vid-pfp-link' onClick={resetSidebar} to={`/channel/${channel._id}`}>
                                <img src={imgSrc} alt="bruh" />
                            </Link>
                        </div>
                        <div className="vid-info">
                            <Link onClick={resetSidebar} to={`/video/${video._id}`} className="vid-title">{video.title}</Link>
                            <div className="vid-info-er">
                                <Link className="vid-author-div" onClick={resetSidebar} to={`/channel/${channel._id}`}>
                                    <div className="vid-author">{channel.name}</div>
                                    <svg className="vid-verification" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                                </Link>
                                <Link className="vid-stats-div" onClick={resetSidebar} to={`/video/${video._id}`}>
                                    <div className="vid-views">{video.views} views</div>
                                    <div className="vid-dot"></div>
                                    <div className="vid-time-elapsed">{format(video.createdAt)}</div>
                                </Link>
                            </div>

                        </div>
                        {currentUser._id===path?(
                            <>
                                <div onClick={handlePop} className="bruh-work">
                                    <img src={deleter} alt="" />
                                </div>

                                {ispop?(
                                    <div className="delete-pop">
                                        <Link to={`/channel/${currentUser._id}`} className="delete-pop-unit" onClick={handleDelete}>
                                            <img src={deleterr} alt="" />
                                            <span>Delete</span>
                                        </Link>
                                    </div>
                                ):null}
                            </>
                        ):null}
                    </div>

                </div>
                
                


            </div>
        
        </>
    )
}
export default ChannelVideo;