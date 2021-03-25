class Api::ArtistsController < ApplicationController
    def index
        @artists = Artist.order(:name)
        
        if params[:type] && style
            # @artists = @artists.select{ |artist| artist.style == style }
            @artists = Artist.order(:name).limit(6).offset(page.to_i * 6)
        end

        render :index
    end 

    def show
        if params[:id] == 'undefined'
            @artist = Artist.all.last
        else 
            @artist = Artist.find(params[:id])
        end

        render :show
    end  

    def create
        @artist = Artist.new(artist_params)
        puts params

        if @artist.save

            if @artist.mailer
                emails = Email.all
                emails.each do |email|
                    new_email = EmailMailer.new_artist(email, @artist)
                    new_email.deliver
                end
            end

            render :show
        else 
            render json: @artist.errors.full_messages, status: 422
        end
    end 

    def update 
        @artist = Artist.find(params[:id])
        if @artist.update(artist_params)
            render :show
        else  
            render json: @artist.errors.full_messages, status: 422
        end
    end

    def destroy
        artist = Artist.find(params[:id])
        artist.destroy
        @artists = Artist.all
        render :index
    end

    private

    def artist_params 
        params.require(:artist).permit(
            :id,
            :name,
            :description,
            :photo,
            :banner,
            :style,
            :instagram,
            :mailer
        )
    end 


    def style
        params[:type][:style]
    end

    def page
        params[:page]
    end
    
end
