class CreateReleases < ActiveRecord::Migration[5.2]
  def change
    create_table :releases do |t|
      t.string :title, null: false
      t.text :description 
      t.string :pandora_url, null: false

      t.timestamps
    end
  end
end
