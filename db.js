const mongoose =require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/library"
const Book = require("./book.js");

const seedDatabase = async () => {
  try {
    // Sample mock data
    const mockBooks = [
      {
        title: 'Sample Book 1',
        authors: 'Author 1',
        publisher: 'Publisher 1',
        genre: ['Fiction', 'Science Fiction'],
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        title: 'Sample Book 2',
        authors: 'Author 2',
        publisher: 'Publisher 2',
        genre: ['Mystery'],
        summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      // Add more mock book objects as needed
    ];

    // Insert mock data into the database
    await Book.insertMany(mockBooks);
    console.log('Database seeded with mock data');
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

const connectToMongo= ()=>{
    mongoose.connect(mongoURI).then(
        ()=>{
             await seedDatabase();
            console.log("Connected....")
        }
    ).catch(
        (err)=>{ 
            console.log(err);
        }
    )
}
module.exports= connectToMongo;
