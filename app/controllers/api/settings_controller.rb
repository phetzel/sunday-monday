class SettingsController < ApplicationController
    def show
        @setting = Setting.first
        render :show 
    end

    def update 
        @setting = Visual.Setting.first
        if @setting.update(setting_params)
            render :show
        else  
            render json: @setting.errors.full_messages, status: 422
        end
    end

    private
    def setting_params
        params.require(:setting).permit(
            :photo
        )
    end
end
