const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

const connectionString = "mongodb://localhost:27017/"

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('TravelDB')
    const quotesCollection = db.collection('contact_us')
	 const quotesCollection1 = db.collection('UserLogin')
	const quotesCollection2 = db.collection('hotel')

	app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))

		app.get('/about', function (req, res) {
				res.render('about.ejs' );
		})
		app.get('/Service', function (req, res) {
				res.render('services.ejs' );
		})
		
		app.get('/contact', function (req, res) {
				res.render('contact.ejs' );
		})
		app.get('/loginregister', function (req, res) {
				res.render('loginregister.ejs' );
		})
		
		app.get('/hotelList', function (req, res) {
				res.render('hotelList.ejs' );
		})
		app.get('/fightticketbooking', function (req, res) {
				res.render('fight-ticket-booking.ejs' );
		})
		app.get('/busticketbooking', function (req, res) {
				res.render('bus-ticket-booking.ejs' );
		})
		
			app.get('/Contact/add', function (req, res) {
	   res.render('addContact.ejs' );
	})
   
	app.get('/index', (req, res) => {
      res.render('index.ejs');
    })
	app.get('/hotelbooking', (req, res) => {
      res.render('hotel-booking.ejs');
    })
	//for the contact GET POST PUT DELETE
	app.get('/contactList', (req, res) => {
      db.collection('contact_us').find().toArray()
        .then(contact_us=> {
          res.render('ContactList.ejs', { mycontact: contact_us })
        })
    })
    app.post('/TravelContact', (req, res) => {
      db.collection('contact_us').insertOne(req.body)
        .then(result => {
			 res.redirect('/contact')
        })
		.catch(error => console.error(error))
    })
	
	
	
	
	
	
	
	
	
	
//hotel
app.get('/hotelList', function (req, res) {
				db.collection('hotel').find().toArray()
        .then(hotel=> {
          res.render('hotelList.ejs', { hotel1: hotel })
        })
    })


app.post('/hotelList1', (req, res) => {
      db.collection('hotel').insertOne(req.body)
        .then(result => {
			 res.redirect('/hotelList')
        })
		.catch(error => console.error(error))
    })
    app.put('/Travelhotel', (req, res) => {
      db.collection('contact_us').findOneAndUpdate(
        { id: req.body.id },
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
			contact:req.body.contact,
			description:req.body.description
          }
        },
        {
          upsert: true
        }
      )
        .then(result => res.json('Update is Success'))
        .catch(error => console.error(error))
    })

    app.delete('/Travel', (req, res) => {
      db.collection('contact_us').deleteOne(
        { id: req.body.id }
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No contact to delete')
          }
          res.json('Delete is successful')
        })
        .catch(error => console.error(error))
    })

	//for userlogin page
	
	
	app.get('/UserList', (req, res) => {
      db.collection('UserLogin').find().toArray()
        .then(UserLogin=> {
          res.render('UserList.ejs', { login: UserLogin })
        })
    })
    app.post('/Travellogin', (req, res) => {
      db.collection('UserLogin').insertOne(req.body)
        .then(result => {
			 res.redirect('/UserList')
        })
		.catch(error => console.error(error))
    })
	
	
	
    app.put('/Travel1', (req, res) => {
      db.collection('UserLogin').findOneAndUpdate(
        {  name: req.body.name},
        {
          $set: {
            
            email: req.body.email,
			contact:req.body.contact,
			description:req.body.description
          }
        },
        {
          upsert: true
        }
      )
        .then(result => res.json('Update is Success'))
        .catch(error => console.error(error))
    })

    app.delete('/userdelete', (req, res) => {
      db.collection('UserLogin').deleteOne(
        { name: req.body.name}
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No contact to delete')
          }
          res.json('Delete is successful')
        })
        .catch(error => console.error(error))
    })
	
    app.listen(8081, function () {console.log('listening on 8081')})
  }).catch(console.error)

  



