class Api::FeaturesController < ApplicationController
    def create 
        feature = Feature.new(feature_params)
        feature.save
    end
    
    def destroy
        @feature = Feature.find(params[:id]);
        @feature.destroy 
    end

    private 
    def feature_params 
        params.require(:feature).permit(
            :artist_id,
            :release_id,
        )
    end 

end
