const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.chat = functions.https.onRequest((req, res) => {
    const token = req.headers.authorization.substring(7)
    const message = req.body.message
    return admin.auth().verifyIdToken(token).then(({name, picture}) => {
        return admin.database().ref("chats").push({
            username: name,
            avatar: picture,
            message,
            time: admin.database.ServerValue.TIMESTAMP
        })
    }).then(() => {
        return res.json({
            success: true
        }).end()
    }).catch(error => {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        }).end()
    })
})