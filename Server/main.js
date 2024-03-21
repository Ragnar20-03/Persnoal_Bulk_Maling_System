const csv = require('csv-parser');
const fs = require('fs');
const sendMail  = require('./nodeMailer');
const results = [];
const columnHeaders = []

let unSuccessfulSend = []
let successfulSend = []


fs.createReadStream('my.csv')
  .pipe(csv())
  // For Converting all headers to LOWERCASE
  .on('headers', (headers) => {
    // 'headers' event is emitted once with the array of column headers
    console.log('Original column headers:', headers);
    
    // Convert each header to lowercase and store them
    const lowercaseHeaders = headers.map(header => header.toLowerCase());
    console.log('Lowercase column headers:', lowercaseHeaders);
    columnHeaders.push(...lowercaseHeaders);
  })
////////////////////////////////////
.on('data', (data) => {
    results.push(data);
  })
////////////////////////////////////

  .on('end', async () => {
    console.log('All data:', results); // Log all data for debugging

    // Use Promise.all() to await all sendMail promises
    const sendPromises = results.map(async (data) => { // data parameter is one json Object from results array
      try {
        await sendMail(data);
        return true; // Mark email as successfully sent
      } catch (error) {
        console.error('Error sending email:', error);
        return false; // Mark email as failed to send
      }
    });

    const sendResults = await Promise.all(sendPromises);
    
    sendResults.forEach((success, index) => {
      if (success) {
        successfulSend.push(results[index]);
      } else {
        unSuccessfulSend.push(results[index]);
      }
    });
      console.log(successfulSend.length);
  });
