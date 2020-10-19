class Release < ApplicationRecord
    validates :title, :spotify, presence: true

    has_one_attached :photo
end
