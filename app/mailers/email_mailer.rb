class EmailMailer < ApplicationMailer
    default from: "spacemother.recs@gmail.com" 

    def welcome_email(email)
        @email = email
        
        mail(to: @email.email, subject: "Thanks for joining our mailing list!")
    end

    def new_artist(email, artist)
        @email = email
        @artist = artist

        mail(to: @email.email, subject: "Check out our new artist #{@artist.name}")
    end

    def contact(obj)

        @email = obj["email"]
        @name = obj["name"]
        @number = obj["number"]
        @message = obj["message"]

        mail(to: "spacemother.recs@gmail.com", subject: "New Message from #{@name}")
    end
end
