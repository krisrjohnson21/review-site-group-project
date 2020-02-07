class AddAttributesToCapes < ActiveRecord::Migration[5.2]
  def change
    add_column :capes, :durability, :integer, null: false, default: 1
    add_column :capes, :power, :integer, null: false, default: 1
    add_column :capes, :combat, :integer, null: false, default: 1
  end
end
