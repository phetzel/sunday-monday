class EmailMailer < ApplicationMailer
    default from: "phetzel89@gmail.com" 

    def welcome_email(email)
        @email = email
        mail(to: @email.email, subject: "Thanks for joining our mailing list!")
    end
end
