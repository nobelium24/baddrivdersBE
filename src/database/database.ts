import mongoose from 'mongoose';

export const connectToDatabase = async (): Promise<void> => {
    const uri = process.env.MONGO_URI || '';

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};