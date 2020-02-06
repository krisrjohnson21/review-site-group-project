# README

[![Codeship Status for krisrjohnson21/review-site-group-project](https://app.codeship.com/projects/1789f4e0-2365-0138-72b3-5e60cb46bbdf/status?branch=master)](https://app.codeship.com/projects/382991)

# Superhero Review App

-Title: Zero to Hero

Description: Users can view superheroes and reviews left by other
users, so you'll always know who to call when you get in trouble. Users can also
add heroes and leave reviews of their own, with multiple heroic attributes.

-Authors:<br />
-Chris Smith<br />
-Erica Huang<br />
-Kris Johnson<br />
-Ned Lehman<br />

Heroku Link
https://zero-to-hero-20.herokuapp.com/

# Technologies

-Ruby - 2.6.3
-Rails - 5.2.3
-React - 16.8.0
-CarrierWave - 2.0.2
-Foundation-Rails - 6.5.3.0

# Setup

To set up this app, download the repo and run the following commands in your terminal in exact order:

-yarn install<br />
-bundle exec bundle install<br />
-bundle exec rake db:create<br />
-bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate<br />
-bundle exec rake db:seed<br />
-yarn start<br />
-new tab- bundle exec rails s<br />
-Navigate your browser to localhost:3000

# Testing

To run tests, run these files in a separate terminal tab:<br />
-bundle exec rake db:test:prepare<br />
-bundle exec rspec<br />
-yarn run test
