import React, { useState } from 'react'
import './index.css'
import ComposeTweet from "../../components/ComposeTweet/index";
import { Drawer } from 'antd';
import stars from "../../Assets/img/stars.png";

const UserPage = () => {
    const [darwerVisisble, setDarwerVisisble] = useState(true)

    return (
        <>
            <div className=" " id="Userpage">
                <div className="text-blue-500 flex justify-evenly">

                    <div className="lg:w-3/12 heightFull text-right  ">
                       
                    </div>

                    {/* div for compose tweet and tweets */}
                    <div className="lg:w-5/12 heightFull w-12/12" id="border">

                        <div className=" flex justify-between p-4 items-center" id="border">
                            <span className="text-white font-bold text-center flex items-center" id="home">
                                <img
                                    className="rounded-full w-10 lg:invisible lg:w-0"
                                    src="https://pbs.twimg.com/profile_images/1367267802940375042/H4JDd6aC_400x400.jpg"
                                    onClick={() => setDarwerVisisble(!darwerVisisble)}
                                    alt="profile_images"
                                />
                                <h1 className="lg:m-0 ml-6 ">Home</h1>
                            </span>
                            <img src={stars} alt="" id="star" className="h-6 w-6" />
                        </div>

                        <div id="border">
                            <ComposeTweet />
                        </div>
                    </div>

                    {/* div for all news*/}
                    <div className="lg:w-3/12 heightFull text-left lg:pl-20">tyui</div>
                </div>
            </div>
        </>
    )
}

export default UserPage
