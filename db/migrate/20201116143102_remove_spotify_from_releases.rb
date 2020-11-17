class RemoveSpotifyFromReleases < ActiveRecord::Migration[5.2]
  def change
    remove_column :releases, :spotify
    add_column :releases, :audio, :string
  end
end
