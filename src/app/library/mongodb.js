import { MongoClient } from 'mongodb';


const uri = process.env.MONGODB_URI; // your MongoDB connection string
const options = {
  tls: true,
  tlsAllowInValidCertificates: true,
};




let client;
let clientPromise;


if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}


client = new MongoClient(uri, options);
clientPromise = client.connect();


export default clientPromise;






// import { MongoClient } from 'mongodb';


// const uri = process.env.MONGODB_URI; // your MongoDB connection string
// const options = {
//   tls: true,
//   tlsAllowInValidCertificates: true,
// };




// let client;
// let clientPromise;


// if (!process.env.MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }


// client = new MongoClient(uri, options);
// clientPromise = client.connect();








