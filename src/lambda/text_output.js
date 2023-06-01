import {Blob} from 'buffer';
export async function handler(event, context){
    // Get the data from each element on the form.
    if (!(event.body.replace(/"/g, '').length===0)) {

    // This variable stores all the data.
    let data = event.body//required_data;
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });

    let date = new Date();
    let day = ("00" + date.getUTCDate()).slice (-2);
    let month = ("00" + date.getMonth()).slice (-2);
    let year = date.getUTCFullYear();

    let newdate = day+''+month+''+year;
    let filename = 'scarlet_output_' + newdate +'_'+ Math.floor(Math.random() * 10000);
    const sFileName = filename; // The file to save the data.
    return{
        statusCode: 200,
        body: JSON.stringify({
        data: data,
        date: newdate,
        blobout: textToBLOB,
        name: filename
        })
    }

    } else  {
    return { // no input handling
        statusCode: 500,
        body: JSON.stringify({
        data: null,
        date: null,
        blobout: null,
        name: null
        })
    }
}}
