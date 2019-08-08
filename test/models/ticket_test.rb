# frozen_string_literal: true

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

require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
