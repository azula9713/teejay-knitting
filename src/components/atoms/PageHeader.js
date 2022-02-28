import React from 'react'

function PageHeader(props) {
    return (
        <div>
        <h2 className=" text-left ml-3 md:pl-20 lg:pl-20 xl:pl-2  font-bold text-lg text-third-0 mt-3 p-0">{props.title}</h2>

        <div className="flex ml-3 md:pl-20 lg:pl-20 xl:pl-2  justify-self-start mt-3" >
            <div className="flex items-end ">
                <span className="bg-primary-0 text-white font-bold p-3 w-24">Cotton</span>
                <span className="border p-2 w-24">Synthetic</span>
            </div>
        </div>
            
        </div>
    )
}

export default PageHeader
