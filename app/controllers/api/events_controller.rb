class Api::EventsController < ApplicationController
    before_action :require_logged_in, only:[:create,:update]

    def create 
        @event =Event.create(event_params)
        @event.organizer_id = current_user.id
        if @event.save
            render 'api/events/show'
        else  
            render json: @event.errors.full_messages, status:422
        end 
    end 
    def index 
        @events=Event.all
        if params[:category]
            @events = @events.select{|event| event.category==params[:category]}
        elsif params[:editorpick]
            @events = @events[0...10]
        end
    end 

    def show 
        @event =Event.find(params[:id])
    end  


    def update 
        @event=current_user.events.find(params[:id])
        @event.update_attributes(event_params)
        if @event.save 
            render 'api/events/show' 
        else  
            render json: @event.errors.full_messages, status:422 
        end 
    end 

    def destroy
        @event =current_user.events.find(params[:id])
        @event.destroy
    end 

    private 
    def event_params 
        params.permit(:id,:title,:description,:event_date,:location,:time,:category,:picture)
    end  

end
