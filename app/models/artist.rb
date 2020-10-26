class Artist < ApplicationRecord
    validates :name, :description, presence: true

    has_one_attached :photo

    has_many :features
    has_many :releases, through: :features, source: :release


    has_many :performs
    has_many :events, through: :performs, source: :event
end
