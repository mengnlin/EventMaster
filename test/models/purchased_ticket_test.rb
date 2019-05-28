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

require 'test_helper'

class PurchasedTicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
