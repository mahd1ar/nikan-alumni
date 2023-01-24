import { createHmac } from 'node:crypto';
import express from 'express'
import vCardsJS from 'vcards-js'
import bodyParser from 'body-parser'
import axios, { AxiosRequestConfig } from "axios"

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

// this is for getting serial number
let inMemoryString: string = "nothing there";
let inMemoryCardId: string = "nothing there";

app.get('/set_laststr', (req, res) => {

  if (req.query.srt) {
    inMemoryString = Array.isArray(req.query.srt) ? String(req.query.srt.at(-1)) : String(req.query.srt)
    inMemoryCardId = Array.isArray(req.query.cardid) ? String(req.query.cardid.at(-1)) : String(req.query.cardid)
    res.send('ok')
  } else
    res.status(401).send('notok')
})

app.get('/get_laststr', (_, res) => {
  res.json({ str: inMemoryString, cardid: inMemoryCardId })
})


// app.all<{ 0: string }>("/request/*", async (req, res) => {
//   const fullPath = req.params[0] as string;
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

//   try {
//     if (req.method === 'GET') {

//       const config: AxiosRequestConfig = {
//         headers: {
//           'Cookies': 'wordpress_test_cookie=WP%20Cookie%20check; wp-settings-1=posts_lis53cdb154bc8ae4e45affae4cde496982222bc; _lscache_vary=c55f48d289b9b7155be53153df717d5b'
//         }
//       };

//       if (Object.keys(req.query).length > 0) {
//         config.params = req.query
//       }
//       const { data } = await axios.get(fullPath, config);
//       // res.setHeader("Content-Type", 'application/json')
//       res.json(data)
//     } else if (req.method === "POST") {

//       const { data } = await axios.post(fullPath, req.body);
//       res.json(data)

//     } else
//       res.writeHead(500, 'method is not suported')
//   } catch (error) {
//     console.error(error)
//     res.status(500).send(error)

//   }

// })

app.all('/getJSON', (_, res) => {
  res.json({ data: 'data' })
})

module.exports = app
