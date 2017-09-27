var exam = require('../controllers/note.js')
var path = require('path')

module.exports = function(app){
    app.post('/register', function(req, res) {
        exam.register(req, res)
    })
    app.post('/createPoll', function(req, res) {
        exam.createPoll(req, res)
    })
    app.get('/polls', function(req, res) {
        exam.display(req, res)
    })
    app.post('/poll', function(req, res) {
        exam.findPoll(req, res)
    })
    app.post('/vote', function(req, res) {
        exam.vote(req, res)
    })
    app.post('/delete', function(req, res) {
        exam.delete(req, res)
    })
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, './../../ExamAngular/dist/index.html'))
    })
}