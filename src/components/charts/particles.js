import React from 'react';
import Chart from "react-google-charts";

function Particles () {

    return (
        <Chart
            width={'100%'}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Date', '0.3-2.5', '2.5-5','5+'],
                ['2013', 22, 19, 18],
                ['2014', 34, 27, 25],
                ['2015', 26, 20, 11],
                ['2016', 23, 20, 14],
                ['2017', 21, 16, 16],
            ]}
            options={{
                title: 'Nano Čestice',
                curveType: 'function',
                legend: { position: 'bottom' },
                // hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '95%', height: '70%' },
                colors: ['#0ec29e', '#30cec8', '#6de3f3', '#aae2fc', '#f6c7b6'],
                backgroundColor: { fill:'transparent' },
                lineWidth: 2
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
        />
    )
}

export default Particles