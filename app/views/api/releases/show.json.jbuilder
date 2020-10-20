json.partial! '/api/releases/release', release: @release

json.artists do 
    json.array! @release.artists do |artist|
        json.partial! 'api/artists/artist', artist: artist
    end 
end