class User < ActiveRecord::Base
	has_many :purchases
	has_many :products
	has_secure_password
	validates_presence_of :password, :email, :username
	validates_uniqueness_of :email, :username
end
