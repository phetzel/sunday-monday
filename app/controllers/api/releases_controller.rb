class Api::ReleasesController < ApplicationController
    def index
        @releases = Release.all
        if medium
            @releases = @releases.select{ |release| release.medium == medium }
            puts @releases
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
            if @release.mailer
                emails = Email.all
                emails.each do |email|
                    new_email = EmailMailer.new_release(email, @release)
                    new_email.deliver
                end
            end

            render :show 
        else  
            render json: @release.errors.full_messages, status: 422
        end 
    end 

    def update 
        @release = Release.find(params[:id])
        if @release.update(release_params)
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
            :medium,
            :mailer
        )
    end

    def medium
        params[:type][:medium]
    end

    def page
        params[:page]
    end
end
