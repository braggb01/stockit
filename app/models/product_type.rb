class ProductType < ActiveRecord::Base
	has_many :products
	validates_presence_of :prod_number, :prod_desc
	validates_uniqueness_of :prod_number
end
