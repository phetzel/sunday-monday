json.extract! release, :id, :title, :description, :spotify, :medium
json.photoUrl url_for(release.photo) if release.photo.attached?