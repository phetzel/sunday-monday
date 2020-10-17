class Release < ApplicationRecord
    validates :title, :spotify, presence: true
end
