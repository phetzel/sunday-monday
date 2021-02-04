# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    # Artist.destroy_all
    # Event.destroy_all
    # Feature.destroy_all
    # Item.destroy_all
    # Painter.destroy_all
    # Perform.destroy_all
    # Release.destroy_all
    User.destroy_all

    User.create!(
        id: '1',
        email: 'Admin',
        password: 'admin123',
    )

    Email.destroy_all

    # Video.destroy_all
    # Visual.destroy_all
# 




end