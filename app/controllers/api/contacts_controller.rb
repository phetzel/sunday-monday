class Api::ContactsController < ApplicationController
    def create
        new_email = EmailMailer.contact(contact_params)
        new_email.deliver
    end

    private 
    def contact_params 
        params.require(:contact).permit(
            :id,
            :name,
            :email,
            :number,
            :message
        )
    end 
end
