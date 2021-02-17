json.extract! release, :id, :title, :description, :audio, :medium
json.photoUrl url_for(release.photo) if release.photo.attached?

json.artists do 
    json.array! release.artists do |artist|
        json.partial! 'api/artists/artist', artist: artist
    end 
end