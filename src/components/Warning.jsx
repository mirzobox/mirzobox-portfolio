import { Typography } from "@material-tailwind/react";

export default function Warning() {
  return (
    <div className="base-container flex flex-col items-start pb-5 pt-28">
      <Typography className="mb-3 text-3xl font-bold" as={"h2"}>
        Loyihalar
      </Typography>
      <Typography className="text-justify" as={"p"}>
        Har bir loyiha haqida batafsil ma'lumot, undagi sahifalar rasmlari,
        loyiha tuzilishi jarayonida duch kelingan murakkab nuqtalar Ba'tafsil
        havolasi ostida berilgan bo'lib, mualliflik huquqlariga binoan
        to'g'ridan-to'g'ri loyiha manbasiga havola oshkor etilmadi. 90%
        loyihalar dizayni{" "}
        <a
          className="text-blue-600 hover:underline"
          href="https://www.frontendmentor.io"
          target="_blank"
        >
          frontendmentor.io
        </a>{" "}
        saytidan olingan
      </Typography>
    </div>
  );
}
