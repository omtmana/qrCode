class CreateLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :links do |t|
      t.string :link_url
      t.string :link_title
      t.string :user_id

      t.timestamps
    end
  end
end
