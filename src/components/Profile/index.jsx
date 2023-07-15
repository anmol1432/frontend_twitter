import React from 'react'
import "./index.css";

const ViewProfile = () => {
    return (
        <>
            <div className="holder">
                <div className='' id='bg-banner'>
                    <img className="w-full " src="https://pbs.twimg.com/profile_banners/1148089534967476225/1593610688/600x200" id='banner' alt="" />
                </div>

                <div id="profile-info">
                    <div className='flex justify-between h-12'>
                        <img className="w-32 h-32 rounded-full relative left-4 border-4 border-black " src="https://pbs.twimg.com/profile_images/1480771362855686145/WNjPqVGK_400x400.jpg" style={{ top: '-60px' }} alt="" />

                        < button type="primary" shape="round" size="large" className="button bg-transparent border-2  rounded-full font-medium text-white px-4  mt-2 mr-4 items-end lg:visible md:invisible invisible" style={{ 'border': '2px solid #1f2937' }}>
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewProfile