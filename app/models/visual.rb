class Visual < ApplicationRecord
    validates :title, presence: true

    has_one_attached :photo

    has_many :painters
    has_many :artists, through: :painters, source: :artist
end
