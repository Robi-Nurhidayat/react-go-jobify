import { FaEdit } from "react-icons/fa";
import { MdPlaylistAddCircle } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";

const links = [
  {
    id: 1,
    path: "/dashboard/all-job",
    title: "All Job",
    icon: <BsListCheck />,
  },
  {
    id: 2,
    path: "/dashboard/add-job",
    title: "Add Job",
    icon: <MdPlaylistAddCircle />,
  },
];

export default links;
