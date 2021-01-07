class Api::EmailsController < ApplicationController
    def create 
        email = Email.new(email_params)
        email.save
    end
    
    def destroy
        @email = Email.find(params[:id]);
        @email.destroy 
    end

    private 
    def email_params 
        params.require(:email).permit(
            :email
        )
    end 
end
