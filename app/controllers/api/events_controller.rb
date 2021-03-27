class Api::EventsController < ApplicationController
    def index
        @events = Event.order(:datetime)
        @events = @events.select{ |event| event.datetime.future? }

        #if data == 'past'
        #    @events = @events.select{ |event| event.datetime.past? }
        #elsif data == 'future'
        #    @events = @events.select{ |event| event.datetime.future? }
        #end

        render :index 
    end 

    def show        
        if params[:id] == 'undefined'
            events = Event.order(:datetime).select{ |e| e.datetime.future? }
            @event = events.first
        else 
            @event = Event.find(params[:id])
        end

        render :show
    end  

    def create
        @event = Event.new(event_params)

        if @event.save
            render :show 
        else 
            render json: @event.errors.full_messages, status: 422 
        end 
    end  

    def update 
        @event = Event.find(params[:id])
        if @event.update(event_params)
            render :show
        else  
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        @events = Event.all
        render :index
    end

    private 

    def event_params 
        params.require(:event).permit(
            :title,
            :description,
            :datetime,
            :lat,
            :lng, 
            :address,
            :venue,
            :photo,
            :data
        )
    end

    def data
        params[:data]
    end
end
