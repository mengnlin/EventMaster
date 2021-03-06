class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: %i[create update]

  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    if @event.save
      Ticket.create(ticket_params(@event)).save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    @events = Event.all
    if params[:category]
      @events = @events.select { |event| event.category == params[:category] }
    elsif params[:editorpick]
      ending = @events.length - 1
      @events = @events[ending - 8...ending]
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  def update
    @event = current_user.events.find(params[:id])
    @event.update_attributes(event_params)
    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = current_user.events.find(params[:id])
    @event.destroy
  end

  private

  def event_params
    params.permit(:id, :title, :description, :event_date, :location, :time, :category, :picture)
  end

  def ticket_params(event)
    params.require(%i[ticket price])
    { quantity: params[:ticket], price: params[:price], event_id: event.id }
  end
end
