import { Client , Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('YOUR PROJECT ID');

const databases = new Databases(client);

export default databases;

