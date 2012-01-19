class ProductTypesController < ApplicationController
  # GET /product_types
  # GET /product_types.json
  load_and_authorize_resource
  def index
    @title = "Inventory"
    @product_type = ProductType.new
    @interested = ProductType.where("needed_quantity > 0 OR total_quantity > 0")
    @q = @interested.search(params[:q])
    @product_types = @q.result.order('needed_quantity DESC').page params[:page]

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @product_types }
    end
  end

  # GET /product_types/1
  # GET /product_types/1.json
  def show
    @title = "Product Type"
    @product_type = ProductType.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @product_type }
    end
  end

  # GET /product_types/new
  # GET /product_types/new.json
  def new
    @title = "New Product Type"
    @product_type = ProductType.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @product_type }
    end
  end

  # GET /product_types/1/edit
  def edit
    @title = "Edit Product Type"
    @product_type = ProductType.find(params[:id])
  end

  # POST /product_types
  # POST /product_types.json
  def create
    @product_type = ProductType.new(params[:product_type])

    respond_to do |format|
      if @product_type.save
        @product_type_before = 'tablehead'
        
        format.html { redirect_to @product_type, notice: 'Product type was successfully created.' }
        format.js
        format.json { render json: @product_type, status: :created, location: @product_type }
      else
        format.html { render action: "new" }
        format.js
        format.json { render json: @product_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /product_types/1
  # PUT /product_types/1.json
  def update
    @product_type = ProductType.find(params[:id])

    respond_to do |format|
      if @product_type.update_attributes(params[:product_type])
        format.html { redirect_to @product_type, notice: 'Product type was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @product_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /product_types/1
  # DELETE /product_types/1.json
  def destroy
    @product_type = ProductType.find(params[:id])
    @product_type.destroy

    respond_to do |format|
      format.html { redirect_to product_types_url }
      format.json { head :ok }
    end
  end
end
