import { backendApiUrl } from "../app.json";

const insertDriverPost = (data) => {
    const record = {
        originAddress: data.origin.description,
        destinationAddress: data.destination.description,
        date: data.date
    }
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDD")
    console.log(data)
    console.log("------")
    console.log(record)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(record)
    };
    fetch(`${backendApiUrl}/driver`, requestOptions)
        .then(res => res.text())
        .then(console.log)
        .catch(error => console.log(error));
}

const viewDriverPost = () => {

    fetch(`${backendApiUrl}/driver`);
}

export {
    insertDriverPost, viewDriverPost
}
