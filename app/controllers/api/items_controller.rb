class Api::ItemsController < ApplicationController
    def index
        @items = Item.all 

        if category != ""
            @items = @items.select{ |item| item.category == category}
        end 
        
        render :index 
    end 

    def show
        @item = Item.find(params[:id])
        render :show 
    end 

    def create
        @item = Item.new(item_params)
        
        if @item.save
            render :show 
        else 
            render json: @item.errors.full_messages, status: 422
        end 
    end

    private
    def item_params
        params.require(:item).permit(
            :title,
            :description,
            :price,
            :category
        )
    end 

    def category
        params[:category]
    end 
end
