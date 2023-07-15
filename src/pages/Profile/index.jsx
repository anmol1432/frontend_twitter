import React from 'react';
import ComposeTweet from '../../components/ComposeTweet/index';
import MainLayout from '../../components/MainLayout/index';
import ViewProfile from '../../components/Profile/index';
import stars from '../../Assets/img/stars.png';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './index.css';

const Profile = () => {
    return (
        <>
            <MainLayout
                ChildComponent=
                {<>
                    <div className=" flex justify-between p-4 items-center" id="border">
                        <span className="text-white font-bold text-center flex items-center" id="home">
                            <img
                                className="rounded-full w-10 lg:invisible lg:w-0"
                                src="https://images.unsplash.com/photo-1638913976381-5b8ed66c36d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                onClick={() => ''}
                                alt="profile_images"
                            />
                            <h1 className="lg:m-0 ml-6 flex ">
                                <ArrowLeftOutlined color={'#3b82f6'} className="p-2 mr-2 rounded-full hover:bg-slate-800" />
                                <span>⚔️ ANMOL SINGH ☠️</span>
                            </h1>
                        </span>
                    </div>
                    <div id="border">
                        <ViewProfile id="border" />
                    </div>
                </>} />
        </>
    );
};

export default Profile;
