class CreateChapters < ActiveRecord::Migration[5.0]
  def change
    create_table :chapters do |t|
      t.belongs_to :book
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
