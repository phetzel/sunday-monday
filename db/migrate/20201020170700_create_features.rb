class CreateFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :features do |t|
      t.integer :artist_id, null: false
      t.integer :release_id, null: false

      t.timestamps
    end
  end
end
