// const { shorten } = require("tinyurl");
// const fetch = require("node-fetch");
// const path = require("path");
// const fs = require("fs");
// let a = 0;
// setInterval(() => {
// fetch("https://api.waifu.pics/sfw/dance")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/dance.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/bite")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/bite.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/wink")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/wink.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/bonk")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/bonk.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/hug")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/hug.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/kiss")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/kiss.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/pat")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/pat.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/happy")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/happy.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });

// fetch("https://api.waifu.pics/sfw/kill")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/kill.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/highfive")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/highfive.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/wave")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/wave.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/cry")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/cry.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/smile")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/smile.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/kick")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/kick.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://api.waifu.pics/sfw/yeet")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/yeet.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/nervous")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/nervous.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/scream")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/scream.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/bored")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/bored.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://nekoapi.vanillank2006.repl.co/api/action/stare")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/stare.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch(
// "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=yes"
// )
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/yes.json"),
// JSON.stringify([_data.reaction])
// );
// });
// fetch(
// "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=confused"
// )
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/confused.json"),
// JSON.stringify([_data.reaction])
// );
// });
// fetch(
// "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=sad"
// )
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/sad.json"),
// JSON.stringify([_data.reaction])
// );
// });
// fetch(
// "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=thinking"
// )
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/thinking.json"),
// JSON.stringify([_data.reaction])
// );
// });
// fetch("https://neko-love.xyz/api/v1/punch")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/punch.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://nekos.life/api/v2/img/slap")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/slap.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://nekos.life/api/v2/img/cuddle")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/cuddle.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });

// a++;
// console.log("Total Times Fetched: " + a);
// }, 1000 * 20);
