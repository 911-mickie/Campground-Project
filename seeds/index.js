const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cities = require("./cities");
const Campground = require("../models/campground");
const { descriptors, places } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/CampgroundProject", {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 400; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "623712117d8d75bceb40c9c1",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,

      description: "Enjoy the view and have a good time!",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1647927747/CampgroundProject/mtkug0roy7motp7kolaj.jpg",
          filename: "CampgroundProject/zjjw2wzrygcxda8q7epa",
        },
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1647928669/CampgroundProject/bodgmzu7ndjjwoyzeppb.webp",
          filename: "CampgroundProject/l2g7npgkjwyfktnk6tkb",
        },
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1647950021/CampgroundProject/awwhqjp8qnueiiaamxlp.jpg",
          filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        },
      ],
    });
    await camp.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
