rails new backend --api --skip-git

npx create-react-app frontend

gem 'bcrypt', '~> 3.1.7'

gem "jwt","~> 2.1"        

gem 'rack-cors'

add models

rails g model User

add controllers

rails g controller users

after making the Auth controller build the login method along with the route to access it

include the code found in cors.rb file located in the backend/config/initializers/cors.rb



npm install --save react-router-dom

add to package.json to force the port to open on 3001


"start": "PORT=3001 react-scripts start",
"start-pc": "set PORT=3001&& react-scripts start",


cd into backend, then run 'bundle install' follow by 'rails db:seed' in the terminal

cd into frontend, before running npkm install && start, delete the node_modules folder and the package-lock.json file.
