class AddIndexsToProducts < ActiveRecord::Migration
  def change
    add_index :products, :purchase_id
    add_index :products, :product_type_id
    add_index :products, :location_id
    add_index :products, :user_id
  end
end
