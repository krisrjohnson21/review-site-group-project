class CreateCapes < ActiveRecord::Migration[5.2]
  def change
    create_table :capes do |t|
      t.string :name, null: false
      t.string :full_name, null: false
      t.string :gender, null: false
      t.string :affiliation, null: false
      t.integer :intelligence, null: false
      t.integer :strength, null: false
      t.integer :speed, null: false
      t.string :url, null: false

      t.timestamps
    end
  end
end
