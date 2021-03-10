class Artist < ApplicationRecord
    validates :name, :description, presence: true

    has_one_attached :photo
    has_one_attached :banner

    has_many :features
    has_many :releases, through: :features, source: :release

    has_many :performs
    has_many :events, through: :performs, source: :event

    has_many :appearances
    has_many :videos, through: :appearances, source: :video

    has_many :painters
    has_many :visuals, through: :painters, source: :visual
end
