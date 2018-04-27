const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        server.get('/', (req, res) => {
            console.log("aaaaaaaa", req.params.id)
            const actualPage = '/pages/home'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/tentang', (req, res) => {
            console.log("aaaaaaaa", req.params.id)
            const actualPage = '/pages/tentang'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/program-keahlian', (req, res) => {
            console.log("aaaaaaaa", req.params.id)
            const actualPage = '/pages/program_keahlian'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/berita', (req, res) => {
            console.log("aaaaaaaa", req.params.id)
            const actualPage = '/pages/berita'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/kegiatan', (req, res) => {
            console.log("aaaaaaaa", req.params.id)
            const actualPage = '/pages/kegiatan'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('*', (req, res) => {
            //   console.log("adsasdsad")
            return handle(req, res)
        })


        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:300000000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })