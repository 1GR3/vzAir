import React from 'react';
import Chart from "react-google-charts";

function TPH () {

    return (
        <Chart
            width={'100%'}
            height={'300px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Date', 'temperatura', 'tlak','relativna vlaga'],
                ['2013', 22, 19, 18],
                ['2014', 34, 27, 25],
                ['2015', 26, 20, 11],
                ['2016', 23, 20, 14],
                ['2017', 21, 16, 16],
                ['2018', 21, 17, 14],
            ]}
            options={{
                title: '',
                curveType: 'function',
                legend: { position: 'bottom' },
                // hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '95%', height: '70%' },
                colors: ['#db591d', '#bec9cb', '#6dcdf3', '#aae2fc', '#f6c7b6'],
                backgroundColor: { fill:'transparent' },
                lineWidth: 4
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
        />
    )
}

export default TPH