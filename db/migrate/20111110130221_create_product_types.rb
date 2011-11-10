class CreateProductTypes < ActiveRecord::Migration
  def change
    create_table :product_types do |t|
      t.string :prod_number, :unique => true
      t.text :prod_desc
      t.string :brand, :default => 'Cisco'
      t.integer :total_quantity, :default => 0
      t.integer :needed_quantity, :default => 0

      t.timestamps
    end
  end
end
