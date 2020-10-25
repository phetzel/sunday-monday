class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.float :lat, null: false
      t.float :lng, null: false 
      t.string :address
      t.datetime :datetime, null: false
      t.timestamps
    end
    add_index :events, :datetime
  end
end
