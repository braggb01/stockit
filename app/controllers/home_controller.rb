class HomeController < ApplicationController
  def index
		@title = "Dashboard"

		@purchases = Purchase.all
		# @product_types = ProductType.all
		# @purchases = Purchase.where("user = current_user AND complete = false")
		@product_types = ProductType.where("needed_quantity > 0 AND total_quantity < needed_quantity")

		respond_to do |format|
      format.html # index.html.erb
    end
  end

end
