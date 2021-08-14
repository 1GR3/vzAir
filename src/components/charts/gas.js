import React from 'react';
import Chart from "react-google-charts";

function Gas () {

    return (
        <Chart
            width={'100%'}
            height={'300px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Date', 'amonijak', 'okidacijski','redukcijski'],
                ['01', 22, 19, 18],
                ['02', 21, 16, 16],
                ['03', 21, 16, 16],
                ['04', 23, 20, 14],
                ['05', 21, 16, 16],
                ['06', 34, 27, 25],
                ['07', 34, 27, 25],
                ['08', 26, 20, 11],
                ['09', 21, 16, 16],
                ['10', 23, 20, 14],
                ['11', 21, 16, 16],
                ['12', 34, 27, 25],
                ['13', 26, 20, 11],
            ]}
            options={{
                title: 'Plinovi',
                curveType: 'function',
                legend: { position: 'bottom' },
                // hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '95%', height: '70%' },
                colors: ['#fac93c', '#e4eeee', '#4fe4f3', '#aae2fc', '#f6c7b6'],
                backgroundColor: { fill:'transparent' },
                lineWidth: 4
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
        />
    )
}

export default Gas