# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20111110131223) do

  create_table "locations", :force => true do |t|
    t.string   "room"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "product_types", :force => true do |t|
    t.string   "prod_number"
    t.text     "prod_desc"
    t.string   "brand",           :default => "Cisco"
    t.integer  "total_quantity",  :default => 0
    t.integer  "needed_quantity", :default => 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "products", :force => true do |t|
    t.integer  "purchase_id"
    t.integer  "product_type_id"
    t.integer  "quantity"
    t.integer  "location_id"
    t.boolean  "received",        :default => false
    t.date     "date_received"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "purchases", :force => true do |t|
    t.string   "po_number"
    t.date     "date_ordered"
    t.boolean  "complete"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
