import img1058551 from "figma:asset/51f4219a1cb50dd07dd8187a2911ef41fa33e7fe.png";

function Group() {
  return (
    <div className="absolute contents leading-[20px] left-[407px] not-italic text-black text-nowrap top-1/2 tracking-[-0.1504px] translate-y-[-50%] whitespace-pre">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[calc(50%-341px)] text-[20px] top-[650px]">
        Real experiences from families watching their children fall in love with art.
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[577px] text-[96px] top-[427px]">Stories from</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[calc(50%-457px)] text-[128px] top-[calc(50%-14.5px)]">Happy Parents</p>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="absolute bg-white h-[1117px] left-0 overflow-clip top-0 w-[1728px]" data-name="Testimonial">
      <div className="absolute blur-[5.45px] filter h-[1153px] left-0 top-[-18px] w-[1728px]" data-name="105855 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1058551} />
      </div>
      <Group />
    </div>
  );
}

export default function Screen10() {
  return (
    <div className="bg-white relative w-[1728px] h-[1117px] mt-0" data-name="Screen 10">
      <Testimonial />
    </div>
  );
}