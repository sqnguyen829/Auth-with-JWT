class AuthController < ApplicationController

    def login
        byebug
        user = User.find_by({username: params[:username]})
        if user && user.authenticate(params[:password])
            byebug
            token = JWT.encode( {id: user.id}, 'my_salt', 'HS256')
            render json: {success: true, id: user.id, token: token}
        else
            byebug
            render json: {success: false, id: nil, token: nil}
        end
    end
end
