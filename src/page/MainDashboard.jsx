import React from 'react'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'
import Portfolio from '../components/portfolio'
import Accounts from '../components/Accounts'

function MainDashboard() {
    return (
        <div className='col-12 col-md-10'>
            <div className='row'>
                <div className='col-12 col-md-7'>
                    <Searchbar />
                    <Banner />
                    <Portfolio />
                </div>
                <div className='col-12 col-md-4'>
                    <Accounts />
                </div>
            </div>
        </div>
    )
}

export default MainDashboard