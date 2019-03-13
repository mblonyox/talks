@title[Judul]

# CTF: Capture The Flag - An Introduction

---?include=common/about-me/PITCHME.md

---?image=mofjs/02-ctf/images/halo-ctf.jpg

## Apakah itu CTF??

_Capture The Flag_, sebuah kompetisi di bidang keamanan informasi praktis.

Seperti sebuah permainan _paintball_ atau tembak-tembakan yang bertujuan merebut bendera dari markas lawan.

---

## Flag ??

_Flag_ , biasanya berupa sebuah _string_ sebagai bukti bahwa telah berhasil meretas sistem.

Format biasanya dibuat dengan format nama kompetisi dan deretan karakter acak yang sulit ditebak.

> CTF{1ni_c0ntoh_Fl4g}

---

## Jenis-Jenis CTF

![CTF-Type](mofjs/02-ctf/images/type-ctf.png)

---

### Attack - Defense

- Setiap tim mendapatkan mesin dengan _service_ yang sudah dirancang dengan celah keamanan oleh penyelenggara
- Tim penyerang menyerang mesin lawan untuk mendapatkan _flag_ sembari Tim yang bertahan memperbaiki celah keamanan di mesin tersebut.
- Biasanya bergantian

---

## Jeopardy

- Beberapa soal tantangan sudah disediakan dengan kategori-kategori tertentu
- _Flag_ bisa ditemukan dalam _file_ yang disediakan bersama dengan soal atau pada server yang telah disediakan
- Tiap _flag_ memiliki bobot nilai tertentu sesuai tingkat kesulitan

---

## Kategori tantangan

- Reverse Engineering
- Pawning / Binary Exploit
- Crypto
- Web
- Forensic
- Misc

---

## Format soal/tantangan (Jeopardy style)

- Memiliki Judul dan deskripsi yang bisa jadi petunjuk celah keamanan
- Kategori tantangan, tingkat kesulitan, nilai
- Statistik (_solves_, _challenger_)
- Lampiran _file_ yang bisa diunduh (biasanya dalam bentuk zip dengan nama file sesuai hash)
- Alamat service pada server yang sudah disiapkan, beserta binary executable service tersebut (untuk kategori pawning/binary exploit)

---

![Challenge](mofjs/02-ctf/images/challenge.png)

---

# Contoh soal

---

# Resources

---

## CTF>TIME

- https://ctftime.org/ - CTF>TIME

## Wargame / Challenges

- https://capturetheflag.withgoogle.com/ - Google CTF
- https://2018game.picoctf.com/ - PicoCTF 2018
- https://pwnable.tw/ - (Pawning/Binary Exploit challenges)

---

## Youtube:

- [LiveOverflow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w)
  - [What is CTF? An introduction to security Capture The Flag competitions](https://www.youtube.com/watch?v=8ev9ZX9J45A)
  - [The Secret step-by-step Guide to learn Hacking
    ](https://www.youtube.com/watch?v=2TofunAI6fU)
- [Intro to CTFs - Drew Miller](https://www.youtube.com/watch?v=bxt-JidP3bU)
- [Google CTF 2018 Beginners Quest](https://www.youtube.com/watch?v=qDYwcIf0LZw)

---

## Writeups

- https://ctftime.org/writeups
- https://github.com/pcchou/ctf-writeups

---?include=common/thank-you/PITCHME.md
