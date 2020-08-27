rails new backend --api --skip-git

npx create-react-app frontend

gem 'bcrypt', '~> 3.1.7'

gem "jwt","~> 2.1"        

gem 'rack-cors'

add models

rails g model User

add controllers

rails g controller users

after making the Auth controller build the login method along witht the route to access it


