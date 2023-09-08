import React from 'react'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'
import Portfolio from '../components/portfolio'
import Accounts from '../components/Accounts'

function MainDashboard() {
    return (
        <div className='col-12 col-md-9 container'>
            <div className='row justify-content-evenly '>
                <div className='col-12 col-md-7 order-1 order-md-0'>
                    <Searchbar />
                    <Banner />
                    <Portfolio />
                </div>
                <div className='col-12 col-md-5 order-0 order-md-1'>
                    <Accounts />
                </div>
            </div>
        </div>
    )
}

export default MainDashboard