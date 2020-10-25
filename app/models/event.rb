class Event < ApplicationRecord
    validates  :title, :description, :lat, :lng, :datetime, presence: true
end
