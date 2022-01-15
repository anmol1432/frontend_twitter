import React from 'react'
import './index.css'
import SideBar from "../../components/SideBar/index";

const MainLayout = ({ ChildComponent }) => {

    return (
        <>
            <div className=" " id="Userpage">
                <div className="text-blue-500 flex justify-evenly">
                    <div className="lg:w-3/12 md:3/12 md:relative md:px-12 z-40 lg:visible md:visible heightFull w-0 " id="bottom-nav">
                        <SideBar />
                    </div>
                    {/* div for compose tweet and tweets */}
                    <div className="lg:w-5/12 md:w-8/12  w-full center-sec " id="border">
                        {ChildComponent}
                    </div>
                    {/* div for all news*/}
                    <div className="lg:w-3/12 heightFull w-0 flex flex-col lg:px-8" id="newSection">
                        <div className=" bg-gray-800 rounded-full py-1 my-2 text-center flex justify-center items-center" style={{ height: '' }}>
                            <i className="fa fa-search text-gray-400 stroke-current text-xl " aria-hidden="true"></i>
                            <input className="rounded-full bg-transparent p-2 " placeholder="Search Twitter" style={{ outline: 'none', color: 'white' }} />
                        </div>
                        <div className=" bg-gray-800 rounded-xl lg:px-6 py-3 my-2  flex-col items-center text-gray-300" style={{ height: '60vh' }}>
                            <h1 className="font-extrabold text-xl">what's happening</h1>
                        </div>
                        <div className=" bg-gray-800 rounded-xl lg:px-6 py-3 my-2 flex-col items-center text-gray-300">
                            <h1 className="font-extrabold text-xl">who to follow</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout

