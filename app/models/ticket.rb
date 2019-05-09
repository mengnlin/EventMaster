class Ticket < ApplicationRecord
    validates :price, :quantity, presence:true
    
    belongs_to :event
    
end
