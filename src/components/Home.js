import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                Myself <span>Balamurugan.T</span>
            </div>
            <div className="des">
                {/* 30 */}
                Enthusiastic second-year Computer Science and Engineering (CSE) student eager to leverage foundational knowledge and specialized skills in technology to contribute effectively to innovative projects. Seeking internship, parti-time or volunteer opportunities to further enhance expertise and make meaningful contributions in the field of Webdevelopement.
           </div>
            
            <a href="/T. Balamurugan Resume 1.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>Indian</div>
                    <div>20/01/2K'6</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
