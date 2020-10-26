class RemoveTypeFromReleases < ActiveRecord::Migration[5.2]
  def change
    remove_column :releases, :type
    add_column :releases, :medium, :string
  end
end
