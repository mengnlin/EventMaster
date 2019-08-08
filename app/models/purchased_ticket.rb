# == Schema Information
#
# Table name: purchased_tickets
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  ticket_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PurchasedTicket < ApplicationRecord
  validates :user_id, :event_id, :ticket_id, presence: true
  belongs_to :event
  belongs_to :ticket
  belongs_to :user
end
