class Painter < ApplicationRecord
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    belongs_to :visual,
        primary_key: :id,
        foreign_key: :visual_id,
        class_name: :Visual
end
