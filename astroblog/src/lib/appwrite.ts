import { Client, Databases } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('676d5eda0018c4e8c9fa');