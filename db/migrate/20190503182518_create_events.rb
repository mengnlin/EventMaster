class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null:false 
      t.text :description, null:false
      t.date :event_date,null:false
      t.integer :organizer_id, null:false 
      t.timestamps
    end
    add_index :events,:organizer_id 
    add_index :events,:title,unique:true
  end
end
