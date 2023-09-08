import React from 'react'
import TransActions from './TransActions'

function Accounts() {
    return (
        <div>
            {/* navbar account */}
            <div className='row px-5 py-2'>
                <div className='col-6 mt-2'>
                    <img src='../../public/white-icon/Styleguide/Notification.svg' />
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col'>
                            <div class="dropdown">
                                <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='mx-2' src='../../public/white-icon/Styleguide/avatar.svg' />
                                    Mehran
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end vavbar account */}
            {/* cart Account */}
            <div className='row px-5'>
                <div className='col-12'>
                    <h4 className='title-account mb-2'>Accounts</h4>
                    <div className='row cart-accounts text-center justify-content-center align-items-center'>
                        <div>
                            <span className='financial-price'>
                                $1,445,000
                            </span>
                            <br />
                            <span className='btn-cart px-2 py-1'>
                                <img src='../../public/white-icon/Styleguide/Arrow - Up 2-w.svg' />
                                <span className='Profit-loss '>
                                    $32 (2%)
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* end cart Account */}
            {/* buttons */}
            <div className='row px-5 justify-content-center mt-3'>
                <div className='col-6 text-center'>
                    <button className='btn btn-deposit'>
                        <img className='mx-2' src='../../public/white-icon/Styleguide/Arrow-mash-down.svg' />
                        Deposit
                    </button>
                </div>
                <div className='col-6 text-center'>
                    <button className='btn btn-withdraw'>
                        <img className='mx-2' src='../../public/white-icon/Styleguide/Arrow-mash-up.svg' />
                        Withdraw
                    </button>
                </div>

            </div>
            {/* end buttons */}
            {/* recent transaction */}
            <TransActions />
            {/* end recent transaction */}
        </div>
    )
}

export default Accounts