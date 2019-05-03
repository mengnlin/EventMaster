# == Schema Information
#
# Table name: events
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text             not null
#  event_date   :date             not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ApplicationRecord

    validates :title,:event_date,:event_date,:organizer_id,presence:true 
    validates :title, uniqueness:true

    belongs_to :users, foreign_key: :organizer_id,class_name: :User


end
