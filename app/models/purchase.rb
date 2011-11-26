class Purchase < ActiveRecord::Base
	has_many :products, :dependent => :destroy
	belongs_to :user

	validates :po_number, :presence => true
	validates :complete, :inclusion => { :in => [true, false] }





end
