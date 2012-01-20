class ApplicationController < ActionController::Base
  protect_from_forgery
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, :notice => exception.message
  end

  private

  def my_unfilled_po
  	@myunfilled = Purchase.where("user_id = ? AND complete = ?", current_user, false)
  end

  helper_method :my_unfilled_po
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user
end
