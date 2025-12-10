import imgPencil2 from "figma:asset/787f86f5413186bb1036ef5e0a13ddb6048f88bc.png";
import imgColors2 from "figma:asset/826e25e8c616f9e3182c74fc8d9dd0bacf386e02.png";
import imgPaint2 from "figma:asset/94bbe4efff0e0e8d5b2e5dab1c9f94b8eb4beb49.png";
import imgCanvas2 from "figma:asset/bdb2f700e89bb85027a826b8f018c24c46d698bc.png";
import imgBrush2 from "figma:asset/c297e8dc31d099744b989d9b7b9d0b1a6556510e.png";

function Group6() {
  return (
    <div className="absolute contents font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[105px] left-[317px] text-[#212224] text-[64px] text-center text-nowrap top-[415px] tracking-[-3px] whitespace-pre">
      <p className="absolute left-[1334px] opacity-0 top-[625px] translate-x-[-50%]">drawing</p>
      <p className="absolute left-[936.5px] opacity-0 top-[625px] translate-x-[-50%]">the joy of</p>
      <p className="absolute left-[464.5px] opacity-0 top-[625px] translate-x-[-50%]">lines, and</p>
      <p className="absolute left-[1350.5px] opacity-0 top-[520px] translate-x-[-50%]">{`colors, `}</p>
      <p className="absolute left-[844.5px] opacity-0 top-[520px] translate-x-[-50%]">{`as they explore `}</p>
      <p className="absolute left-[397.5px] opacity-0 top-[520px] translate-x-[-50%]">grow</p>
      <p className="absolute left-[1175.5px] opacity-0 top-[415px] translate-x-[-50%]">{`child’s creativity `}</p>
      <p className="absolute left-[547.5px] opacity-0 top-[415px] translate-x-[-50%]">Then let your</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[679px] top-[424px]">
      <div className="absolute left-[689px] size-[100px] top-[435px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, #D1F6D8)" id="Ellipse 3" r="50" />
        </svg>
      </div>
      <div className="absolute flex h-[117.802px] items-center justify-center left-[679px] top-[424px] w-[119.399px]" style={{ "--transform-inner-width": "79.484375", "--transform-inner-height": "89.34375" } as React.CSSProperties}>
        <div className="flex-none rotate-[231.576deg]">
          <div className="h-[89.348px] relative w-[79.489px]" data-name="pencil 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPencil2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[815px] top-[429px]">
      <div className="absolute left-[815px] size-[100px] top-[433px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, #FFCFB4)" id="Ellipse 4" r="50" />
        </svg>
      </div>
      <div className="absolute h-[107px] left-[818px] top-[429px] w-[95px]" data-name="colors 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgColors2} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[933px] top-[410px]">
      <div className="absolute left-[941px] size-[100px] top-[431px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, #FFFDC4)" id="Ellipse 5" r="50" />
        </svg>
      </div>
      <div className="absolute h-[145px] left-[933px] top-[410px] w-[129px]" data-name="paint 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPaint2} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[1067px] top-[433px]">
      <div className="absolute left-[1067px] size-[100px] top-[433px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, #D1E4F6)" id="Ellipse 2" r="50" />
        </svg>
      </div>
      <div className="absolute h-[79px] left-[1084px] top-[443px] w-[70px]" data-name="canvas 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCanvas2} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[563px] top-[433px]">
      <div className="absolute left-[563px] size-[100px] top-[433px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, #ABE7E9)" id="Ellipse 1" r="50" />
        </svg>
      </div>
      <div className="absolute h-[75px] left-[579px] top-[443px] w-[67px]" data-name="brush 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrush2} />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[563px] top-[410px]">
      <Group3 />
      <Group2 />
      <Group />
      <Group1 />
      <Group4 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[317px] top-[365px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[calc(50%+0.5px)] not-italic text-[#6a7282] text-[16px] text-center text-nowrap top-[365px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Start your child’s journey on a blank canvas</p>
      <Group6 />
      <Group5 />
    </div>
  );
}

export default function Screen() {
  return (
    <div className="bg-white relative size-full" data-name="Screen 2">
      <Group7 />
    </div>
  );
}