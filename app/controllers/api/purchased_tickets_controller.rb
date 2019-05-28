class Api::PurchasedTicketsController < ApplicationController
    before_action :require_logged_in

    def create
        @purchased_ticket=PurchasedTicket.create(purchased_ticket_params)
        if @purchased_ticket.save
            @purchased_tickets=current_user.purchased_tickets
            debugger
            render "api/purchased_tickets/index"
        else
            render json: @purchased_ticket.errors.full_messages, status:422
        end 
    end

    def index 
        @purchased_tickets=current_user.purchased_tickets
    end 

    def destroy 
        @purchased_ticket=current_user.purchased_tickets.find(params[:id])
        @purchased_ticket.destroy
    end 
    def purchased_ticket_params
        params.require([:ticket_id])
        ticketId=params[:ticket_id]
        ticket=Ticket.find_by_id(ticketId)
        return {ticket_id:ticketId,user_id:current_user.id,event_id:ticket.event_id}
    end 
end 
