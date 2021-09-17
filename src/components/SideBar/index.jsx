import React from 'react'
import './index.css'

const SideBar = () => {
    return (
        <div>
            <div className=" " id="sidebar">
                {/*  */}
                <div className="flex items-center space-x-0 ">
                    <svg viewBox="0 0 24 24" className="my-6  ml-14 lg:h-8 h-12 lg:visible invisible  " fill="currentColor">
                        <path className="text-gray-100" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49
                        2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658
                        2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63
                        2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257
                        1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313
                        3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376
                        0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0
                        13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                        </path>
                    </svg>
                </div>
                {/*  */}
                <div className="block m-auto ">
                    <div className="flex flex-col  justify-around items-center lg:rounded-xl h-4/6" id="sidebarList">
                        <div className="flex items-center w-8/12 py-2  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-800 shadow-lg cursor-pointer transition ease-in duration-300">
                            <div className="icons lg:w-3/12 w-full text-center rounded-full border-gray-100" style={{
                                height: "35px",
                                padding: "2px",
                                border: '3px',
                                width: "35px"
                            }}>
                                <i class="fa fa-home stroke-current text-gray-100  text-2xl " aria-hidden="true"></i>
                            </div>
                            <span className="lg:w-9/12 lg:visible  invisible w-0">
                                <h1 className="text-gray-100 font-medium text-left text-xl ml-4" id="list-text">Home</h1>
                            </span>
                        </div>
                        <div className="flex items-center w-8/12 py-2  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-800 shadow-lg cursor-pointer transition ease-in duration-300" id="icons-hide">
                            <div className="icons lg:w-3/12  text-center rounded-full border-gray-100 w-full" style={{
                                height: "35px",
                                padding: "2px",
                                border: '3px',
                                width: "35px"
                            }}>
                                <i class="fa fa-hashtag stroke-current text-gray-100  text-2xl sm:hidden" aria-hidden="true"></i>
                            </div>
                            <span className="lg:w-9/12 lg:visible invisible w-0">
                                <h1 className="text-gray-100 font-medium text-left text-xl ml-4" id="list-text">Explore</h1>
                            </span>
                        </div>

                        <div className="flex items-center w-8/12 py-2  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-800 shadow-lg cursor-pointer transition ease-in duration-300">
                            <div className="icons w-3/12  text-center rounded-full border-gray-100" style={{
                                height: "35px",
                                padding: "2px",
                                border: '3px',
                                width: "35px"
                            }}>
                                <i class="fa fa-bell stroke-current text-gray-100  text-2xl sm:hidden" aria-hidden="true"></i>
                            </div>
                            <span className="lg:w-9/12 lg:visible invisible w-0">
                                <h1 className="text-gray-100 font-medium text-left text-xl ml-4" id="list-text">Notification</h1>
                            </span>
                        </div>

                        <div className="flex items-center w-8/12 py-2  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-800 shadow-lg cursor-pointer transition ease-in duration-300">
                            <div className="icons w-3/12  text-center rounded-full border-gray-100" style={{
                                height: "35px",
                                padding: "2px",
                                border: '3px',
                                width: "35px"
                            }}>
                                <i class="fa fa-envelope stroke-current text-gray-100  text-2xl sm:hidden" aria-hidden="true"></i>
                            </div>
                            <span className="lg:w-9/12 lg:visible invisible w-0">
                                <h1 className="text-gray-100 font-medium text-left text-xl ml-4" id="list-text">Messages</h1>
                            </span>
                        </div>
                        <div className="flex items-center w-8/12 py-2  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-800 shadow-lg cursor-pointer transition ease-in duration-300" id="icons-hide">
                            <div className="icons w-3/12  text-center rounded-full border-gray-100" style={{
                                height: "35px",
                                padding: "2px",
                                border: '3px',
                                width: "35px"
                            }}>
                                <i class="fa fa-bookmark stroke-current text-gray-100  text-2xl sm:hidden" aria-hidden="true" ></i>
                            </div>
                            <span className="lg:w-9/12 lg:visible invisible w-0">
                                <h1 className="text-gray-100 font-medium text-left text-xl ml-4" id="list-text">Bookmarks</h1>
                            </span>
                        </div>
                        <div className="flex items-center w-8/12 py-2  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-800 shadow-lg cursor-pointer transition ease-in duration-300" id="icons-hide">
                            <div className="icons w-3/12  text-center rounded-full border-gray-100" style={{
                                height: "35px",
                                padding: "2px",
                                border: '3px',
                                width: "35px"
                            }}>
                                <i class="fa fa-list-alt stroke-current text-gray-100  text-2xl sm:hidden" aria-hidden="true"></i>
                            </div>
                            <span className="lg:w-9/12 lg:visible invisible w-0">
                                <h1 className="text-gray-100 font-medium text-left text-xl ml-4" id="list-text">List</h1>
                            </span>
                        </div>
                        <div className="flex items-center w-8/12 py-2  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-800 shadow-lg cursor-pointer transition ease-in duration-300">
                            <div className="icons w-3/12  text-center rounded-full border-gray-100" style={{
                                height: "35px",
                                padding: "2px",
                                border: '3px',
                                width: "35px"
                            }}>
                                <i class="fa fa-user stroke-current text-gray-100 text-2xl sm:hidden" aria-hidden="true"></i>
                            </div>
                            <span className="lg:w-9/12 lg:visible invisible w-0">
                                <h1 className="text-gray-100 font-medium text-left text-xl ml-4" id="list-text">Profile</h1>
                            </span>
                        </div>
                        <div className="flex items-center w-8/12 py-2  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-800 shadow-lg cursor-pointer transition ease-in duration-300" >
                            <div className="icons w-3/12  text-center rounded-full border-gray-100" style={{
                                height: "35px",
                                padding: "2px",
                                border: '3px',
                                width: "35px"
                            }}>
                                <i class="fa fa-ellipsis-h stroke-current text-gray-100  text-2xl sm:hidden" aria-hidden="true"></i>
                            </div>
                            <span className="lg:w-9/12 lg:visible invisible w-0 ">
                                <h1 className="text-gray-100 font-medium text-left text-xl ml-4" id="list-text">More</h1>
                            </span>
                        </div>

                        <button type="primary" shape="round" size="large" className="button bg-blue-500 rounded-full font-medium text-white w-8/12 py-3 mt-2 items-end lg:visible md:invisible invisible" id="icons-hide">
                            Tweet
                        </button>
                    </div>
                </div>
                {/*  */}
                <div></div>
            </div>
        </div>
    )
}

export default SideBar
