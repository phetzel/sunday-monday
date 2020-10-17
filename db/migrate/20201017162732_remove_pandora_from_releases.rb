class RemovePandoraFromReleases < ActiveRecord::Migration[5.2]
  def change
    remove_column :releases, :pandora_url
  end
end
