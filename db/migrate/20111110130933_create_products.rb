class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :purchase_id
      t.integer :product_type_id
      t.integer :quantity
      t.integer :location_id
      t.boolean :received, :default => false
      t.date :date_received

      t.timestamps
    end
  end
end
