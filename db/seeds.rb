# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Artist.destroy_all

    Artist.create!(
        id: '1',
        name: 'Dj GoFuckYourself',
        description: "Blending the smooth sounds of music, with the scary sounds of Jazz,
         Dj GoFuckYourself, or Francis, will make you move both feet at the same time. Wow! This 
         up and coming dj, out of the greater Stockton area, was named EDM Stockton's
         2017 DJ of the Year before scandle hit... Outside of music Francis describes himself as
         an average dude"
        )
    Artist.create!(
        id: '2',
        name: 'Bjorn',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
        luctus urna suscipit nibh eleifend euismod. Nulla sed arcu vehicula, rhoncus ante eget, 
        pellentesque nibh. Aliquam vehicula, risus viverra molestie hendrerit, sem velit pharetra l
        ectus, non venenatis lorem lectus ut enim. Suspendisse consectetur efficitur rutrum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis, lorem 
        ornare sollicitudin viverra, neque turpis finibus enim, et aliquam sapien leo vitae urna. 
        Pellentesque maximus dapibus urna, quis facilisis nulla rhoncus vel. Aliquam erat est, blandit 
        rutrum pulvinar eu, venenatis eget urna."
        )
    Artist.create!(
        id: '3',
        name: 'Dj Denise',
        description: "Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        massa, facilisis non interdum a, semper at nunc."
        )
    Artist.create!(
        id: '4',
        name: 'Artist 4',
        description: "Blending the smooth sounds of music, with the scary sounds of Jazz,
         Dj GoFuckYourself, or Francis, will make you move both feet at the same time. Wow! This 
         up and coming dj, out of the greater Stockton area, was named EDM Stockton's
         2017 DJ of the Year before scandle hit... Outside of music Francis describes himself as
         an average dude"
        )
    Artist.create!(
        id: '5',
        name: 'Artist 5',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
        luctus urna suscipit nibh eleifend euismod. Nulla sed arcu vehicula, rhoncus ante eget, 
        pellentesque nibh. Aliquam vehicula, risus viverra molestie hendrerit, sem velit pharetra l
        ectus, non venenatis lorem lectus ut enim. Suspendisse consectetur efficitur rutrum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis, lorem 
        ornare sollicitudin viverra, neque turpis finibus enim, et aliquam sapien leo vitae urna. 
        Pellentesque maximus dapibus urna, quis facilisis nulla rhoncus vel. Aliquam erat est, blandit 
        rutrum pulvinar eu, venenatis eget urna."
        )
    Artist.create!(
        id: '6',
        name: 'Artist 6',
        description: "Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        massa, facilisis non interdum a, semper at nunc.

        
        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 

        Fusce malesuada at ex nec lacinia. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Donec auctor rutrum accumsan. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Integer mi ante, rhoncus vitae eros non, malesuada rutrum lectus. 
        Mauris accumsan aliquet justo, ac rhoncus ipsum bibendum in. Maecenas turpis 
        massa, facilisis non interdum a,"
        )
end