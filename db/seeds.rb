# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(first_name: "Blob", last_name: "Sweat", email: "blob@sweat.com", password: "sweatblob")

u2 = User.create(first_name: "Kim", last_name: "Jung Un", email: "dictator@you.com", password: "laborcamps")

u3 = User.create(first_name: "Everett", last_name: "Yoooow", email: "hoodie@vest.com", password: "spillsdrink")

c1 = Cape.create(user: u1, name: "Nedzilla", full_name: "Debbie Lehman", gender: "Male", affiliation: "Starbucks Galactica", intelligence: 100, strength: 77, speed: 89, url: "https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/little_debbie.jpg")

c2 = Cape.create(user: u2, name: "Speedy Smitty", full_name: "Chris VonSmith", gender: "Male", affiliation: "West Side", intelligence: 99, strength: 99, speed: 4, url: "https://www.nationalgeographic.com/content/dam/magazine/rights-exempt/2017/10/Departments/Explore/explore-slow-loris-photo-ark.ngsversion.1503078357493.adapt.1900.1.jpg")

c3 = Cape.create(user: u3, name: "Red Rover", full_name: "Kristopher Ryan Johnson", gender: "Male", affiliation: "Lazy Eye", intelligence: 4, strength: 100, speed: 7, url: "https://s3.amazonaws.com/ogden_images/www.minotdailynews.com/images/2019/09/06224333/7-Panda1-560x840.jpg")


r1 = Review.create(rating: 6, body: "Destroys Tokyo!", user: u2, cape: c1)
r2 = Review.create(rating: 3, body: "Pickup for Debbie", user: u3, cape: c1)
r3 = Review.create(rating: 1, body: "Only has two shirts, wears one.", user: u1, cape: c1)
r4 = Review.create(rating: 10, body: "Thinks he moves fast, and everyone else moves slow", user: u1, cape: c2)
r5 = Review.create(rating: 5, body: "Still sleeping", user: u2, cape: c3)
r6 = Review.create(rating: 7, body: "Eats lunch alone, when he doesnt have to", user: u3, cape: c3)
