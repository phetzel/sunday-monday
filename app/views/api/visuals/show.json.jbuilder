json.partial! '/api/visuals/visual', visual: @visual

json.artists do 
    json.array! @visual.artists do |artist|
        json.partial! 'api/artists/artist', artist: artist
    end 
end