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
    
    def unsubscribe
        @email = Email.find_by(unsubscribe_hash: params[:unsubscribe_hash])
        @email.destroy
        render html: "Sucessfully Unsubscribed"
    end

    private 
    def email_params 
        params.require(:email).permit(
            :email
        )
    end 
end
