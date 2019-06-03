class Api::CollectionsController < ApplicationController
     before_action :require_logged_in, only:[:create,:destroy]
     def create 
        @collection =Collection.create({user_id:current_user.id,event_id:params[:event_id]})
        @collection.user_id = current_user.id
        if @collection.save
            render 'api/collections/index'
        else  
            render json: 'Event is already in your collection'
        end 
    end 

    def index 
        @followed_events=current_user.followed_events
    end 

    def destroy
        @collection =current_user.collections.find(params[:id])
        @collection.destroy
    end 

     private 
    def collection_params 
        params.permit(:event_id,:id)
    end  

end
