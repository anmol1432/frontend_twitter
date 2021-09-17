import React from 'react'
import './index.css'
import ComposeTweet from "../../components/ComposeTweet/index";
import MainLayout from "../../components/MainLayout/index";
import stars from "../../Assets/img/stars.png";

const UserPage = () => {

    return (
        <>
            <MainLayout
                ChildComponent=
                {<>
                    <div className=" flex justify-between p-4 items-center" id="border">
                        <span className="text-white font-bold text-center flex items-center" id="home">
                            <img
                                className="rounded-full w-10 lg:invisible lg:w-0"
                                src="https://pbs.twimg.com/profile_images/1367267802940375042/H4JDd6aC_400x400.jpg"
                                onClick={() => ""}
                                alt="profile_images"
                            />
                            <h1 className="lg:m-0 ml-6 ">Home</h1>
                        </span>
                        <img src={stars} alt="" id="star" className="h-6 w-6 button" />
                    </div>
                    <div id="border">
                        <ComposeTweet />
                    </div>
                </>} />
        </>
    )
}

export default UserPage


