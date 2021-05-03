import { Platform } from "react-native";

import urlRegex from "url-regex";
import url from "url";
import path from "path";
import axios from "axios";

import i18n from "../../lib/I18n";
import { version } from "../../../package.json";



function check_safe_browse_api(u, decode, setFn) {
  let d = { ...decode };
  d.safe = true; /* TODO: replace with safe url check later */
  setFn(d);
}

/* Decoding of Bharath QR is done after analyzing multiple QRs, and is possible
   to have some issues. Need to get more details on what do */
const decodeBharathQR = (qr, decode, setFn) => {
  /* Reference : https://srikanthlogic.github.io/bqrparser/ */
  let count = 0;
  var d = { ...decode }; /* decoded data details */
  for (let i = 0; i < qr.length; ) {
    /* Note, the increment of i should be done below, otherwise, it may get to infinite loop */
    /* Decode TLV */
    count += 1;
    try {
      let tag = qr.substring(i, i + 2);
      let length = qr.substring(i + 2, i + 4);
      let value = qr.substring(i + 4, i + 4 + parseInt(length));
      //console.log("TLV count : ", count, tag, length, value)
      i = i + 4 + parseInt(length);

      if (tag == "02") {
        d.visa_merchant_id = value;
        continue;
      }
      if (tag == "04") {
        d.mc_merchant_id = value; /* master card */
        continue;
      }
      if (tag == "06") {
        d.npci_merchant_id = value;
        continue;
      }

      if (tag == "08") {
        console.log("Account Details: ", value);
        let ifsc = value.substring(0, 11);
        let account = value.substring(11, length);
        d.ifsc_code = ifsc;
        d.account_no = account;
        d.upiMerchantId = account + "@" + ifsc + ".ifsc.npci";
        continue;
      }
      if (tag == "26") {
        /* This is where UPI id gets gets coded */
        let tmp = 0;
        for (let j = 0; j < value.length; ) {
          tmp += 1;
          try {
            let t = value.substring(j, j + 2);
            let l = value.substring(j + 2, j + 4);
            let v = value.substring(j + 4, j + 4 + parseInt(l));
            //console.log("Internal TLV count : ", tmp, t, l, v)
            j = j + 4 + parseInt(l);
            if (t == "00") {
              d.rupay_id = v;
            }
            if (t == "01") {
              d.vpa_id = v;
              d.baselink = value;
              d.upiMerchantId = value;
            }
            if (t == "02") {
              d.min_amount = v;
            }
          } catch (err) {
            console.log(e);
            return false;
          }
        }
        continue;
      }
      if (tag == "27") {
        /* UPI Additional details */
        let tmp = 0;
        for (let j = 0; j < value.length; ) {
          tmp += 1;
          try {
            let t = value.substring(j, j + 2);
            let l = value.substring(j + 2, j + 4);
            let v = value.substring(j + 4, j + 4 + parseInt(l));
            //console.log("Internal TLV count : ", tmp, t, l, v)
            j = j + 4 + parseInt(l);
            if (t == "00") {
              d.rupay_id = v;
            }
            if (t == "01") {
              d.vpa_id_tr = v;
            }
            if (t == "02") {
              d.vpa_url = v;
            }
          } catch (err) {
            console.log(e);
            return false;
          }
        }
        continue;
      }
      if (tag == "28") {
        /* UPI Aadhaar Data */
        let tmp = 0;
        for (let j = 0; j < value.length; ) {
          tmp += 1;
          try {
            let t = value.substring(j, j + 2);
            let l = value.substring(j + 2, j + 4);
            let v = value.substring(j + 4, j + 4 + parseInt(l));
            //console.log("Internal TLV count : ", tmp, t, l, v)
            j = j + 4 + parseInt(l);
            if (t == "00") {
              d.rupay_id = v;
            }
            if (t == "01") {
              d.vpa_aadhaar = v;
            }
          } catch (err) {
            console.log(e);
            return false;
          }
        }
        continue;
      }
      if (tag == "52") {
        console.log("Merchant Category Code: ", value);
        d.merchant_category_code = value;
        continue;
      }
      if (tag == "53") {
        console.log("Transaction Currency Code: ", value);
        d.tx_currency_code = value;
        continue;
      }
      if (tag == "54") {
        console.log("Transaction Amount: ", value);
        d.tx_amount = value;
        /* This is asking for Money */
        d.safe = false;
        d.upiAmountToPay = value;
        continue;
      }
      if (tag == "58") {
        console.log("Country Code: ", value);
        d.country_code = value;
        continue;
      }
      if (tag == "59") {
        console.log("Merchant Name: ", value);
        /* Give priority to presence of VPA address */
        d.merchant_name = value;
        if (!d.baselink) d.baselink = value;
        d.upiMerchantName = value.replace(/%20/g, " ");
        continue;
      }
      if (tag == "60") {
        console.log("Merchant City: ", value);
        d.merchant_city = value;
        continue;
      }
      if (tag == "61") {
        console.log("Pincode: ", value);
        d.postal_code = value;
        continue;
      }
      if (tag == "63") {
        console.log("CRC: ", value);
        d.crc = value;
        continue;
      }
      if (tag == "62") {
        /* Addtional Data */
        let tmp = 0;
        for (let j = 0; j < value.length; ) {
          tmp += 1;
          try {
            let t = value.substring(j, j + 2);
            let l = value.substring(j + 2, j + 4);
            let v = value.substring(j + 4, j + 4 + parseInt(l));
            //console.log("Internal TLV count : ", tmp, t, l, v)
            j = j + 4 + parseInt(l);
            if (t == "02") {
              d.mobile_number = v;
              continue;
            }
            if (t == "04") {
              d.loyalty_number = v;
              continue;
            }
            if (t == "06") {
              d.consumer_id = v;
              continue;
            }
            if (t == "07") {
              d.terminal_id = v;
              continue;
            }
            if (t == "08") {
              d.purpose = v;
              continue;
            }
          } catch (err) {
            console.log(e);
            setFn(d);
            return false;
          }
        }
        continue;
      }
    } catch (e) {
      console.log(e);
      /* error */
      setFn(d);
      return false;
    }
  }
  d.canOpen = true;
  d.complete = true;
  d.loading = false;
  d.type = "BHIM";
  d.title = "Bharath QR";
  d.linkToOpen = qr;
  setFn(d);
  return true;
};

const handle_upi = (upi, decode, setFn) => {
  /* Ref: https://www.mygov.in/digidhan/pages/pdf/sbi/NPCI%20Unified%20Payment%20Interface.pdf */
  /* And: https://www.npci.org.in/sites/default/files/UPI%20Linking%20Specs_ver%201.6.pdf */
  const parseStr = upi.split("?")[1];
  const args = parseStr.split("&");
  const validFields = [
    "pa",
    "pn",
    "mc",
    "tid",
    "tr",
    "tn",
    "am",
    "mam",
    "cu",
    "url",
    "mode",
    "sign",
    "orgid",
    "mid",
    "msid",
    "mtid",
    "purpose",
    "Query",
  ];
  let d = { ...decode };
  d.newParams = [];
  for (var i = 0; i < args.length; i++) {
    var str = args[i];
    const fields = str.split("=");
    if (fields[0] === "pn") d.name = fields[1];
    if (fields[0] === "pa") d.address = fields[1];
    //currency = (str.startsWith('cu=') ? str.substring(3) : currency)
    if (fields[0] === "am") d.amount = fields[1];

    /* Check if there are any extra fields */
    if (!validFields.includes(fields[0])) {
      /* This QR is not valid */
      d.newParams.push(fields[0]);
    }
  }
  d.baselink = d.address;
  d.upiMerchantName = d.name.replace(/%20/g, " ");
  d.upiMerchantId = d.address;
  if (d.amount) {
    /* This is asking for Money */
    d.safe = false;
    d.upiAmountToPay = d.amount;
  }
  /* Add all the details of UPI specs here */
  d.complete = true;
  d.loading = false;
  d.type = "UPI";
  d.title = "UPI QR";
  d.canOpen = true;
  d.linkToOpen = upi;
  setFn(d);
};

function check_if_url(q, urlObj) {
  if (urlObj.host && urlObj.protocol) return true;

  if (!q.includes(".")) {
    /* We should have a '.' as part of uri */
    return false;
  }

  /* for now */
  return false;
}

function get_hashmark_json(urlObj, link, decode, setFn, lat, lng) {
  let d = { ...decode };
  let jsonUrl = `https://${urlObj.host}${urlObj.pathname}.json`;
  console.log("link: ", jsonUrl);

  axios
    .get(`${jsonUrl}?s=1&lat=${lat}&lng=${lng}`, {
      headers: {
        "User-Agent": `Mozilla/5.0 (Linux; ${Platform.OS}) SEQRApp/${version}`,
      },
    })
    .then((res) => {
      d.data = res.data;
      d.safe = true;
      d.baselink = res.data.publicId;
      d.complete = true;
      d.loading = false;
      d.statusCode = res.status;
      setFn(d);
    })
    .catch((err) => {
      console.log(err);
      d.safe = undefined;
      d.statusCode = err.response.status;
      /* Fall back to regular URL checking logic */
      check_safe_browse_api(link, d, setFn);
    });
}

export const decodeQR = (qr, decode, setFn, setType, lat, lng) => {
  let d = { ...decode };
  if (!qr.includes("://")) {
    if (qr.startsWith("000201010212")) {
      if (decodeBharathQR(qr, d, setFn)) {
        setType("BHIM");
        return;
      }
    }
  }
  if (qr.includes("upi://pay")) {
    handle_upi(qr, d, setFn);
    setType("UPI");
    return;
  }

  let link = qr;
  const isUrl = urlRegex({ strict: false, exact: true }).test(qr);
  if (isUrl && !qr.startsWith("http")) {
    link = "https://" + qr;
    setType("URL");
  }
  const urlObj = url.parse(link);
  if (!isUrl && !check_if_url(qr, urlObj)) {
    setType("TEXT");
    d.canOpen = false;
    d.title = "Text QR";
    if (qr.length > 20) {
      d.baselink = qr.substring(0, 16) + " ...";
    } else {
      d.baselink = qr;
    }

    /* If everything is number, no need for translate */
    d.complete = true;
    d.loading = false;
    setFn(d);
    return;
  }

  var baseurl = urlObj.host;
  if (urlObj.protocol) baseurl = urlObj.protocol + "//" + urlObj.host;

  d.baselink = baseurl;
  d.href = urlObj.href;
  d.canOpen = true;
  if (urlObj.protocol === "dhiway:") {
    d.title = i18n.t("app.seqrByDhiway");
    d.safe = true;
    d.complete = true;
    d.loading = false;
    setFn(d);
    return;
  }
  if (urlObj.protocol === "exp:") {
    d.title = i18n.t("app.seqrByDhiway");
    d.safe = true;
    d.complete = true;
    d.loading = false;
    setFn(d);
    return;
  }

  /* For every new customer who has their own domain for hashCode url,
     add it to the list and make a release. */
  console.log(urlObj);
  const validHashMarkHosts = ["dway.io", "dhiway.com"];
  var checkHost =
    urlObj.host.split(".").length > 2
      ? urlObj.host.split(".").splice(1).join(".")
      : urlObj.host;

  if (validHashMarkHosts.includes(checkHost)) {
    if (
      urlObj.pathname?.match(/\/[0-9a-z]*\/([a-z0-9]{8})$/) ||
      urlObj.pathname?.match(/\/[0-9a-z]*\/([a-z0-9\-]{36})$/)
    ) {
      /* Most probably this is hashmark. Try Hashmark API and then continue */
      setType("HASHMARK");
      d.title = "Dhiway #MARK";
      get_hashmark_json(urlObj, link, d, setFn, lat, lng);
      return;
    }
  }

  if (urlObj.protocol === "http:" || urlObj.protocol === "https:" || isUrl) {
    /* Check with google safe URLs DB */
    d.safe = undefined;
    d.complete = true;
    d.loading = false;
    check_safe_browse_api(link, d, setFn);
  } else {
    d.title = "TEXT";
    d.canOpen = false;
    d.safe = true;
    d.complete = true;
    d.loading = false;
    setFn(d);
  }
};
