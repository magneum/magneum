// const { shorten } = require("tinyurl");
// const fetch = require("node-fetch");
// const path = require("path");
// const fs = require("fs");
// let a = 0;
// setInterval(() => {
// fetch("https://waifu.pics/api/sfw/awoo")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/awoo.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/bite")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/bite.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/blush")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/blush.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/bonk")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/bonk.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/bully")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/bully.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/cringe")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/cringe.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/cry")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/cry.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/cuddle")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/cuddle.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/dance")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/dance.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/glomp")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/glomp.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/handhold")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/handhold.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/happy")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/happy.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/highfive")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/highfive.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/hug")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/hug.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/kick")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/kick.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/kill")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/kill.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/kiss")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/kiss.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/lick")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/lick.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/megumin")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/megumin.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/neko")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/neko.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/nom")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/nom.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/pat")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/pat.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/poke")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/poke.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/shinobu")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/shinobu.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/slap")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/slap.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/smile")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/smile.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/smug")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/smug.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/waifu")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/waifu.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/wave")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/wave.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/wink")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/wink.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// fetch("https://waifu.pics/api/sfw/yeet")
// .then((res) => res.json())
// .then(async (_data) => {
// fs.appendFileSync(
// path.join(__dirname, "/yeet.json"),
// JSON.stringify([await shorten(_data.url)])
// );
// });
// a++;
// console.log("Total Times Fetched: " + a);
// }, 1000 * 20);
