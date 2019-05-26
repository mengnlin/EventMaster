# == Schema Information
#
# Table name: tickets
#
#  id         :bigint           not null, primary key
#  price      :integer          not null
#  quantity   :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ticket < ApplicationRecord
    validates :price, :quantity, presence:true
    
    belongs_to :event
    
end
