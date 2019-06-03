class Collection < ApplicationRecord
    validates :user_id, :event_id, presence:true
    validates :event_id,uniqueness:true
    belongs_to :user
    belongs_to :event
end
