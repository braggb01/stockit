class AddIndexToProductTypes < ActiveRecord::Migration
  def change
  	add_index :product_types, :prod_number, :unique => true
  	add_index :product_types, :brand
  	add_index :product_types, :total_quantity
  	add_index :product_types, :needed_quantity
  end
end