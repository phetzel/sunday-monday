class AddUnsubscribeHashToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :unsubscribe_hash, :string
  end
end
