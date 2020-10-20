json.partial! '/api/artists/artist', artist: @artist

json.releases do 
    json.array! @artist.releases do |release|
        json.partial! 'api/releases/release', release: release
    end 
end