import React from 'react';
import {
    XAxis,
    YAxis,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer
} from 'recharts';


const data = [
    {
        name: "Mon",
        $: 450,
    },
    {
        name: "Tue",
        $: 200,
    },
    {
        name: "Wed",
        $: 250,
    },
    {
        name: "Thur",
        $: 110,
    },
    {
        name: "Fri",
        $: 250,
    },
    {
        name: "Sat",
        $: 405,
    },
    {
        name: "Sun",
        $: 300,
    }
];


function Chart() {
    return (
        <div className='box-chart'>
            <div className='row'>
                <div className='col px-2 py-1'>
                    <img className='activity-icon' src='../../public/white-icon/Styleguide/Activity.svg' />
                    <span className='title-cahrt px-2 '>Total Portfolio</span>
                </div>

            </div>
            <div className='mt-3'>
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 10
                        }}

                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="$" strokeWidth={2.5} stroke="#4062FF" fill="  rgba(64, 186, 255, 0.20)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart