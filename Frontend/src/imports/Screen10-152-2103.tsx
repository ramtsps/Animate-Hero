import svgPaths from "./svg-3ir3jp1prn";
import img1058551 from "figma:asset/51f4219a1cb50dd07dd8187a2911ef41fa33e7fe.png";
import imgTigerCalligraphy11Sid177 from "figma:asset/267698921917187a8c7b48052763446f125148e1.png";

function Group() {
  return (
    <div className="absolute contents leading-[20px] left-[407px] not-italic text-black text-nowrap top-1/2 tracking-[-0.1504px] translate-y-[-50%] whitespace-pre">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[calc(50%-341px)] text-[20px] top-[650px]">
        <br aria-hidden="true" />
        Real experiences from families watching their children
        fall in love with art.
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[577px] text-[96px] top-[427px]">
        Stories from
      </p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[calc(50%-457px)] text-[128px] top-[calc(50%-14.5px)]">
        Happy Parents
      </p>
    </div>
  );
}

function Testimonial() {
  return (
    <div
      className="absolute bg-white h-[1117px] left-0 overflow-clip top-0 w-[1728px]"
      data-name="Testimonial"
    >
      <div
        className="absolute blur-[5.45px] filter h-[1153px] left-0 top-[-18px] w-[1728px]"
        data-name="105855 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={img1058551}
        />
      </div>
      <Group />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="h-[42px] relative shrink-0 w-[191px]"
        data-name="tiger-calligraphy11_sid_1:77"
      >
        <img
          alt=""
          className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgTigerCalligraphy11Sid177}
        />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] w-[191px]" />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="h-[72px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[235px]">
        Nurturing creativity and artistic expression in young
        minds since 2008.
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0"
      data-name="Container"
    >
      <Container />
      <Paragraph />
    </div>
  );
}

function Heading() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">
        Quick Links
      </p>
    </div>
  );
}

function Link() {
  return (
    <div
      className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[67.383px]"
      data-name="Link"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">
        About Us
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div
      className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[69.945px]"
      data-name="Link"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">
        Programs
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div
      className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[50.68px]"
      data-name="Link"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">
        Gallery
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div
      className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[57.617px]"
      data-name="Link"
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">
        Contact
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <Link3 />
    </div>
  );
}

function List() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0"
      data-name="Container"
    >
      <Heading />
      <List />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">
        Contact
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">
        123 Art Street
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">
        Seattle, WA 98101
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">
        contact@primiyasart.com
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">
        (555) 123-4567
      </p>
    </div>
  );
}

function List1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0"
      data-name="Container"
    >
      <Heading1 />
      <List1 />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="Heading 4"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">
        Follow Us
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p25397b80}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p3e0acf00}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p16b3b0c0}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p2c4f400}
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="bg-[#1e2939] relative rounded-[1.67772e+07px] shrink-0 size-[40px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[40px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      {[...Array(3).keys()].map((_, i) => (
        <Container4 key={i} />
      ))}
    </div>
  );
}

function Container6() {
  return (
    <div
      className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0"
      data-name="Container"
    >
      <Heading2 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[160px] left-[248px] top-[106px] w-[1232px]"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
      <Container3 />
      <Container6 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute bg-[#101828] h-[458px] left-[2px] overflow-clip top-[1118px] w-[1728px]"
      data-name="Footer"
    >
      <Container7 />
    </div>
  );
}

export default function Screen() {
  return (
    <div
      className="bg-white relative w-[1728px] h-[1576px] mt-[1350px]"
      data-name="Screen 10"
    >
      <Testimonial />
      <Footer />
    </div>
  );
}