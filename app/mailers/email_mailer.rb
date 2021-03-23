class EmailMailer < ApplicationMailer
    default from: "spacemother.recs@gmail.com" 

    def welcome_email(email)
        @email = email
        
        mail(to: @email.email, subject: "Thank you for joining Spacemother!")
    end

    def new_artist(email, artist)
        @email = email
        @artist = artist

        mail(to: @email.email, subject: "Brand new Spacemother artist!")
    end

    def new_release(email, release)
        @email = email
        @release = release

        mail(to: @email.email, subject: "Brand new Spacemother release!")
    end

    def contact(obj)
        @email = obj["email"]
        @name = obj["name"]
        @number = obj["number"]
        @message = obj["message"]

        mail(to: "spacemother.recs@gmail.com", subject: "New Message from #{@name}")
    end
end
