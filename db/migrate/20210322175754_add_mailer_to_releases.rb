class AddMailerToReleases < ActiveRecord::Migration[5.2]
  def change
    add_column :releases, :mailer, :boolean
  end
end
