import image from "../assets/images/chat-img-7.png";

const ForgotpasswordSection = () => {
 const stars = [
  "top-6 left-8",
  "top-10 left-24",
  "top-8 left-1/2",
  "top-12 right-10",
  "top-20 right-24",
  "top-28 left-14",
  "top-32 right-36",
  "top-40 left-8",
  "top-44 left-1/3",
  "top-52 right-12",
  "top-60 left-20",
  "top-64 right-28",
  "top-72 left-10",
  "top-80 right-16",
  "bottom-10 left-12",
  "bottom-16 right-8",
  "bottom-20 left-1/4",
  "bottom-28 right-20",
  "bottom-36 left-32",
  "bottom-44 right-40",
  "bottom-52 left-16",
  "bottom-60 right-12",
];

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Stars */}
      {stars.map((position, index) => (
        <span
          key={index}
          className={`absolute ${position} text-white text-sm`}
        >
          ✦
        </span>
      ))}

      {/* Heading */}
      <div className="mt-24">
        <h1 className="text-center text-4xl text-white font-bold">
          Reset Your Password
        </h1>

        <p className="text-white text-lg mt-5 text-center">
          We'll send you a link to reset your password
          <br />
          so you can get back to chatting.
        </p>

        <img 
        src={image} alt="envelop"
         />
      </div>

    </div>
  );
};

export default ForgotpasswordSection;