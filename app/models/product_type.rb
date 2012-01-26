class ProductType < ActiveRecord::Base
	has_many :products
	validates_presence_of :prod_number, :prod_desc
	validates_uniqueness_of :prod_number

	scope :low_stock, where("total_quantity < needed_quantity AND total_quantity != needed_quantity")
	scope :sorted, order("needed_quantity DESC")

end
