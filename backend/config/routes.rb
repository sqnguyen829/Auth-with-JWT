Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :dogs
  resources :users
  get('/currentuser', to: 'application#current_user')
  post('/login', to: 'auth#login')
end
