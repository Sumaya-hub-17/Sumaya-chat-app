import EmmaImg from "../assets/images/chat-img-8.webp";
import DavidImg from "../assets/images/chat-img-10.jpg";
import AliceImg from "../assets/images/chat-img-9.jpg";
import SaraImg from "../assets/images/chat-img-8.webp";
import NainaImg from "../assets/images/chat-img-9.jpg";
import PeterImg from "../assets/images/chat-img-10.jpg";


const calls = [
 {
 id:1,
 name:"Emma Watson",
 image:EmmaImg,
 type:"Outgoing Video Call",
 time:"Today, 10:30 AM",
 missed:false,
 video:true
},
  {
    id: 2,
    name: "David Smith",
    image: DavidImg,
    type: "Missed call",
    time: "7:15 PM",
    missed: true,
    video: false,
  },

  {
    id: 3,
    name: "Alice Johnson",
    image: AliceImg,
    type: "Outgoing call",
    time: "Yesterday, 9:20 PM",
    missed: false,
  },

  {
    id: 4,
    name: "Sara Khan",
    image: SaraImg,
    type: "Incoming call",
    time: "Yesterday, 5:45 PM",
    missed: false,
  },

  {
    id: 5,
    name: "Naina Sharma",
    image: NainaImg,
    type: "Missed call",
    time: "Monday, 3:30 PM",
    missed: true,
  },

  {
    id: 6,
    name: "Peter Parker",
    image: PeterImg,
    type: "Outgoing call",
    time: "Sunday, 11:10 AM",
    missed: false,
  },
];

export default calls;