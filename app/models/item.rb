class Item < ApplicationRecord
    validates :title, :description, :price, :category, presence: true

    has_one_attached :photo
end
