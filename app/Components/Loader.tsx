import Image from 'next/image';
export default function Loader(){
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-main1 z-50 flex flex-col justify-center items-center">
      <video
        className="inset-0 object-cover w-[100px] h-[100px] flex flex-col"
        autoPlay
        muted
      >
        <source src="/videos/LoaderVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image src="/videos/LoaderGif.gif" width={225} height={225} alt="Loader" className='-translate-y-8' />
    </div>
  );
}