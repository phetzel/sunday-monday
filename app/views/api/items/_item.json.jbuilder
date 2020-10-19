json.extract! item, :id, :title, :description, :price, :category
json.photoUrl url_for(item.photo) if item.photo.attached?