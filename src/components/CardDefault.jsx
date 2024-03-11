import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function CardDefault({
  slug,
  title,
  img,
  description,
  website,
  github,
}) {
  return (
    <Card className="mt-6 w-full">
      <CardHeader color="blue-gray" className="relative h-96">
        <img className="h-full w-full object-cover" src={img} alt={title} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="line-clamp-3">{description}</Typography>
      </CardBody>
      <CardFooter className="flex gap-5 pt-0">
        <a className="btn" href={github} target="_blank">
          GitHub
        </a>
        <a className="btn" href={website} target="_blank">
          Site
        </a>
        <NavLink className="btn flex items-center gap-2" to={`/${slug}`}>
          Ba' tafsil
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </NavLink>
      </CardFooter>
    </Card>
  );
}