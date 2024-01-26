const Hero = () => {
  return (
    <div className="relative flex flex-col w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-[0] z-[1] w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
