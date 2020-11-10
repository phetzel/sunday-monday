class Api::PaintersController < ApplicationController
    def create 
        painter = Painter.new(painter_params)
        painter.save
    end
    
    def destroy
        @painter = Painter.find(params[:id]);
        @painter.destroy 
    end

    private 
    def painter_params 
        params.require(:painter).permit(
            :artist_id,
            :visual_id,
        )
    end 
end
