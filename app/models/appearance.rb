class Appearance < ApplicationRecord
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video
end
