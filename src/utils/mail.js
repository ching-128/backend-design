import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const mailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Backend Design",
        link: "https://turiya.co/",
        logo: "https://www.turiya.co/assets/img/brandLogo/turiya.png",
        logoHeight: "200",
    },
});

const email = {
    body: {
        title: "Welcome to Turiya Avastha",
        name: "John Appleseed",
        intro: "Welcome to Mailgen! We're very excited to have you on board.",
        action: {
            instructions: "To get started with Mailgen, please click here:",
            button: {
                color: "#74B94E",
                text: "Confirm your account",
                link: "https://turiya.co/",
            },
        },
        table: {
            data: [
                {
                    item: "Node.js",
                    description:
                        "Event-driven I/O server-side JavaScript environment based on V8.",
                    price: "$10.99",
                },
                {
                    item: "Mailgen",
                    description:
                        "Programmatically create beautiful e-mails using plain old JavaScript.",
                    price: "$1.99",
                },
            ],
            columns: {
                customWidth: {
                    item: "20%",
                    price: "15%",
                },
                customAlignment: {
                    price: "right",
                },
            },
        },
        dictionary: {
            date: "June 11th, 2016",
            address: "123 Park Avenue, Miami, Florida",
        },
        outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
};

const emailBody = mailGenerator.generate(email);
const emailText = mailGenerator.generatePlaintext(email);

import { writeFileSync } from "fs";
import { title } from "process";

writeFileSync("preview.html", emailBody, "utf8");
