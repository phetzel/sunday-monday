class Perform < ApplicationRecord
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    belongs_to :event,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event
end
