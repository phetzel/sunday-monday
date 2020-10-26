class AddTypeToReleases < ActiveRecord::Migration[5.2]
  def change
    add_column :releases, :type, :string
  end
end
