class Api::VideosController < ApplicationController
    def index
        @videos = Video.order(created_at: :desc)
        if page 
            @videos = Video.order(created_at: :desc).limit(6).offset(page.to_i * 6)
        end 
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show 
    end 

    def create 
        @video = Video.new(video_params)

        if @video.save
            render :show 
        else  
            render json: @video.errors.full_messages, status: 422
        end 
    end 

    def update 
        @video = Video.find(params[:id])
        if @video.update(video_params)
            render :show
        else  
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        video = Video.find(params[:id])
        video.destroy
        @videos = Video.all 
        render :index
    end

    private
    def video_params
        params.require(:video).permit(
            :id,
            :title,
            :description,
            :url
        )
    end

    def page
        params[:page]
    end

end
