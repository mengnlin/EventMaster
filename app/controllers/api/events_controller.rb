class Api::EventsController < ApplicationController
    before_action :require_logged_in, only:[:create]

    def create 
        @event =Event.create(event_params)
        @event.organizer_id = current_user.id
        if @event.save
            render 'api/events/show'
            # why not render json @event
        else  
            render json: @event.errors.full_message,status:422
        end 
    end 
    def index 
        @events=Event.all
        # render json :index
    end 

    def show 
        @event =Event.find(params[:id])
    end  


    def update 
        @event=Event.find(params[:event][:id])

        # why do we need to have params[:event][:id]
        @event.update_attributes(event_params)
        if @event.save 
            render 'api/events/show' 
        else  
            render json: @event.errors.full_message,status:422 
        end 
    end 

    def destroy
        @event =Event.find(params[:id])
        @event.destroy
    end 

    private 
    def event_params 
        params.require(:event).permit(:title,:description,:event_date)
    end  

end
