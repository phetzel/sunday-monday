class Api::ReleasesController < ApplicationController
    def index
        @releases = Release.all

        if medium
            @releases = @releases.select{ |release| release.medium == medium }
        end

        render :index 
    end 

    def show
        if params[:id] == 'undefined'
            @release = Release.all.last
        else 
            @release = Release.find(params[:id])
        end

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
    
    def destroy
        release = Release.find(params[:id])
        release.destroy
        @releases = Release.all 
        render :index
    end

    private
    def release_params
        params.require(:release).permit(
            :id,
            :title,
            :description,
            :audio,
            :photo,
            :medium
        )
    end

    def medium
        params[:medium]
    end
end
