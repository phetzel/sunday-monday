class Api::PerformsController < ApplicationController
    def create 
        perform = Perform.new(perform_params)
        perform.save
    end
    
    def destroy
        @perform = Perform.find(params[:id]);
        @perform.destroy 
    end

    private 
    def perform_params 
        params.require(:perform).permit(
            :artist_id,
            :event_id,
        )
    end 
end
