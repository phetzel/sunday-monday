class RemoveSpoitifyFromReleases < ActiveRecord::Migration[5.2]
  def change
        remove_column :releases, :spoitify
  end
end
