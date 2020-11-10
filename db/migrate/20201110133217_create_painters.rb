class CreatePainters < ActiveRecord::Migration[5.2]
  def change
    create_table :painters do |t|
      t.integer :artist_id, null: false
      t.integer :visual_id, null: false

      t.timestamps
    end
  end
end
