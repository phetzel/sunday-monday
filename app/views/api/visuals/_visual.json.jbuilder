json.extract! visual, :id, :title, :description
json.photoUrl url_for(visual.photo) if visual.photo.attached?