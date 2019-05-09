class Ticket < ApplicationRecord
    validate :price, :quantity, presence:true
    
    belongs_to :event
    
end
