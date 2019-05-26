class ChangeTicketColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :tickets, :quanity, :quantity
  end
end
