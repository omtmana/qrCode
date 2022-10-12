puts 'Destroying seeds...'
User.destroy_all
Link.destroy_all

puts 'Destroy done...'
puts 'Creating users...🥦'

user1 = User.create(
   name: "Olivia Manalastas",
   password_digest: 1234,
   email: 'omtm@gmail.com'
)

puts 'Creating links...🍌'

link1 = Link.create(
   link_url: 'https://google.com',
   link_title: 'I google everything',
   user_id: user1.id
)

link2 = Link.create(
   link_url: 'https://www.youtube.com/watch?v=ffzbacDuawI',
   link_title: 'Tom Misch - My favorite Song',
   user_id: user1.id
)

link3 = Link.create(
   link_url: 'https://www.youtube.com/watch?v=dY56ZUiREp0',
   link_title: 'Watch Me Dance - Tom Misch',
   user_id: user1.id
)

puts 'Seeding done...'