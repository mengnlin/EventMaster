class AddTimeToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :time, :time
    add_column :events, :location, :string
    add_column :events, :category, :string
  end
end
