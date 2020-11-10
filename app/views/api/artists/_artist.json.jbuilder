json.extract! artist, :id, :name, :description, :style
json.photoUrl url_for(artist.photo) if artist.photo.attached?