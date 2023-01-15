const cheerio = require("cheerio");
const axios = require("axios");
const qs = require("qs");

function Ongoing_Anime() {
  return new Promise((reject, resolve) => {
    axios
      .get("https://otakudesu.moe/ongoing-anime/")
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const result = [];
        const img = [];
        const epz = [];
        const ne = [];
        const th = [];
        const ep = [];
        const nm = [];
        $("div.detpost").each(function (a, b) {
          img.push($(b).find("img").attr("src"));
          nm.push($(b).find("h2").text());
          th.push($(b).find("a").attr("href"));
        });
        $("div.epztipe").each(function (d, c) {
          epz.push($(c).text());
        });
        $("div.newnime").each(function (f, g) {
          ne.push($(g).text());
        });
        $("div.epz").each(function (m, n) {
          ep.push($(n).text());
        });
        for (let i = 0; i < img.length; i++) {
          result.push({
            nama: nm[i],
            image: img[i],
            episode: ep[i],
            setiap: epz[i],
            rilis: ne[i],
            link: th[i],
          });
        }
        resolve(result);
      })
      .catch(reject);
  });
}

function Wallpaper_Flare(query) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://www.wallpaperflare.com/search?wallpaper=" + query, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "_ga=GA1.2.863074474.1624987429; _gid=GA1.2.857771494.1624987429; __gads=ID=84d12a6ae82d0a63-2242b0820eca0058:T=1624987427:RT=1624987427:S=ALNI_MaJYaH0-_xRbokdDkQ0B49vSYgYcQ",
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const result = [];
        $("#gallery > li > figure > a").each(function (a, b) {
          result.push($(b).find("img").attr("data-src"));
        });
        resolve(result);
      })
      .catch({ status: "err" });
  });
}

function Wattpad(judul) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://www.wattpad.com/search/" + judul)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const result = [];
        const jdl = [];
        const img = [];
        const des = [];
        const lnk = [];
        const red = [];
        const vt = [];
        const limk = "https://www.wattpad.com/";
        $("div.cover.cover-xs.pull-left").each(function (a, b) {
          img.push($(b).find("img").attr("src"));
        });
        $("div.content > h5").each(function (a, b) {
          jdl.push($(b).text().trim());
        });
        $("div.content > p").each(function (a, b) {
          des.push($(b).text().trim());
        });
        $("#results-stories > div > ul > li").each(function (a, b) {
          lnk.push(limk + $(b).find("a.on-result").attr("data-id"));
        });
        $("div.content > div > small.reads").each(function (a, b) {
          red.push($(b).text());
        });
        $("div.content > div > small.votes").each(function (a, b) {
          vt.push($(b).text());
        });
        for (let i = 0; i < lnk.length; i++) {
          result.push({
            judul: jdl[i],
            desc: des[i],
            vote: vt[i],
            reads: red[i],
            image: img[i],
            link: lnk[i],
          });
          resolve(result);
        }
      })
      .catch({ message: "err" });
  });
}

function Pinterest(querry) {
  return new Promise(async (resolve, reject) => {
    axios
      .get("https://id.pinterest.com/search/pins/?autologin=true&q=" + querry, {
        headers: {
          cookie:
            '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const result = [];
        const hasil = [];
        $("div > a")
          .get()
          .map((b) => {
            const link = $(b).find("img").attr("src");
            result.push(link);
          });
        result.forEach((v) => {
          if (v == undefined) return;
          hasil.push(v.replace(/236/g, "736"));
        });
        hasil.shift();
        resolve(hasil);
      });
  });
}

function Instagram_Downloader(url) {
  return new Promise(async (resolve, reject) => {
    axios
      .request({
        url: "https://www.instagramsave.com/download-instagram-videos.php",
        method: "GET",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const token = $("#token").attr("value");
        let config = {
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            cookie:
              "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          },
          data: {
            url: url,
            action: "post",
            token: token,
          },
        };
        axios
          .post(
            "https://www.instagramsave.com/system/action.php",
            qs.stringify(config.data),
            { headers: config.headers }
          )
          .then(({ data }) => {
            resolve(data);
          });
      })
      .catch(reject);
  });
}

function Instagram_Story_Downloader(username) {
  return new Promise(async (resolve, reject) => {
    axios
      .request({
        url: "https://www.instagramsave.com/instagram-story-downloader.php",
        method: "GET",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const token = $("#token").attr("value");
        let config = {
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            cookie:
              "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          },
          data: {
            url: "https://www.instagram.com/" + username,
            action: "story",
            token: token,
          },
        };
        axios
          .post(
            "https://www.instagramsave.com/system/action.php",
            qs.stringify(config.data),
            { headers: config.headers }
          )
          .then(({ data }) => {
            resolve(data);
          });
      })
      .catch(reject);
  });
}

function Instagram_Stalker(username) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://www.instagram.com/" + username + "/?__a=1", {
        method: "GET",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
          cookie:
            'mid=XBXl1AALAAEbFoAEfNjZlMMG9dwX; ig_did=91E66A48-5AA2-445D-BFE6-84DC4456DE8F; fbm_124024574287414=base_domain=.instagram.com; ig_nrcb=1; shbid="12737\0544008624962\0541656157971:01f72a5102dc07af6845adf923ca70eb86e81ab95fa9dbfdaf157c9eef0e82fd1f10fe23"; shbts="1624621971\0544008624962\0541656157971:01f74841fba8e77a0066b47ea891dec8fba6fdf9216c0816f9fb3532292f769828800ae2"; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; csrftoken=PpiPMEl0R2pAwThsw4NXynO6cVIXHZDo; ds_user_id=38316792800; sessionid=38316792800:rQj5Tr3g5zkg7b:4; rur="RVA\05438316792800\0541656158332:01f759cf624bef147397144805bb4c26f6c8b36a232e0f5738c570ee492f6b629f84f6e5"',
        },
      })
      .then(({ data }) => {
        const user = data.graphql.user;
        let result = {
          message: "By Hexagon",
          id: user.id,
          biography: user.biography,
          followers: user.edge_followed_by.count,
          following: user.edge_follow.count,
          fullName: user.full_name,
          highlightCount: user.highlight_reel_count,
          isBusinessAccount: user.is_business_account,
          isRecentUser: user.is_joined_recently,
          accountCategory: user.business_category_name,
          linkedFacebookPage: user.connected_fb_page,
          isPrivate: user.is_private,
          isVerified: user.is_verified,
          profilePicHD: user.profile_pic_url_hd,
          username: user.username,
          postsCount: user.edge_owner_to_timeline_media.count,
        };
        resolve(result);
      })
      .catch(reject);
  });
}

function Twitter_Downloader(link) {
  return new Promise((resolve, reject) => {
    let config = {
      URL: link,
    };
    axios
      .post("https://twdown.net/download.php", qs.stringify(config), {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1",
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        resolve({
          desc: $("div:nth-child(1) > div:nth-child(2) > p").text().trim(),
          thumb: $("div:nth-child(1) > img").attr("src"),
          HD: $("tbody > tr:nth-child(1) > td:nth-child(4) > a").attr("href"),
          SD: $("tr:nth-child(2) > td:nth-child(4) > a").attr("href"),
          audio:
            "https://twdown.net/" +
            $("tr:nth-child(4) > td:nth-child(4) > a").attr("href"),
        });
      })
      .catch(reject);
  });
}

function Facebook_Downloader(link) {
  return new Promise((resolve, reject) => {
    let config = {
      url: link,
    };
    axios("https://www.getfvid.com/downloader", {
      method: "POST",
      data: new URLSearchParams(Object.entries(config)),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        cookie:
          "_ga=GA1.2.1310699039.1624884412; _pbjs_userid_consent_data=3524755945110770; cto_bidid=rQH5Tl9NNm5IWFZsem00SVVuZGpEd21sWnp0WmhUeTZpRXdkWlRUOSUyQkYlMkJQQnJRSHVPZ3Fhb1R2UUFiTWJuVGlhVkN1TGM2anhDT1M1Qk0ydHlBb21LJTJGNkdCOWtZalRtZFlxJTJGa3FVTG1TaHlzdDRvJTNE; cto_bundle=g1Ka319NaThuSmh6UklyWm5vV2pkb3NYaUZMeWlHVUtDbVBmeldhNm5qVGVwWnJzSUElMkJXVDdORmU5VElvV2pXUTJhQ3owVWI5enE1WjJ4ZHR5NDZqd1hCZnVHVGZmOEd0eURzcSUyQkNDcHZsR0xJcTZaRFZEMDkzUk1xSmhYMlY0TTdUY0hpZm9NTk5GYXVxWjBJZTR0dE9rQmZ3JTNEJTNE; _gid=GA1.2.908874955.1625126838; __gads=ID=5be9d413ff899546-22e04a9e18ca0046:T=1625126836:RT=1625126836:S=ALNI_Ma0axY94aSdwMIg95hxZVZ-JGNT2w; cookieconsent_status=dismiss",
      },
    })
      .then(async ({ data }) => {
        const $ = cheerio.load(data);
        resolve({
          Normal_video: $(
            "div.col-md-4.btns-download > p:nth-child(2) > a"
          ).attr("href"),
          HD: $("div.col-md-4.btns-download > p:nth-child(1) > a").attr("href"),
          audio: $("div.col-md-4.btns-download > p:nth-child(3) > a").attr(
            "href"
          ),
        });
      })
      .catch(reject);
  });
}

function TikTokk_Downloader(url) {
  return new Promise(async (resolve, reject) => {
    axios
      .get("https://ttdownloader.com/", {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061",
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        let token = $("#token").attr("value");
        let config = {
          url: url,
          format: "",
          token: token,
        };
        axios("https://ttdownloader.com/req/", {
          method: "POST",
          data: new URLSearchParams(Object.entries(config)),
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            cookie:
              "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061",
          },
        }).then(({ data }) => {
          const $ = cheerio.load(data);
          resolve({
            message: "By Hexagon",
            nowm: $("div:nth-child(2) > div.download > a").attr("href"),
            wm: $("div:nth-child(3) > div.download > a").attr("href"),
            audio: $("div:nth-child(4) > div.download > a").attr("href"),
          });
        });
      })
      .catch(reject);
  });
}

module.exports.Wattpad = Wattpad;
module.exports.Pinterest = Pinterest;
module.exports.Ongoing_Anime = Ongoing_Anime;
module.exports.Wallpaper_Flare = Wallpaper_Flare;
module.exports.Instagram_Stalker = Instagram_Stalker;
module.exports.Twitter_Downloader = Twitter_Downloader;
module.exports.TikTokk_Downloader = TikTokk_Downloader;
module.exports.Facebook_Downloader = Facebook_Downloader;
module.exports.Instagram_Downloader = Instagram_Downloader;
module.exports.Instagram_Story_Downloader = Instagram_Story_Downloader;
