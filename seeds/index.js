const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cities = require("./cities");
const Campground = require("../models/campground");
const { descriptors, places } = require("./seedHelpers");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const dbUrl =
  process.env.DB_URL || "mongodb://localhost:27017/CampgroundProject";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

// function randImages() {
//   for(let i = 0; i<5; i++){
//             url: `https://source.unsplash.com/random/?campground&sig=${i}`
//   }
// }




const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 80; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      //author: "625f051709e8f667895b29f7",   //For local Host
      author: "625f00b97ba5c936091568f7", //For production
      
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
      // images: [
      //   {
      //     //url: `https://source.unsplash.com/random?campground&sig=${Math.floor(Math.random()*10)}`,
      //     
      //   },
      // ],
      images: [
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1647927747/CampgroundProject/mtkug0roy7motp7kolaj.jpg",
        //   filename: "CampgroundProject/zjjw2wzrygcxda8q7epa",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1647928669/CampgroundProject/bodgmzu7ndjjwoyzeppb.webp",
        //   filename: "CampgroundProject/l2g7npgkjwyfktnk6tkb",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1647950021/CampgroundProject/awwhqjp8qnueiiaamxlp.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1650569081/CampgroundProject/mattias-helge-CAk3Rl75CD8-unsplash_trsjng.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1650569083/CampgroundProject/patrick-hendry-eDgUyGu93Yw-unsplash_jk4nag.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1650569086/CampgroundProject/laura-pluth-RMicIhNOOIg-unsplash_gwxg13.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1650569087/CampgroundProject/jack-sloop-qelGaL2OLyE-unsplash_c979yc.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1650569089/CampgroundProject/kevin-ianeselli-ebnlHkqfUHY-unsplash_lwwlln.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1650569088/CampgroundProject/pars-sahin-V7uP-XzqX18-unsplash_mnd6dw.jpg",
          filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        },
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1650569090/CampgroundProject/tommy-lisbin-2DH-qMX6M4E-unsplash_kavcpl.jpg",
          filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        },
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1650569091/CampgroundProject/jimmy-conover-J_XuXX9m0KM-unsplash_put0ol.jpg",
          filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        },
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1650569093/CampgroundProject/lesly-derksen-F4fH5dAfZnE-unsplash_h1nu3e.jpg",
          filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        },
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1650569094/CampgroundProject/dominik-jirovsky-re2LZOB2XvY-unsplash_wdqo6h.jpg",
          filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        },
        {
          url: "https://res.cloudinary.com/mickie/image/upload/v1650569093/CampgroundProject/patrick-hendry-euaPfbR6nC0-unsplash_qtz99q.jpg",
          filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1648566894/CampgroundProject/iwpyyhlpmiabglmytuws.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1648566891/CampgroundProject/qoxy1hrp35nejq7lvilv.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1648541925/CampgroundProject/lw6gdadyjyarwgmvsd2h.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },
        // {
        //   url: "https://res.cloudinary.com/mickie/image/upload/v1647942011/CampgroundProject/qgweoes80eiulru5fg0q.jpg",
        //   filename: "CampgroundProject/mjpiqxgqlh5hq3zn25cu",
        // },

      ],
    });
    await camp.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
