import React from 'react'

function Banner() {
    return (
        <div className='row banner-body mx-1 mt-4 algin-items-center justify-content-around'>
            <div className='col-12 col-md-auto  p-3 '>
                <p>
                    Assign expert to <br />
                    Manage Portfolio
                </p>
                <button className='btn mt-2'>
                    Find expert
                </button>
            </div>
            <div className=' col-12 col-md-6 banner-image '>
            </div>
        </div>
    )
}

export default Banner