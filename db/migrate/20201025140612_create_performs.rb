class CreatePerforms < ActiveRecord::Migration[5.2]
  def change
    create_table :performs do |t|
      t.integer :artist_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
  end
end
