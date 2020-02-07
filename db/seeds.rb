u1 = User.create(first_name: "George", last_name: "Crocker", email: "george@gmail.com", password: "123456")
u2 = User.create(first_name: "Sarah", last_name: "Johnson", email: "sarah@gmail.com", password: "123456")
u3 = User.create(first_name: "John ", last_name: "Smith", email: "hoodie@vest.com", password: "spillsdrink")

c1 = Cape.create(name: "Superman", full_name: "Clark Kent", gender: "Male", affiliation: "Justice League", intelligence: 100, strength: 98, speed: 89, url: "https://www.superherodb.com/pictures2/portraits/10/050/791.jpg?v=1578889872", durability: 92, power: 95, combat: 97, user: u2)
c2 = Cape.create(name: "Batman", full_name: "Bruce Wayne", gender: "Male", affiliation: "Justice League", intelligence: 99, strength: 99, speed: 52, url: "https://www.superherodb.com/pictures2/portraits/10/050/639.jpg?v=1580266192", durability: 84, power: 89, combat: 91, user: u1)
c3 = Cape.create(name: "Wonder Woman", full_name: "Diana Prince", gender: "Female", affiliation: "Justice League", intelligence: 95, strength: 80, speed: 85, url: "https://www.superherodb.com/pictures2/portraits/10/050/807.jpg?v=1475609961", durability: 98, power: 95, combat: 99, user: u3)

r1 = Review.create(rating: 6, body: "Saved my life!", user: u2, cape: c1)
r2 = Review.create(rating: 3, body: "Wonderful human being", user: u3, cape: c1)
r3 = Review.create(rating: 1, body: "Fastest person ever.", user: u1, cape: c1)
r4 = Review.create(rating: 10, body: "What a Hero!!!", user: u1, cape: c2)
r5 = Review.create(rating: 2, body: "Did not show up on time.", user: u2, cape: c3)
r6 = Review.create(rating: 7, body: "Really nice", user: u3, cape: c3)
