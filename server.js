const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV === 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        // console.log("dev",process.env.NODE_ENV);
        const server = express()
        server.get('/', (req, res) => {
            const actualPage = '/home'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/tentang', (req, res) => {
            const actualPage = '/tentang'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/program-keahlian', (req, res) => {
            const actualPage = '/program_keahlian'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/berita', (req, res) => {
            const actualPage = '/berita'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/kegiatan', (req, res) => {
            const actualPage = '/kegiatan'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('*', (req, res) => {
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