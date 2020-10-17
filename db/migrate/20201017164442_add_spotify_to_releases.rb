class AddSpotifyToReleases < ActiveRecord::Migration[5.2]
  def change
    add_column :releases, :spotify, :string
  end
end
