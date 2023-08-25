import React from 'react'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'
import Portfolio from '../components/portfolio'

function MainDashboard() {
    return (
        <div className='col-12 col-md-8'>
            <div className='row'>
                <div className='col-12 col-md-9'>
                    <Searchbar />
                    <Banner />
                    <Portfolio />
                </div>
                <div className='col-12 col-md-3'>

                </div>
            </div>
        </div>
    )
}

export default MainDashboard