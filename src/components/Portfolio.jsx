import React from 'react'
import portfilio_data from './../data/portfilio-data';

function Portfolio() {
    return (
        <div className='row mt-2 p-2'>
            <div className='titel-portfolio'>
                <h5>My Portfolio</h5>
            </div>
            <div class="scroll-container">
                {
                    portfilio_data.map((item) => (
                        <div key={item.title} className='item-portfilio p-2'>
                            <div className='row justify-content-center algin-items-center'>
                                <div className='col-4'>
                                    <img src={item.image} />
                                </div>
                                <div className='col-4 text-start '>
                                    <div className='row'>
                                        <span className='summary_title'>{item.summary_title}</span>
                                        <span className='title-crypto'>{item.title}</span>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='row'>
                                        <span className='financial_price'>
                                            {item.financial_price}</span>
                                        <span className={item.status === "red" ? "profit_loss-red" : "profit_loss-green"}>
                                            <img src={item.arrow_image} />
                                            {item.profit_loss}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio