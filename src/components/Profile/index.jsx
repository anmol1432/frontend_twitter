import React from 'react'

const ViewProfile = () => {
    return (
        <>
            <div className="holder">

                <div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
                    <img className="max-h-20 w-full opacity-80 absolute top-0" style={{ zIndex: -1 }} src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640" alt="" />
                    <div className="profile w-full flex m-3 ml-4 text-white">
                        <img className="w-28 h-28 p-1  rounded-full" src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt="" />
                    </div>
                    <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                        <div className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Contact</div>
                        {/* <!-- <div className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Bio</div> --> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProfile