const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    const mongoURI = process.env.DATABASE;
    if (!mongoURI) {
      throw new Error("MongoDB connection string is missing in environment variables!");
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);  // Stop the app if DB connection fails
  }
};

module.exports = mongoDB;













// const mongoose = require('mongoose');
// require('dotenv').config();

// const mongoURI = process.env.DATABASE;

// if (!mongoURI) {
//     console.error("MongoURI is undefined. Make sure your .env file is properly configured in Vercel Environment Variables.");
//     process.exit(1);
// }

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI);
//         console.log("✅ Connected to MongoDB");

//         const fetched_foodPanda = mongoose.connection.db.collection("food_panda");
//         const foodPandaData = await fetched_foodPanda.find({}).toArray();

//         const fetched_foodCategory = mongoose.connection.db.collection("foodCategory");
//         const foodCategoryData = await fetched_foodCategory.find({}).toArray();

//         global.food_panda = foodPandaData;
//         global.foodCategory = foodCategoryData;

//     } catch (err) {
//         console.error("❌ Error connecting to MongoDB:", err);
//     }
// };

// module.exports = mongoDB;














// // const mongoose = require('mongoose');
// // const dotenv = require('dotenv');

// // // Load environment variables
// // dotenv.config(); 

// // const mongoURI = process.env.DATABASE;

// // if (!mongoURI) {
// //     console.error("MongoURI is undefined. Make sure your .env file is properly configured.");
// //     process.exit(1);
// // }

// // // console.log("MongoURI:", mongoURI);

// // const mongoDB = async () => {
// //     try {
// //         await mongoose.connect(mongoURI);
// //         console.log("Connected to MongoDB");

// //         // Fetch data from collections
// //         const fetched_foodPanda = mongoose.connection.db.collection("food_panda");
// //         const foodPandaData = await fetched_foodPanda.find({}).toArray();

// //         const fetched_foodCategory = mongoose.connection.db.collection("foodCategory");
// //         const foodCategoryData = await fetched_foodCategory.find({}).toArray();

// //         global.food_panda = foodPandaData;
// //         global.foodCategory = foodCategoryData;

// //     } catch (err) {
// //         console.error("Error connecting to MongoDB or fetching data:", err);
// //         process.exit(1);
// //     }
// // };

// // module.exports = mongoDB;


