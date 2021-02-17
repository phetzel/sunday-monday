json.extract! event, :id, :title, :description, :lat, :lng, :address, :datetime
json.photoUrl url_for(event.photo) if event.photo.attached?

json.artists do 
    json.array! event.artists do |artist|
        json.partial! 'api/artists/artist', artist: artist
    end 
end