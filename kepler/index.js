const { parse } = require('csv-parse')
const fs = require('fs')

const results = []

function isHospitable (planetData) {
    return planetData['koi_disposition'] === 'CONFIRMED'
    && planetData['koi_insol'] > 0.36
    && planetData['koi_insol'] < 1.11
    && planetData['koi_prad'] < 1.6
}

// The CSV data is being read in as a stream. However we need the data to be parsed as a CSV row.  
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#', // identifies lines that begin with # to be a commnet
        columns: true // identifies lines that begin with to be columns
    }))
    .on('data', (data) => {
        if (isHospitable(data)) {
            results.push(data)
        }
    })
    .on('error', (err) => {
        console.log(`Error  ${err}`)
    })
    .on('end', () => {
        console.log(results)
        console.log('done', results.length)
    })




