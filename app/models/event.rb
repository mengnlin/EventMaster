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
#  time         :time
#  location     :string
#  category     :string
#

class Event < ApplicationRecord

    validates :title,:description,:event_date,:organizer_id,:time,:location,:category,presence:true 
    validates :title, uniqueness:true

    belongs_to :user,
    foreign_key: :organizer_id,
    primary_key: :id,
    class_name: :User

    has_one_attached :picture

    has_one :ticket

    has_many :purchased_tickets


end
