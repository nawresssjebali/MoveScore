const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const mysql = require('mysql2');

const router = express.Router(); // <-- Remove this line
const app = express();
const upload = multer({ dest: 'uploads/' });
const nodemailer = require('nodemailer');
const { sendAcceptanceEmail, sendWaitingListEmail, sendRejectionEmail } = require('./emailSender'); // Import email functions from emailSender.j




// Middleware
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies to be sent along with the request (if needed)
};
app.use(cors(corsOptions));

// Connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 't1a2y3l4o5r6e7',
  database: 'base_projet'
});

// Démarrage du serveur
const port = 3100;
app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});

// Route pour vérifier les informations d'identification
app.post('/login', (req, res) => {
  const { identifiant, mot_de_passe } = req.body;
  

  // Vérifiez les informations d'identification dans la base de données
  connection.query(
    'SELECT * FROM utilisateurs WHERE identifiant = ? AND mot_de_passe = ?',
    [identifiant, mot_de_passe],
    (error, results) => {
      if (error) {
        console.error('Erreur lors de la vérification des informations d\'identification :', error);
        res.status(500).json({ message: 'Erreur du serveur' });
      } else {
       
        if (results.length > 0) {
          // Informations d'identification correctes
          res.status(200).json({ message: 'Authentification réussite !' });
        } else {
          // Informations d'identification incorrectes
          res.status(401).json({ message: 'Identifiant ou mot de passe incorrect' });
        }
      }
    }
  );
});
app.post('/admin-login', (req, res) => {
  const { identifiant, mot_de_passe } = req.body;

  // Verify administrator credentials in the administration table
  connection.query(
    'SELECT * FROM administration WHERE identifiant = ? AND mot_de_passe = ?',
    [identifiant, mot_de_passe],
    (error, results) => {
      if (error) {
        console.error('Error verifying credentials:', error);
        res.status(500).json({ message: 'Server error' });
      } else {
        if (results.length > 0) {
          // Correct administrator credentials
          res.status(200).json({ message: 'Authentification réussite !' });
        } else {
          // Incorrect credentials
          res.status(401).json({ message: 'Erreur d\'authentification! Veuillez vérifier vos coordonnées!' });
        }
      }
    }
  );
});

// MongoDB Connection
// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/offre6', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB database');
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error);
});
// File Upload Route
app.post('/upload', upload.single('fileUpload'), (req, res) => {
  const uploadedFile = req.file;
  // Process the uploaded file as needed
  res.json({ message: 'File uploaded successfully' });
});

mongoose.connect('mongodb://localhost:27017/offre6', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB database');
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

// Import and use userRouter
const userRouter = require('./routes/api'); // Adjust the path to your router
app.use('/api', userRouter);

// Middleware to set MongoDB connection in request object
app.use((req, res, next) => {
  req.app.locals.db = mongoose.connection.db;
  console.log('MongoDB connection set in request object.'); // Debugging line
  next();
});

// Route for fetching sorted users
app.get('/api/get-users-sorted', (req, res) => {
  console.log('Inside /api/get-users-sorted route'); // Debugging line
  const db = req.app.locals.db;

  if (!db) {
    console.log('MongoDB connection not available.');
    res.status(500).json({ message: 'MongoDB connection not available' });
    return;
  }

  console.log('Attempting to fetch sorted users...'); // Debugging line
  
  // Add a log before the database query
  console.log('Querying database for sorted users...'); // Debugging line
  db.collection('projet').find().sort({ score: -1 }).toArray((err, users) => {
    if (err) {
      console.error('Error fetching sorted users:', err);
      res.status(500).json({ message: 'Error fetching sorted users' });
    } else {
      console.log('Fetched sorted users:', users); // Debugging line
      res.status(200).json(users);
    }
  });
});
const transporter = nodemailer.createTransport({
  service: 'gmail', // Example: 'gmail', 'outlook', etc.
  auth: {
    user: 'jebali.nawress@esprit.tn',
    pass: '223JFT5698'
  }
});
const util = require('util');

app.post('/send-acceptance-email', async (req, res) => {
  try {
    const { name, email } = req.body;

    console.log('Sending acceptance email to:', email);

    // Construct email content
    const mailOptions = {
      from: 'jebali.nawress@esprit.tn',
      to: email,
      subject: 'Congratulations! You have been accepted!',
      html:  `<p>Cher/chère ${name},</p>
      <p>Félicitations ! Vous avez été sélectionné(e) pour participer au Programme de Mobilité Internationale de Master à EURECOM.</p>
      <p>Cette opportunité vous ouvre les portes d'une expérience académique internationale enrichissante. Pour que nous puissions finaliser les préparatifs nécessaires, nous vous prions de bien vouloir confirmer votre acceptation d'ici le 30/12.</p>
      <p>Veuillez répondre à cet e-mail pour nous indiquer votre décision. Nous sommes impatients de vous accueillir dans notre programme de mobilité.</p>
      <p>Cordialement,</p>`
    };

    // Convert the transporter.sendMail function to a promise-based one
    const sendMailPromise = util.promisify(transporter.sendMail.bind(transporter));
    
    // Use async/await to send the email
    await sendMailPromise(mailOptions);

    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error in /send-acceptance-email route:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Route for sending waiting list email
app.post('/send-waiting-list-email', async (req, res) => {
  try {
    const { name, email } = req.body;

    console.log('Sending waiting list email to:', email);

    // Construct email content
    const mailOptions = {
      from: 'jebali.nawress@esprit.tn',
      to: email,
      subject: 'You are on the waiting list',
      html:  `<p>Cher/chère ${name},</p>
      <p>Vous êtes sur la liste d'attente pour le Programme de Mobilité Internationale de Master à EURECOM.</p>
      <p>Nous vous informerons dès qu'une place se libère. Veuillez rester à l'écoute.</p>
      <p>Cordialement,</p>`
    };

    // Convert the transporter.sendMail function to a promise-based one
    const sendMailPromise = util.promisify(transporter.sendMail.bind(transporter));
    
    // Use async/await to send the email
    await sendMailPromise(mailOptions);

    console.log('Waiting list email sent successfully');
    res.status(200).json({ message: 'Waiting list email sent successfully' });

  } catch (error) {
    console.error('Error in /send-waiting-list-email route:', error);
    res.status(500).json({ message: 'Error sending waiting list email' });
  }
});

// Route for sending rejection email
app.post('/send-rejection-email', async (req, res) => {
  try {
    const { name, email } = req.body;

    console.log('Sending rejection email to:', email);

    // Construct email content
    const mailOptions = {
      from: 'jebali.nawress@esprit.tn',
      to: email,
      subject: 'Application Update',
      html:  `<p>Cher/chère ${name},</p>
      <p>Nous regrettons de vous informer que votre candidature pour le Programme de Mobilité Internationale de Master à EURECOM n'a pas été retenue pour le moment.</p>
      <p>Nous vous remercions de l'intérêt que vous avez manifesté pour notre programme.</p>
      <p>Cordialement,</p>`
    };

    // Convert the transporter.sendMail function to a promise-based one
    const sendMailPromise = util.promisify(transporter.sendMail.bind(transporter));
    
    // Use async/await to send the email
    await sendMailPromise(mailOptions);

    console.log('Rejection email sent successfully');
    res.status(200).json({ message: 'Rejection email sent successfully' });

  } catch (error) {
    console.error('Error in /send-rejection-email route:', error);
    res.status(500).json({ message: 'Error sending rejection email' });
  }
});

// Export the functions
module.exports = {
  sendAcceptanceEmail,
  sendWaitingListEmail,
  sendRejectionEmail,
};