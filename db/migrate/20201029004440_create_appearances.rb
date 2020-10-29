class CreateAppearances < ActiveRecord::Migration[5.2]
  def change
    create_table :appearances do |t|
      t.integer :artist_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
  end
end
