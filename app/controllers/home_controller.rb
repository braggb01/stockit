class HomeController < ApplicationController
  def index
		@title = "Dashboard"

		@purchases = Purchase.all
		@product_types = ProductType.all

		respond_to do |format|
      format.html # index.html.erb
    end
  end

end
