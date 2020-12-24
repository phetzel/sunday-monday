class Api::ArtistsController < ApplicationController
    def index
        @artists = Artist.order(:name)

        if style
            @artists = @artists.select{ |artist| artist.style == style }
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

        if @artist.save
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

    def artist_params 
        params.require(:artist).permit(
            :id,
            :name,
            :description,
            :photo,
            :style,
            :instagram
        )
    end 


    def style
        params[:style]
    end
    
end
