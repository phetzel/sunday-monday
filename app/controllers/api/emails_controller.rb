class Api::EmailsController < ApplicationController
    def create 
        @email = Email.new(email_params)
        if @email.save
            new_email = EmailMailer.welcome_email(@email)
            new_email.deliver
            render json: { message: "Success" }
        else 
            render json: @email.errors.full_messages, status: 422 
        end 
    end
    
    def destroy
        @email = Email.find_by_unsubscribe_hash(params[:unsubscribe_hash]);
        @email.destroy 
    end

    private 
    def email_params 
        params.require(:email).permit(
            :email
        )
    end 
end
