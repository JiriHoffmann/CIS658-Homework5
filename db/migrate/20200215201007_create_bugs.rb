class CreateBugs < ActiveRecord::Migration[6.0]
  def change
    create_table :bugs do |t|
      t.string :Title
      t.text :Description
      t.integer :Issue_type
      t.integer :Priority
      t.integer :Status

      t.timestamps
    end
  end
end
