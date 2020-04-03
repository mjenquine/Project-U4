class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :runs
      t.string :elevation
      t.string :lift
      t.string :bar

      t.timestamps
    end
  end
end
