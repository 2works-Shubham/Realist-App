import * as config from "../config.js";
import jwt from "jsonwebtoken";

export const welcome = (req, res) => {
  res.json({
    name: "shubham",
    surname: "shingare",
  });
};

export const preRegister = async (req, res) => {
  try {
    console.log(req.body);

    const { email, password } = req.body;

    //JWT Token generation
    const token = jwt.sign({ email, password }, config.JWT_SECRET, {
      expiresIn: "1h",
    });

    config.AWSSES.sendEmail(
      {
        Source: config.sourceMail,
        Destination: {
          ToAddresses: [email],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `
                    <html>
                     <h1>Welcome to Realist App</h1>
                     <p>Click on the below link for verification</p>
                     <a href="${config.CLIENT_URL}/auth/account-activate/${token}">Activate your account</a>
                    </html>    
                `,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Welcome to Realist",
          },
        },
      },
      (err, data) => {
        if (err) {
          console.log("Provide a valid email address", err);
          return res.json({ ok: false });
        } else {
          console.log("Check email to complete registration", data);
          return res.json({ ok: true });
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.json({
      error: "Something went wrong. Try again.",
      message: err,
    });
  }
};

export const register = async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    if (err) {
      res.json({ error: "Something went wrong, try again..." });
    }
  }
};
