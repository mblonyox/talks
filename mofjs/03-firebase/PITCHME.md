@title[Judul]

# Cloud Computing: Firebase - Pengenalan dan percobaan

---?include=common/about-me/PITCHME.md

### Saya bukan agen Google dan bukan bermaksud mempromosikan, tapi hanya ingin berbagi pengalaman

---

## Cloud Computing ??

---?image=mofjs/03-firebase/images/cloud-1.png

Note:
- https://blogs.cisco.com/cloud/cloud-the-truth-is-out-there

---

## Cakupan Cloud Computing

---?image=mofjs/03-firebase/images/iaas-paas-saas.png

---

## Layanan Cloud Computing

---?image=mofjs/03-firebase/images/iaas-paas-saas-example.png

---

# Firebase

---?image=mofjs/03-firebase/images/firebase-logo.png

---

## Sejarah singkat

---?image=mofjs/03-firebase/images/firebase-team.jpg

---

## Sejarah singkat (cont...)

- Berawal dari sebuah startup `Envelope` pada tahun 2011
- Menyediakan layanan integrasi chatting online
- Pengguna menggunakan layanan tidak cuma untuk chatting saja.
- April 2012, layanan Backend-as-a-service Firebase dibuat
- Diakuisisi Google pada tahun 2014

---

## Layanan Firebase

---?image=mofjs/03-firebase/images/firebase-services.jpg

---

## Authentication

---?image=mofjs/03-firebase/images/firebase-auth.png

- layanan autentikasi pengguna
- tampilan login siap pakai
- provider beragam:
  - Email & Password
  - Nomor telephon
  - Google
  - Facebook
  - Twitter
  - Microsoft
  - Yahoo
  - Github
- Custom authentication

## Realtime Database & Cloud Firestore

---?image=mofjs/03-firebase/images/firebase-rtdb.jpg

- cloud-hosted NoSQL database
- real time syncing
- mobile & web SDK
- offline cache & sync

## Hosting

---?image=mofjs/03-firebase/images/firebase-hosting.jpg

- static site hosting
- global CDN
- free SSL and subdomain
- custom domain
- versioning / rollback
- baru: integrasi Google Cloud Run

## Cloud Storage

---?image=mofjs/03-firebase/images/firebase-storage.jpg

- upload file/content
- menggunakan Google Cloud Storage
- simple folder/file system

## Cloud Messaging

---?image=mofjs/03-firebase/images/firebase-messaging.png

- push message service
- target segment / topic subscriber
- layanan GCM disatukan dengan FCM

## Cloud Functions

---?image=mofjs/03-firebase/images/firebase-functions.png

- FaaS => Functions as a Service
- fungsi bisa dijalankan dengan http request (membuat REST API)
- fungsi bisa dipicu karena perubahan di database, registrasi user, upload file, dll.
- Node.js v6.x atau v8.x

## Layanan lainnya

- ML Kit
- Crashlytics
- Performance Monitoring
- Remote Config
- Predictions
- A/B Testing

---

# Percobaan

---?image=common/memes/show-me-the-code.jpg

---

# Resources

- https://hackernoon.com/introduction-to-firebase-218a23186cd7
- https://firebase.google.com/docs

---?include=common/thank-you/PITCHME.md
