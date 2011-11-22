class User < ActiveRecord::Base
	has_secure_password
	validates_presence_of :password, :email, :username
	validates_uniqueness_of :email, :username
end
