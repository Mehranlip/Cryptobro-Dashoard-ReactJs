import React from 'react'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'

function MainDashboard() {
    return (
        <div className='col-12 col-md-8'>
            <div className='row'>
                <div className='col-12 col-md-8'>
                    <Searchbar />
                    <Banner />
                </div>
                <div className='col-12 col-md-4'>

                </div>
            </div>
        </div>
    )
}

export default MainDashboard