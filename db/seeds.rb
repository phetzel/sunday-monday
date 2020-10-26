# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Artist.destroy_all

    # artist = Artist.create!(
    #     id: '1',
    #     name: 'Dj GoFuckYourself',
    #     description: "Blending the smooth sounds of music, with the scary sounds of Jazz,
    #      Dj GoFuckYourself, or Francis, will make you move both feet at the same time. Wow! This 
    #      up and coming dj, out of the greater Stockton area, was named EDM Stockton's
    #      2017 DJ of the Year before scandle hit... Outside of music Francis describes himself as
    #      an average dude"
    #     )

    # file = File.open('app/assets/images/djs/dj1.jpg')
    # artist.photo.attach(io: file, filename: 'dj1.jpg')


    
    # Artist.create!(
    #     id: '2',
    #     name: 'Bjorn',
    #     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
    #     luctus urna suscipit nibh eleifend euismod. Nulla sed arcu vehicula, rhoncus ante eget, 
    #     pellentesque nibh. Aliquam vehicula, risus viverra molestie hendrerit, sem velit pharetra l
    #     ectus, non venenatis lorem lectus ut enim. Suspendisse consectetur efficitur rutrum. 
    #     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis, lorem 
    #     ornare sollicitudin viverra, neque turpis finibus enim, et aliquam sapien leo vitae urna. 
    #     Pellentesque maximus dapibus urna, quis facilisis nulla rhoncus vel. Aliquam erat est, blandit 
    #     rutrum pulvinar eu, venenatis eget urna."
    #     )
    # Artist.create!(
    #     id: '3',
    #     name: 'Dj Denise',
    #     description: "Fusce malesuada at ex nec lacinia. Interdum et malesuada 
    #     fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
    #     aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
    #     himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
    #     Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
    #     massa, facilisis non interdum a, semper at nunc."
    #     )
    # Artist.create!(
    #     id: '4',
    #     name: 'Artist 4',
    #     description: "Blending the smooth sounds of music, with the scary sounds of Jazz,
    #      Dj GoFuckYourself, or Francis, will make you move both feet at the same time. Wow! This 
    #      up and coming dj, out of the greater Stockton area, was named EDM Stockton's
    #      2017 DJ of the Year before scandle hit... Outside of music Francis describes himself as
    #      an average dude"
    #     )
    # Artist.create!(
    #     id: '5',
    #     name: 'Artist 5',
    #     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
    #     luctus urna suscipit nibh eleifend euismod. Nulla sed arcu vehicula, rhoncus ante eget, 
    #     pellentesque nibh. Aliquam vehicula, risus viverra molestie hendrerit, sem velit pharetra l
    #     ectus, non venenatis lorem lectus ut enim. Suspendisse consectetur efficitur rutrum. 
    #     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis, lorem 
    #     ornare sollicitudin viverra, neque turpis finibus enim, et aliquam sapien leo vitae urna. 
    #     Pellentesque maximus dapibus urna, quis facilisis nulla rhoncus vel. Aliquam erat est, blandit 
    #     rutrum pulvinar eu, venenatis eget urna."
    #     )
    # Artist.create!(
    #     id: '6',
    #     name: 'Artist 6',
    #     description: "Fusce malesuada at ex nec lacinia. Interdum et malesuada 
    #     fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
    #     aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
    #     himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus."
    #     )


    Item.destroy_all

    # Item.create!(
    #     id: '1',
    #     title: 'Blue Hat',
    #     description: 'A Blue hat',
    #     price: '10',
    #     category: 'hat'
    # )
    # Item.create!(
    #     id: '2',
    #     title: 'Red Hat',
    #     description: 'A Red hat',
    #     price: '15',
    #     category: 'hat'
    # )
    # Item.create!(
    #     id: '4',
    #     title: 'Green Hat',
    #     description: 'A Green hat',
    #     price: '20',
    #     category: 'hat'
    # )
    # Item.create!(
    #     id: '5',
    #     title: 'Bucket Hat with many extra secret features',
    #     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
    #     luctus urna suscipit',
    #     price: '99',
    #     category: 'hat'
    # )
    # Item.create!(
    #     id: '6',
    #     title: 'Blue Shirt',
    #     description: 'A Blue Shirt',
    #     price: '13',
    #     category: 'shirt'
    # )
    # Item.create!(
    #     id: '7',
    #     title: 'Red Shirt',
    #     description: 'A Red Shirt',
    #     price: '154',
    #     category: 'shirt'
    # )
    # Item.create!(
    #     id: '8',
    #     title: 'Green shirt',
    #     description: 'A Green shirt',
    #     price: '20',
    #     category: 'shirt'
    # )
    # Item.create!(
    #     id: '9',
    #     title: 'Bucket shirt with many extra secret features',
    #     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
    #     luctus urna suscipit',
    #     price: '99',
    #     category: 'shirt'
    # )
    # Item.create!(
    #     id: '10',
    #     title: 'Blue Sticker',
    #     description: 'A Blue Sticker',
    #     price: '13',
    #     category: 'misc'
    # )
    # Item.create!(
    #     id: '11',
    #     title: 'Red sticker',
    #     description: 'A Red sticker',
    #     price: '154',
    #     category: 'misc'
    # )
    # Item.create!(
    #     id: '12',
    #     title: 'Green sticker',
    #     description: 'A Green sticker',
    #     price: '20',
    #     category: 'misc'
    # )
    # Item.create!(
    #     id: '13',
    #     title: 'Bucket sticker with many extra secret features',
    #     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
    #     luctus urna suscipit',
    #     price: '99',
    #     category: 'misc'
    # )
    # Item.create!(
    #     id: '19',
    #     title: 'Blue sweatshirt',
    #     description: 'A Blue sweatshirt',
    #     price: '13',
    #     category: 'sweatshirt'
    # )
    # Item.create!(
    #     id: '20',
    #     title: 'Red sweatshirt',
    #     description: 'A Red sweatshirt',
    #     price: '154',
    #     category: 'sweatshirt'
    # )
    # Item.create!(
    #     id: '21',
    #     title: 'Green sweatshirt',
    #     description: 'A Green sweatshirt',
    #     price: '20',
    #     category: 'sweatshirt'
    # )
    # Item.create!(
    #     id: '14',
    #     title: 'Bucket sweatshirt with many extra secret features',
    #     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
    #     luctus urna suscipit',
    #     price: '99',
    #     category: 'sweatshirt'
    # )
    # Item.create!(
    #     id: '15',
    #     title: 'Blue album',
    #     description: 'A Blue album',
    #     price: '13',
    #     category: 'album'
    # )
    # Item.create!(
    #     id: '16',
    #     title: 'Red album',
    #     description: 'A Red album',
    #     price: '154',
    #     category: 'album'
    # )
    # Item.create!(
    #     id: '17',
    #     title: 'Green album',
    #     description: 'A Green album',
    #     price: '20',
    #     category: 'album'
    # )
    # Item.create!(
    #     id: '18',
    #     title: 'Bucket albumn with many extra secret features',
    #     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
    #     luctus urna suscipit',
    #     price: '99',
    #     category: 'album'
    # )

    Release.destroy_all
    Feature.destroy_all
    Event.destroy_all


end