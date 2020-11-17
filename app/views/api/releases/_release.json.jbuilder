json.extract! release, :id, :title, :description, :audio, :medium
json.photoUrl url_for(release.photo) if release.photo.attached?