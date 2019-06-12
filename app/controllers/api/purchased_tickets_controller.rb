class Api::PurchasedTicketsController < ApplicationController
    before_action :require_logged_in

    def create
        @purchased_ticket=PurchasedTicket.new(purchased_ticket_params)
        event=Event.find(purchased_ticket_params[:event_id])
        @purchased_ticket.user_id=current_user.id
        @purchased_ticket.event=event 
        @purchased_ticket.ticket_id=event.ticket.id
        purchased_tickets_count=event.purchased_tickets.length
        if event.purchased_tickets.length>= event.ticket.quantity
            render json: '"Sorry Ticket had Sold Out"'
        elsif @purchased_ticket.save
            @purchased_tickets=current_user.purchased_tickets
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
