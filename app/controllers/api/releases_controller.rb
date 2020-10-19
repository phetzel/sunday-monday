class Api::ReleasesController < ApplicationController
    def index
        @releases = Release.all
        render :index 
    end 

    def show
        @release = Release.find(params[:id])
        render :show
    end 

    def create
        @release = Release.new(release_params)
        
        if @release.save
            render :show 
        else  
            render json: @release.errors.full_messages, status: 422
        end 
    end 

    private
    def release_params
        params.require(:release).permit(
            :id,
            :title,
            :description,
            :spotify,
            :photo
        )
    end
end
