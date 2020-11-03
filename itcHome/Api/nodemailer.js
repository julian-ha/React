const nodemailer = require('nodemailer');

const createTransporter = () => {
    console.log(process.env.HOST);
    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.PASSWORD // generated ethereal password
        }
      });

      return transporter
}

module.exports = {
    sendMailTeilnehmer: async (teilnehmerdaten) => {
        var transporter = createTransporter();

        let info = await transporter.sendMail({
            from: '"ITC Graf Schulungen" <noreply@rettungsplan.eu>', // es muss noch in die richtige Email Adresse umgewandelt werden.
            to: teilnehmerdaten.email, 
            subject: `Anmeldung zu ${teilnehmerdaten.schulung}`, 
            html: "<b>Sie wurden zur einer Schulung im Schulungszentrum in Heidenheim angemeldet</b>", 
          });

        console.log(`Email wurde an ${teilnehmerdaten.email} versendet`);
    },
    sendMailAuftraggeber: async (auftraggeberdaten) => {
        var transporter = createTransporter();

        let info = await transporter.sendMail({
            from: '"ITC Graf Schulungen" <noreply@rettungsplan.eu>', // es muss noch in die richtige Email Adresse umgewandelt werden.
            to: auftraggeberdaten.email, 
            subject: `Anmeldung zu den Schulungen der ITC`, 
            html: "<b>Sie wurden zur einer Schulung im Schulungszentrum in Heidenheim angemeldet</b>", 
          });

        console.log(`Email wurde an ${auftraggeberdaten.email} versendet`);
    },
    sendMailToITC: async (buchungsdaten) => {
        var transporter = createTransporter();
        let info = await transporter.sendMail({
            from: '"ITC Graf Schulungen" <noreply@rettungsplan.eu>', // es muss noch in die richtige Email Adresse umgewandelt werden.
            to: 'julian.haering@viamymail.de', 
            subject: `Anmeldung zu den Schulungen der ITC`, 
            html: `<b>${JSON.stringify(buchungsdaten)}</b>`, 
          });
          console.log(`Email wurde an julian.haering@viamymail.de versendet`);
    }
}