import axios from "axios";
import moment from "moment";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import { load as cLoad } from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

function Pinterest(querry: any) {
  return new Promise(async (resolve, reject) => {
    axios
      .get("https://id.pinterest.com/search/pins/?autologin=true&q=" + querry, {
        headers: {
          cookie:
            '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
        },
      })
      .then(({ data }) => {
        const $ = cLoad(data);
        const result: any = [];
        const hasil: any = [];
        $("div > a")
          .get()
          .map((b: any) => {
            const link = $(b).find("img").attr("src");
            result.push(link);
          });
        result.forEach((v: any) => {
          if (v == undefined) return;
          hasil.push(v.replace(/236/g, "736"));
        });
        hasil.shift();
        resolve(hasil);
      });
  });
}

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      const cobra = await Pinterest(req.query.q);
      var _Found = [
        {
          _status: "🎊success",
          _uuid: uuidv4(),
          _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          _topic: "Pinterest Searcher",
          _query: req.query.q,
          links: cobra,
        },
      ];
      logger.info(_Found);
      return res.send(_Found);
    } else {
      return res.send({
        _status: "Failed with error code 911",
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _usage: {
          _api_link: "/api/youtube?q=",
          _example: ["/api/anime?q=death note"],
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
