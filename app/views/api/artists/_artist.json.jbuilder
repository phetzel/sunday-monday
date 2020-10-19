json.extract! artist, :id, :name, :description
json.photoUrl url_for(artist.photo) if artist.photo.attached?