class Api::VisualsController < ApplicationController
    def index
        @visuals = Visual.order(created_at: :desc)
        if page 
            @visuals = Visual.order(created_at: :desc).limit(6).offset(page.to_i * 6)
        end 
        
        render :index
    end

    def show
        @visual = Visual.find(params[:id])
        render :show 
    end 

    def create 
        @visual = Visual.new(visual_params)

        if @visual.save
            render :show 
        else  
            render json: @visual.errors.full_messages, status: 422
        end 
    end 

    def update 
        @visual = Visual.find(params[:id])
        if @visual.update(visual_params)
            render :show
        else  
            render json: @visual.errors.full_messages, status: 422
        end
    end

    def destroy
        visual = Visual.find(params[:id])
        visual.destroy
        @visuals = Visual.all 
        render :index
    end

    private
    def visual_params
        params.require(:visual).permit(
            :id,
            :title,
            :description,
            :photo
        )
    end

    def page
        params[:page]
    end
end
