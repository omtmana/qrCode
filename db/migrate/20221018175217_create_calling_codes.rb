class CreateCallingCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :calling_codes do |t|
      t.string :image
      t.string :name
      t.integer :phone_num
      t.string :email
      t.string :other_info
      t.integer :user_id

      t.timestamps
    end
  end
end
