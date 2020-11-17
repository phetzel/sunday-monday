class Release < ApplicationRecord
    validates :title, :audio, presence: true

    has_one_attached :photo

    has_many :features
    has_many :artists, through: :features, source: :artist
end
