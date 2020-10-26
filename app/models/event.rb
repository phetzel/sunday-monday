class Event < ApplicationRecord
    validates  :title, :description, :lat, :lng, :datetime, presence: true

    has_one_attached :photo

    has_many :performs
    has_many :artists, through: :performs, source: :artist
end
