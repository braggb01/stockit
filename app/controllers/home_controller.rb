class HomeController < ApplicationController
  def index
		@title = "Dashboard"

		@purchases = Purchase.all
		# @product_types = ProductType.all
		@myunfilled = Purchase.where("user_id = ? AND complete = ?", current_user, false)
		@otherunfilled = Purchase.where("user_id != ? AND complete = ?", current_user, false)
		@lowinventory = ProductType.where("needed_quantity > 0 AND total_quantity < needed_quantity").order('needed_quantity asc').limit(10)

		respond_to do |format|
      format.html # index.html.erb
    end
  end

end
