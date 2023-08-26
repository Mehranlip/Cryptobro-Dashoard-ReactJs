import React from 'react'

function Accounts() {
    return (
        <div>
            <div className='row p-5'>
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
        </div>
    )
}

export default Accounts