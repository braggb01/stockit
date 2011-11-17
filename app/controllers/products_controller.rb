class ProductsController < ApplicationController
  # GET /products
  # GET /products.json
  autocomplete :product_type, :prod_number, :full => true
  autocomplete :purchase, :po_number, :full => true

  
  def index
    @title = "Products"
    #@products = Product.all
    @purchase = Purchase.find(params[:purchase_id])
    @products = @purchase.products.all
    @q = Product.search(params[:q])
    @products = @q.result(:distinct => true).page params[:page]
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @products }
    end
  end

  # GET /products/1
  # GET /products/1.json
  def show
    @title = "Product"
    @purchase = Purchase.find(params[:purchase_id])
    @product = Product.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @product }
    end
  end

  # GET /products/new
  # GET /products/new.json
  def new
    @title = "New Product"
    @purchase = Purchase.find(params[:purchase_id])
    @product = Product.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @product }
    end
  end

  # GET /products/1/edit
  def edit
    @title = "Edit Product"
    @purchase = Purchase.find(params[:purchase_id])
    @product = Product.find(params[:id])
  end

  # POST /products
  # POST /products.json
  def create
    @purchase = Purchase.find(params[:purchase_id])
    @product = @purchase.products.create(params[:product])

    respond_to do |format|
      if @product.save
        format.html { redirect_to purchase_path(@purchase), notice: 'Product was successfully created.' }
        format.json { render json: @product, status: :created, location: @product }
      else
        format.html { render action: "new" }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /products/1
  # PUT /products/1.json
  def update
    @purchase = Purchase.find(params[:purchase_id])
    @product = Product.find(params[:id])

    respond_to do |format|
      if @product.update_attributes(params[:product])
        format.html { redirect_to purchase_path(@purchase), notice: 'Product was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @purchase = Purchase.find(params[:purchase_id])
    @product = Product.find(params[:id])
    @product.destroy

    respond_to do |format|
      format.html { redirect_to purchase_path(@purchase) }
      format.json { head :ok }
    end
  end
end
