import { createHmac } from 'node:crypto';
import express from 'express'
import vCardsJS from 'vcards-js'
import bodyParser from 'body-parser'
import axios from "axios"

type ReqMemo = {
  time: number, value: any
}

const app = express()
app.use(bodyParser.json())
app.set("memo_req", new Map<string, ReqMemo>())
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


app.all<{ 0: string }>("/request/*", async (req, res) => {
  const fullPath = req.params[0] as string;
  // const hash = createHmac('md5', fullPath)
  //   .update('I love cupcakes')
  //   .digest('hex');

  // const map: Map<string, ReqMemo> = app.get("memo_req");

  // const storedValue = map.get(hash);

  // if (storedValue && (~~(Date.now() / (1000 * 60))) - storedValue.time > 5) {
  //   res.send("DATATA")
  // } else {

  //   const { data } = await axios.get(fullPath)

  //   res.send(data)
  // }

  try {
    if (req.method === 'GET') {

      const { data } = await axios.get(fullPath);
      // res.setHeader("Content-Type", 'application/json')
      res.json(data)
    } else {

      const { data } = await axios.post(fullPath, req.body);
      res.json(data)

    }
    res.writeHead(500, 'something went wrong')
  } catch (error) {
    res.send(error).status(500)

  }

})

app.all('/getJSON', (_, res) => {
  res.json({ data: 'data' })
})

module.exports = app
