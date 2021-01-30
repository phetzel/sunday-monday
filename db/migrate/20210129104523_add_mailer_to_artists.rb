class AddMailerToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :mailer, :boolean
  end
end
