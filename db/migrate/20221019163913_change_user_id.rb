class ChangeUserId < ActiveRecord::Migration[7.0]
  def change
    change_column :links, :user_id, :integer
  end
end
