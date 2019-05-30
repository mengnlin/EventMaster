class Api::TicketsController < ApplicationController
    before_action :require_logged_in

    def create
        @ticket = Ticket.create(ticket_params)
        event=Event.find(@ticket.event.id)
        @ticket.event.organizer_id=current_user.id
        if @ticket.save 
            render 'api/tickets'
        else  
            render json: @ticket.errors.full_messages, status:422
        end 

    end 

    def index 
        @tickets=Ticket.all
    end 



     def destroy 
        @ticket=current_user.events.find(params[:id])
        @ticket.destroy
    end 
    private

    def ticket_params
        params.permit(:price, :quantity,:event_id)
    end 
end
