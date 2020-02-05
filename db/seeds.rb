u1 = User.create(first_name: "Harry", last_name: "Potter", email: "wizard@hogwartz.com", password: "leviosa")
u2 = User.create(first_name: "Kim", last_name: "Possible", email: "not@spy.com", password: "rufus123")
u3 = User.create(first_name: "Everett", last_name: "Yoooow", email: "hoodie@vest.com", password: "spillsdrink")

c1 = Cape.create(name: "Nedzilla", full_name: "Debbie Lehman", gender: "Male", affiliation: "Starbucks Galactica", intelligence: 100, strength: 77, speed: 89, url: "https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/little_debbie.jpg", user: u2)
c2 = Cape.create(name: "Speedy", full_name: "Jimmy Buffet", gender: "Male", affiliation: "West Side", intelligence: 99, strength: 99, speed: 4, url: "https://www.nationalgeographic.com/content/dam/magazine/rights-exempt/2017/10/Departments/Explore/explore-slow-loris-photo-ark.ngsversion.1503078357493.adapt.1900.1.jpg", user: u1)
c3 = Cape.create(name: "Red Rover", full_name: "Keyshawn Johnson", gender: "Male", affiliation: "Tree Napper", intelligence: 4, strength: 100, speed: 7, url: "https://s3.amazonaws.com/ogden_images/www.minotdailynews.com/images/2019/09/06224333/7-Panda1-560x840.jpg", user: u3)

r1 = Review.create(rating: 6, body: "Most gentle Zilla out there.", user: u2, cape: c1)
r2 = Review.create(rating: 3, body: "Pickup for Debbie", user: u3, cape: c1)
r3 = Review.create(rating: 1, body: "Only has two shirts, wears one.", user: u1, cape: c1)
r4 = Review.create(rating: 10, body: "Thinks he moves fast, and everyone else moves slow", user: u1, cape: c2)
r5 = Review.create(rating: 5, body: "Still sleeping", user: u2, cape: c3)
r6 = Review.create(rating: 7, body: "Eats lunch alone, when he doesnt have to", user: u3, cape: c3)
