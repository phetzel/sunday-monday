class Feature < ApplicationRecord
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    belongs_to :release,
        primary_key: :id,
        foreign_key: :release_id,
        class_name: :Release
end
