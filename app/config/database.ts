import mongoose, { ConnectOptions } from 'mongoose';

export default async () => {
  // Connect to the database
  try {
    await mongoose.connect('mongodb://localhost/notificationsDatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

  } catch (e) {
    console.error(`Couldn't connect to the database: ${e}`);
    process.exit(1);
  }
};