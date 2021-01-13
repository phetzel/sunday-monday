class Email < ApplicationRecord
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :email, uniqueness: true

    before_create :add_unsubscribe_hash

    private

    def add_unsubscribe_hash
        self.unsubscribe_hash = SecureRandom.hex
    end 
end
