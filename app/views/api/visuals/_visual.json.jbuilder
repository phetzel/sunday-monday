json.extract! visual, :id, :title, :description
json.photoUrl url_for(visual.photo) if visual.photo.attached?

json.artists do 
    json.array! visual.artists do |artist|
        json.partial! 'api/artists/artist', artist: artist
    end 
end