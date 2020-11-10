class AddStyleToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :style, :string
  end
end
