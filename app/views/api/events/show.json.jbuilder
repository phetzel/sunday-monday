json.partial! "api/events/event", event: @event

json.artists do 
    json.array! @event.artists do |artist|
        json.partial! 'api/artists/artist', artist: artist
    end 
end