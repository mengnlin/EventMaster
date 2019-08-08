class PurchasedTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :purchased_tickets do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.integer :ticket_id, null: false
      t.timestamps
    end
  end
end
