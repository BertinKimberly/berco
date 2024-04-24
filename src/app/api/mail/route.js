import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export const POST = async (req) => {
   try {
      const { email } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
         },
      });

      // Define email options
      const mailOptions = {
         from: process.env.EMAIL,
         to: email,
         subject: "Subscription Confirmation",
         text: "Thank you for subscribing to our newsletter!",
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      console.log("Wow");
      return new NextResponse(
         JSON.stringify({ message: "Email sent successfully" }, { status: 200 })
      );
   } catch (error) {
      console.error("Error sending email:", error);
      return new NextResponse(
         JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
   }
};
