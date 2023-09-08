import React from 'react'
import transaction_data from './../data/recent-transactions-data';

function TransActions() {
    return (
        <div className='row px-5 mt-4'>
            <h4 className='title-transactions mb-3'>
                Recent Transactions
            </h4>
            {
                transaction_data.map((item) => (
                    <div className='row mb-3 align-items-center justify-content-between'>
                        <div className='col-2'>
                            <img className='icon-crypto' src={item.image} />
                        </div>
                        <div className='col-6'>
                            <span className='transaction-name'>{item.title}</span>
                            <br />
                            <span className='transaction-date'>{item.transaction_time}</span>
                        </div>
                        <div className='col-4'>
                            <span className={item.status === "Sell" ? "trans_loss-red" : "trans_loss-green"}>
                                {item.status === "Sell" ? "-" : "+"}{" "}{item.financial_price}{" "}{item.summary_title}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TransActions