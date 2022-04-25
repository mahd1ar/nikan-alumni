import express from 'express'
import vCardsJS from 'vcards-js'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json());

app.get('/create-contact', (req, res) => {
  const firstname = req.query.firstname
  const lastname = req.query.lastname
  const job = req.query.occupation
  const email = req.query.email
  const phone = req.query.mobile
  let error = false
  // console.log(firstname, lastname, job, email, phone)
  const vCard = vCardsJS()
  let filename = String(~~(Date.now() / 60000))

  if (firstname && typeof firstname === 'string') {
    vCard.firstName = decodeURIComponent(firstname)
  } else error = true

  if (lastname && typeof lastname === 'string') {
    vCard.lastName = decodeURIComponent(lastname)
  } else error = true

  if (phone && typeof phone === 'string')
    vCard.workPhone = decodeURIComponent(phone)
  else error = true

  if (email && typeof email === 'string') {
    vCard.email = decodeURIComponent(email)
    filename = email + filename
  }

  if (job && typeof job === 'string') vCard.title = decodeURIComponent(job)

  if (!error) {
    res.set('Content-Type', `text/vcard; name="${filename}.vcf"`)
    res.set('Content-Disposition', `inline; filename="${filename}.vcf"`)

    res.send(vCard.getFormattedString())
  } else {
    res.send('error ! some information is missing').status(500)
  }
})

app.all('/getJSON', (_, res) => {
  res.json({ data: 'data' })
})

module.exports = app
