json.array! (@visuals) do |visual|
    json.partial! 'visual', visual: visual 
end
