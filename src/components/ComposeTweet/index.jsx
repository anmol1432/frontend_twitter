import React from 'react'

const ComposeTweet = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <div className="">
                <div className="rounded-xl bg-black  w-full">
                    <div className="flex p-4">
                        <div className="w-3/12">
                            <img className="rounded-full w-14" src="https://images.unsplash.com/photo-1638913976381-5b8ed66c36d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="profile_img" />
                        </div>
                        <div className="ml-3 flex flex-col w-full">
                            <textarea placeholder="What's happening?" className="w-full  resize-none outline-none h-40 bg-black"></textarea>
                            <div className="cursor-pointer text-blue-500 -ml-4 border-b-2 border-gray-300 pb-4">
                                <p className="inline px-4 py-3 rounded-full hover:border-blue-500"><i className="fas fa-globe"></i> Everyone can reply</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center text-blue-500 justify-between py-2 px-4">
                        <div></div>
                        <div className="flex text-2xl lg:pl-12 w-8/12 ml-6">
                            <div className="flex items-center justify-center p-3  rounded-full cursor-pointer">
                                <i className="fas fa-image" ></i>
                            </div>

                            <div className="flex items-center justify-center p-3  rounded-full cursor-pointer ">
                                <i className="fas fa-poll-h"></i>
                            </div>

                            <div className="flex items-center justify-center p-3 rounded-full cursor-pointer">
                                <i className="fas fa-smile"></i>
                            </div>

                            <div className="flex items-center justify-center p-3 rounded-full cursor-pointer">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                        </div>
                        <div>
                            <button type="primary" shape="round" size="large" className="button bg-blue-500 rounded-full font-medium text-white px-4 py-3 ">
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComposeTweet
