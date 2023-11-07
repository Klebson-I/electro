import nodemailer from "nodemailer";

export const sendMail = async (person:string|undefined|null,number:string|null|undefined,problem:string) => {
    const message=`${person?person:''} \n ${number?number:''} \n ${problem}`
    const transporter = nodemailer.createTransport({
        host: "smtp.poczta.onet.pl",
        auth: {
            user: "", // generated ethereal user
            pass: "", // generated ethereal password
        },
    });
    const options={
        from:"",
        to:"",
        subject:"",
        text:`${message}`
    }
    await transporter.sendMail(options);
}