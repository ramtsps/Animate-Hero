import svgPaths from "./svg-1xnmp1z49w";
import img5041 from "figma:asset/c8b41ed6e20b9a1122b530bfdd337f76a8cfa043.png";

function MaskGroup() {
  return (
    <div className="absolute contents left-[-41.56px] top-[-255.66px]" data-name="Mask group">
      <div className="absolute flex h-[691.024px] items-center justify-center left-[-41.56px] top-[-255.66px] w-[940.818px]" style={{ "--transform-inner-width": "897.0625", "--transform-inner-height": "626.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-[355.773deg]">
          <div className="h-[626.604px] relative w-[897.071px]" data-name="504 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img5041} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3376b800} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[296px] top-[108px] w-[325.328px]" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon key={i} />
      ))}
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[296px] top-[63px]">
      <div className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-[296px] text-[16px] text-black text-nowrap top-[143px] tracking-[-0.3125px] whitespace-pre">
        <p className="mb-0">{`"My daughter absolutely loves her painting class! The instructors `}</p>
        <p className="mb-0">{`are patient and encouraging, and I've seen her confidence grow `}</p>
        <p>{`tremendously."`}</p>
      </div>
      <Container />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[296px] not-italic text-[16px] text-black text-nowrap top-[63px] tracking-[-0.1504px] whitespace-pre">
        <p className="mb-0">Sarah Mitchell</p>
        <p>Seattle, WA</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <MaskGroup />
      <div className="absolute bg-white h-[219px] left-[34px] top-[31px] w-[214px]">
        <div aria-hidden="true" className="absolute border-[#94aba3] border-[5px] border-solid inset-[-5px] pointer-events-none" />
      </div>
      <Group />
    </div>
  );
}