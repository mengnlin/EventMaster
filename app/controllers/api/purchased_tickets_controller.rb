class Api::Purchased_Tickets_Controller < ApplicationController
    before_action :require_logged_in

    def create
        @purchased_ticket=PurchasedTicket.create(purchased_ticket_params)
        if purchased_ticket.save
            render 'api/purchase_tickets'
        else
            render json: @purchased_ticket.errors.full_messages, status:422
        end 
    end
e
    def index 
        PurchasedTicket.all
    end 

    def destory 
        @purchased_ticket=current_user.purchase_tickets.find(params[:id])
        @purchased_ticket.destory
    end 
    def purchased_ticket_params(event)
        params.require([user_id:current_user.id,event_id:event.id])
        return {user_id:current_user.id,event_id:event.id}
    end 
end 
