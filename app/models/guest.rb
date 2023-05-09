class Guest < ApplicationRecord
  validates :full_name, presence: true
  validates :phone_number, presence: true, uniqueness: true, format: { with: /\A\d{10}\z/, message: "must be a valid 10-digit phone number" }
end
