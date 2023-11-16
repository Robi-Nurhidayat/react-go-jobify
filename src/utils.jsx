import { FaEdit } from "react-icons/fa";
import { MdPlaylistAddCircle } from "react-icons/md";
const links = [
  {
    id: 2,
    path: "/dashboard/add-job",
    title: "Add Job",
    icon: <MdPlaylistAddCircle />,
  },
  {
    id: 3,
    path: "/dashboard/edit-job",
    title: "Edit Job",
    icon: <FaEdit />,
  },
];

export default links;
