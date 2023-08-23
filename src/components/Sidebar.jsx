import React from 'react'
import sidebar_data from '../data/sidebar-data'
import { Link } from 'react-router-dom'

function Sidebar() {

    return (
        <div className='col-2 px-5 py-2 sidebar_body vh-100'>
            {/* logo */}
            <div className='mb-4'>
                <img src='../../public/logo/Logo.svg' />
            </div>
            {/* end logo */}
            {
                sidebar_data.map((item) => (
                    <div key={item.title}>
                        <div className='row justify-content-center align-items-center text-cneter'>
                            <Link to={item.link} className='col text-decoration-none mb-4 defult_itme-sidebar px-3 py-2'>
                                <img className='mx-2' src={item.image} />
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Sidebar