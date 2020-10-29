class Api::AppearancesController < ApplicationController
    def create 
        appearance = Appearance.new(appearance_params)
        appearance.save
    end
    
    def destroy
        @appearance = Appearance.find(params[:id]);
        @appearance.destroy 
    end

    private 
    def appearance_params 
        params.require(:appearance).permit(
            :artist_id,
            :video_id,
        )
    end 
end
