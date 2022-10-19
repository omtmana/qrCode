class CreateCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :codes do |t|
      t.string :image
      t.string :title
      t.integer :user_id

      t.timestamps
    end
  end
end
