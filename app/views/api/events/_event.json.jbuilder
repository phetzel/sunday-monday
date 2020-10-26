json.extract! event, :id, :title, :description, :lat, :lng, :address, :datetime
json.photoUrl url_for(event.photo) if event.photo.attached?