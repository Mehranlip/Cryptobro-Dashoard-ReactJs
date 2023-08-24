import React from 'react'
import sidebar_data from '../data/sidebar-data'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation();

    const handleLinkFocus = (index) => {
        setFocusedIndex(index);
    };



    return (
        <>
            {/* nav in sm */}
            <div className='d-sm-none d-block p-0'>
                <div class="collapse " id="navbarToggleExternalContent">
                    <div class="sidebar_body p-4 text-center">
                        {
                            sidebar_data.map((item, index) => (
                                <div key={item.title}>
                                    <div className='row justify-content-center align-items-center text-justify'>
                                        <Link
                                            onFocus={() => handleLinkFocus(index)}
                                            onBlur={() => setFocusedIndex(null)}
                                            to={item.link}
                                            className={`col text-decoration-none mb-4 defult_itme-sidebar px-3 py-2 ${item.link === location.pathname ? 'defult_itme-sidebar-select' : ''}`}
                                        >
                                            <img className='mx-2' src={item.link === location.pathname ? item.image_light : item.image} />
                                            <span>{item.title}</span>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                        {/* logout logo */}
                        <div className='row justify-content-center align-items-center text-justify fixed-button mt-2'>
                            <Link
                                className='col text-decoration-none mb-4  logout-sidebar px-3 py-2 '>
                                <img className='mx-2' src='../../public/white-icon/Styleguide/Logout.svg' />
                                <span>Logout</span>
                            </Link>
                        </div>
                        {/* end logout logo */}
                    </div>
                </div>
                <nav class="navbar navbar-dark sidebar_body">
                    <div class="container-fluid">
                        {/* logo */}
                        <div>
                            <img src='../../public/logo/Logo.svg' />
                        </div>
                        {/* end logo */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
            {/* end nav in sm */}

            {/* sidebar in md ... */}
            <div className='d-none d-md-inline col-12 col-md-auto px-0 px-md-5 py-2 sidebar_body vh-100'>
                {/* logo */}
                <div className='mb-5'>
                    <img src='../../public/logo/Logo.svg' />
                </div>
                {/* end logo */}
                {
                    sidebar_data.map((item, index) => (
                        <div key={item.title}>
                            <div className='row justify-content-center align-items-center text-justify'>
                                <Link
                                    onFocus={() => handleLinkFocus(index)}
                                    onBlur={() => setFocusedIndex(null)}
                                    to={item.link}
                                    className={`col text-decoration-none mb-4 defult_itme-sidebar px-3 py-2 ${item.link === location.pathname ? 'defult_itme-sidebar-select' : ''}`}
                                >
                                    <img className='mx-2' src={item.link === location.pathname ? item.image_light : item.image} />
                                    <span>{item.title}</span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
                {/* logout logo */}
                <div className='row justify-content-center align-items-center text-justify fixed-button mt-5'>
                    <Link
                        className='col text-decoration-none mb-4  logout-sidebar px-3 py-2 mt-5'>
                        <img className='mx-2' src='../../public/white-icon/Styleguide/Logout.svg' />
                        <span>Logout</span>
                    </Link>
                </div>
                {/* end logout logo */}
            </div>
            {/* end sidebar in md */}
        </>
    )
}

export default Sidebar