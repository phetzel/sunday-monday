class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.text :description, null: false 
      t.integer :price, null: false 
      t.string :category, null: false

      t.timestamps
    end

    add_index :items, :title
    add_index :items, :category
  end
end
