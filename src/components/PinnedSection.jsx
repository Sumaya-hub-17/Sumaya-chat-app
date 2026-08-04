import ChatCard from "../components/ChatCard";

import AliceImg from "../assets/images/chat-img-8.webp";
import EmmaImg from "../assets/images/chat-img-9.jpg";
import DavidImg from "../assets/images/chat-img-10.jpg";
import Saraimg from "../assets/images/chat-img-8.webp";
import Nainaimg from "../assets/images/chat-img-9.jpg";
import Peterimg from "../assets/images/chat-img-10.jpg";
import Doraimg from "../assets/images/chat-img-8.webp";
import Alizimg from "../assets/images/chat-img-9.jpg";
import Steveimg from "../assets/images/chat-img-10.jpg";

const PinnedSection = () => {
  return (
    <>
      {/* Heading */}
      <div className="flex items-center justify-between px-6 mt-6">
        <h2 className="text-lg font-semibold text-white md:text-gray-900">
          Pinned
        </h2>

        <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
          See all
        </button>
      </div>

      {/* Pinned Users */}
        <div className="mt-6 flex gap-6 px-6 overflow-x-auto scrollbar-hide">

        <div className="shrink-0">
          <ChatCard images={AliceImg} name="Alice" status="Online" />
        </div>

        <div className="shrink-0">
          <ChatCard images={EmmaImg} name="Emma" status="Online" />
        </div>

        <div className="shrink-0">
          <ChatCard images={DavidImg} name="David" status="Online" />
        </div>

        <div className="shrink-0">
          <ChatCard images={Saraimg} name="Sara" status="Online" />
        </div>

        <div className="shrink-0">
          <ChatCard images={Nainaimg} name="Naina" status="Online" />
        </div>

        <div className="shrink-0">
          <ChatCard images={Peterimg} name="Peter" status="Online" />
        </div>

        <div className="shrink-0">
          <ChatCard images={Doraimg} name="Dora" status="Online" />
        </div>

        <div className="shrink-0">
          <ChatCard images={Alizimg} name="Aliz" status="Online" />
        </div>

        <div className="shrink-0">
          <ChatCard images={Steveimg} name="Steve" status="Online" />
        </div>

      </div>
    </>
  );
};

export default PinnedSection;