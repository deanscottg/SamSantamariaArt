import { SESClient, CloneReceiptRuleSetCommand } from "@aws-sdk/client-ses";
import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";

const client = new SESClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    sessionToken: process.env.AWS_SESSION_TOKEN || "",
  },
  region: "us-east-2",
});

const transport = nodemailer.createTransport({
  SES: { client, SESClient },
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: "me@email.deanscottg.net",
  configPath: "./mailing.config.json",
});

export default sendMail;
