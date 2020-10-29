class Video < ApplicationRecord
    validates :title, :url, presence: true

    has_many :appearances
    has_many :artists, through: :appearances, source: :artist
end
