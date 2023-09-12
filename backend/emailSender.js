const nodemailer = require('nodemailer');

// Configure nodemailer with your Gmail SMTP details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jebali.nawress@esprit.tn',
    pass: '223JFT5698',
  },
});

// Function to send acceptance email
async function sendAcceptanceEmail(toEmail, name) {
  console.log('Sending acceptance email to:', toEmail); // Log email recipient

  const html = 
  `<p>Cher/chère ${name},</p>
       <p>Félicitations ! Vous avez été sélectionné(e) pour participer au Programme de Mobilité Internationale de Master à EURECOM.</p>
       <p>Cette opportunité vous ouvre les portes d'une expérience académique internationale enrichissante. Pour que nous puissions finaliser les préparatifs nécessaires, nous vous prions de bien vouloir confirmer votre acceptation d'ici le 30/12.</p>
       <p>Veuillez répondre à cet e-mail pour nous indiquer votre décision. Nous sommes impatients de vous accueillir dans notre programme de mobilité.</p>
       <p>Cordialement,</p>`;


const mailOptions = {
  from: 'jebali.nawress@gmail.com',
  to: toEmail,
  subject: 'Congratulations! You have been accepted!',
  html: html,
};

console.log('Mail Options:', mailOptions);
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

async function sendWaitingListEmail(toEmail, name) {
  try {
    console.log('Sending waiting list email to:', toEmail);

    const mailOptions = {
      from: 'jebali.nawress@esprit.tn',
      to: toEmail,
      subject: 'You are on the waiting list',
      html:  `<p>Cher/chère ${name},</p>
      <p>Vous êtes sur la liste d'attente pour le Programme de Mobilité Internationale de Master à EURECOM.</p>
      <p>Nous vous informerons dès qu'une place se libère. Veuillez rester à l'écoute.</p>
      <p>Cordialement,</p>`
    };

    await transporter.sendMail(mailOptions);

    console.log('Waiting list email sent successfully');
  } catch (error) {
    console.error('Error sending waiting list email:', error);
  }
}

// Function to send rejection email
async function sendRejectionEmail(toEmail, name) {
  try {
    console.log('Sending rejection email to:', toEmail);

    const mailOptions = {
      from: 'jebali.nawress@esprit.tn',
      to: toEmail,
      subject: 'Application Update',
      html:  `<p>Cher/chère ${name},</p>
      <p>Nous regrettons de vous informer que votre candidature pour le Programme de Mobilité Internationale de Master à EURECOM n'a pas été retenue pour le moment.</p>
      <p>Nous vous remercions de l'intérêt que vous avez manifesté pour notre programme.</p>
      <p>Cordialement,</p>`
    };

    await transporter.sendMail(mailOptions);

    console.log('Rejection email sent successfully');
  } catch (error) {
    console.error('Error sending rejection email:', error);
  }
}

module.exports = {
  sendAcceptanceEmail,
  sendWaitingListEmail,
  sendRejectionEmail,
};