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
  has_one_attached :picture

  validates :title, :description, :event_date, :organizer_id, :time, :location, :category, presence: true
  validate :ensure_picture
  validates :title, uniqueness: true

  belongs_to :user,
             foreign_key: :organizer_id,
             primary_key: :id,
             class_name: :User

  has_one :ticket
  # has_many :collections

  has_many :purchased_tickets

  def ensure_picture
    errors[:photo] << 'Must be attached' unless picture.attached?
  end
end
