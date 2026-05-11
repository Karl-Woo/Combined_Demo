import svgPaths from "./svg-6btw9xkm38";
import heroVideo from "../assets/Clover-Hero-Shoot-Fine-Dining_Table-whitesleeve_16x9_1920x1080.mp4";
import imgImg from "figma:asset/fe8bd49597a9b5227019480f399e0330b088b9f5.png";
import imgImg1 from "figma:asset/25b7b0428b2a29eb87421cac7e09c132bf992e85.png";
import imgImg2 from "figma:asset/24595f8d40f77effd7178741fced67fdc358fa43.png";
import imgImg3 from "figma:asset/8380b8af003ab523d4b48dac602f48d7d0f22d73.png";
import imgImage from "figma:asset/a04cb16da2e6f23b882c51716b11a474650b079b.png";
import imgImg4 from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgImg5 from "figma:asset/9e879022823ed79de83b0ae3e7918c31886019fe.png";
import imgImg6 from "figma:asset/930308e4e9c7cf19b0bb9638ade4dfb4f16111e1.png";
import imgImg7 from "figma:asset/31218de414fc76777e1a234f4b7e4df8ff06ee32.png";
import imgImg8 from "figma:asset/73cdc52eea9ba2fe886ed6994ec367f3152d4a25.png";
import imgImg9 from "figma:asset/0daf93ac7ec3c194eb4d1b3f619e2d3f80d34d0a.png";
import imgImg10 from "figma:asset/c1dc1165c770483655a781c72e9340d15d8a59f1.png";
import imgImg11 from "figma:asset/36488def3dfcba8d12d10c698bcdda6ff8fa63ab.png";
import imgCardVertical from "figma:asset/17313b13aea823a87d627fd539bb4d2102539c36.png";
import imgImg12 from "figma:asset/0ae4f64e71c8917cb2ae2d2aabb26b0a8ed34487.png";
import imgImg13 from "figma:asset/a8a2108f233bf57b6089ac9838afd3447774cc74.png";
import imgContent from "figma:asset/d3d7d046eca19fa88045dfef276b76702bded160.png";
import imgContent1 from "figma:asset/1d502ed7ef469ff0060953369cf4f3e9c53d2df6.png";
import imgNavigationPrimary from "figma:asset/26b53b5c62d6f421da04c07485a889e02fa668e9.png";
import { imgGroup1, imgGroup, imgVector } from "./svg-dy75v";

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-[1063px]" data-name="headline">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[0.885] min-w-full relative shrink-0 text-[92px] text-white uppercase w-[min-content] whitespace-pre-wrap">
        {`a clover for every `}
        <br aria-hidden="true" />
        small business
      </p>
      <div className="flex flex-col font-['Graphik:Medium'] justify-center leading-[0] relative shrink-0 text-[#ededed] text-[16px] w-[629px]">
        <p className="leading-[1.3]">Finally, a business growth engine that runs your point of sale.</p>
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip top-0 w-[330px]" data-name="BG">
      <div className="absolute bg-[#b6fb6f] h-[56px] left-[-12px] top-0 w-[382px]" data-name="Default" />
      <div className="absolute bg-[#333] h-[56px] left-[-82px] opacity-80 top-0 w-[82px]" data-name="Hover" />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.71]">Get Clover</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-1/4 left-[21.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.857px_-8px] mask-size-[32px_32px] right-[21.43%] top-1/4" style={{ maskImage: `url('${imgGroup1}')` }}>
      <div className="absolute inset-[-8.33%_-10.31%_-8.33%_-7.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1285 14">
          <g id="Group 1">
            <path d={svgPaths.p7598e00} id="line-3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p7703540} fill="var(--stroke-0, #333333)" id="Vector 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[200px] px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <Label />
      <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
        <Group1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[1063px]" data-name="content">
      <Headline />
      <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="ButtonGroup">
        <div className="bg-[#b6fb6f] h-[56px] min-w-[200px] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit]">
            <Bg />
            <Button />
          </div>
          <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="h-[56px] min-w-[200px] relative rounded-[8px] shrink-0" data-name="Button/Secondary">
          <div className="content-stretch flex gap-[4px] h-full items-center justify-center min-w-[inherit] px-[24px] py-[16px] relative rounded-[inherit]">
            <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-white text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.71]">Contact sales</p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-white border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="frame">
          <path d={svgPaths.p1841a500} id="Vector" stroke="var(--stroke-0, #B6FB6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_7960)" id="frame">
          <path d={svgPaths.p120ebe80} id="vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_7960">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_7934)" id="frame">
          <path d={svgPaths.p4302e80} id="vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_7934">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TabTabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tab/Tabs">
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] max-w-[200px] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Customize by:</p>
      </div>
      <div className="bg-[#040] content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[24px] py-[16px] relative rounded-[8px] shrink-0" data-name="Tab">
        <div className="relative shrink-0 size-[24px]" data-name="Functional icons">
          <Frame />
        </div>
        <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b6fb6f] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.57]">{`Food & beverage`}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[24px] py-[16px] relative rounded-[8px] shrink-0" data-name="Tab">
        <div className="relative shrink-0 size-[24px]" data-name="Functional icons">
          <Frame1 />
        </div>
        <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.57]">Retail</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[24px] py-[16px] relative rounded-[8px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Functional icons">
          <Frame2 />
        </div>
        <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.57]">{`Services `}</p>
        </div>
      </div>
    </div>
  );
}

function Clover() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-[calc(50%+0.2px)] top-1/2 w-[18.396px]" data-name="Clover">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3956 17.9999">
        <g id="Clover">
          <mask height="9" id="mask0_1_8019" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="9" x="0" y="0">
            <g id="mask 2">
              <path d="M0 0H8.39555V8.39315H0V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_8019)">
            <path clipRule="evenodd" d={svgPaths.p1bf0f500} fill="var(--fill-0, #B6FB6F)" fillRule="evenodd" id="Fill 1" />
          </g>
          <mask height="9" id="mask1_1_8019" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="9" x="10" y="0">
            <g id="mask 4">
              <path d={svgPaths.p3bdec300} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
          </mask>
          <g mask="url(#mask1_1_8019)">
            <path clipRule="evenodd" d={svgPaths.p28a47400} fill="var(--fill-0, #B6FB6F)" fillRule="evenodd" id="Fill 4" />
          </g>
          <mask height="9" id="mask2_1_8019" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="9" x="10" y="9">
            <g id="mask 6">
              <path d={svgPaths.p1405fd70} fill="var(--fill-0, white)" id="Vector_3" />
            </g>
          </mask>
          <g mask="url(#mask2_1_8019)">
            <path clipRule="evenodd" d={svgPaths.p3e412500} fill="var(--fill-0, #B6FB6F)" fillRule="evenodd" id="Fill 7" />
          </g>
          <mask height="9" id="mask3_1_8019" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="9" x="0" y="9">
            <g id="mask 8">
              <path d={svgPaths.p3bc48080} fill="var(--fill-0, white)" id="Vector_4" />
            </g>
          </mask>
          <g mask="url(#mask3_1_8019)">
            <path clipRule="evenodd" d={svgPaths.pdd18280} fill="var(--fill-0, #B6FB6F)" fillRule="evenodd" id="Fill 10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#040] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="icon">
      <div className="relative shrink-0 size-[24px]" data-name="Functional icons">
        <Clover />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="info">
      <Icon />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] max-w-[200px] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Shop one-on-one with our RESTAURANT specialists</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-1/4 left-[21.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.857px_-8px] mask-size-[32px_32px] right-[21.43%] top-1/4" style={{ maskImage: `url('${imgGroup1}')` }}>
      <div className="absolute inset-[-6.25%_-7.73%_-6.25%_-5.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5249 13.5">
          <g id="Group 1">
            <path d={svgPaths.p11631080} id="line-3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.p1701b800} fill="var(--stroke-0, #333333)" id="Vector 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Bg1() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip top-0 w-[330px]" data-name="BG">
      <div className="absolute bg-[#b6fb6f] h-[56px] left-[-12px] top-0 w-[382px]" data-name="Default" />
      <div className="absolute bg-[#333] h-[56px] left-[-82px] opacity-80 top-0 w-[82px]" data-name="Hover" />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.71]">Explore systems</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-1/4 left-[21.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.857px_-8px] mask-size-[32px_32px] right-[21.43%] top-1/4" style={{ maskImage: `url('${imgGroup1}')` }}>
      <div className="absolute inset-[-8.33%_-10.31%_-8.33%_-7.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1285 14">
          <g id="Group 1">
            <path d={svgPaths.p7598e00} id="line-3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p7703540} fill="var(--stroke-0, #333333)" id="Vector 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[200px] px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <Label1 />
      <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
        <Group3 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[524px]" data-name="content">
      <p className="font-['Graphik:Regular'] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[16px] w-[min-content]">{`Transform your restaurant business with Clover's integrated software solution, designed to streamline operations, enhance guest experiences, and boost profitability through insights.`}</p>
      <div className="bg-[#b6fb6f] h-[56px] min-w-[200px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit]">
          <Bg1 />
          <Button1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-start justify-between relative mb-[40px]" data-name="header">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#333] text-[56px] uppercase w-[632px]">Keep things flowing with the all-in-one restaurant POS</p>
      <Content1 />
    </div>
  );
}

function TopContent() {
  return (
    <div className="h-[93px] relative shrink-0 w-full" data-name="topContent">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[56px] relative size-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] inset-[0_2.38%_17.95%_2.38%] items-center justify-center px-[8px] py-[4px] rounded-[44px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Seat customization</p>
      </div>
    </div>
  );
}

function Headline1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative self-stretch text-[#333] text-[18px]">See top-performing dishes</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Headline1 />
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] inset-[0_2.38%_17.95%_2.38%] items-center justify-center px-[8px] py-[4px] rounded-[44px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Scan to pay</p>
      </div>
    </div>
  );
}

function Headline2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative self-stretch text-[#333] text-[18px]">Manage staff, payroll, and scheduling</p>
    </div>
  );
}

function Copy1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Headline2 />
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] inset-[0_2.38%_17.95%_2.38%] items-center justify-center px-[8px] py-[4px] rounded-[44px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">online ordering Integrations</p>
      </div>
    </div>
  );
}

function Headline3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative self-stretch text-[#333] text-[18px]">Keep online orders on one platform</p>
    </div>
  );
}

function Copy2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Headline3 />
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] inset-[0_2.38%_17.95%_2.38%] items-center justify-center px-[8px] py-[4px] rounded-[44px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Payments simplified</p>
      </div>
    </div>
  );
}

function Headline4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative self-stretch text-[#333] text-[18px]">Turn first-time guests into regulars</p>
    </div>
  );
}

function Copy3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Headline4 />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Cards">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[320px] relative" data-name="Card/Vertical">
        <div className="aspect-[343/420] relative rounded-[16px] shrink-0 w-full" data-name="Card/Vertical">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="img">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
            </div>
            <div className="absolute h-[39px] left-0 right-0 bottom-0" data-name="Tag">
              <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white" data-name="Gradient" />
              <Tag />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Copy />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[320px] relative" data-name="Card/Vertical">
        <div className="aspect-[343/420] relative rounded-[16px] shrink-0 w-full" data-name="Card/Vertical">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="img">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
            </div>
            <div className="absolute h-[39px] left-0 right-0 bottom-0" data-name="Tag">
              <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white" data-name="Gradient" />
              <Tag1 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Copy1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[320px] relative" data-name="Card/Vertical">
        <div className="aspect-[343/420] relative rounded-[16px] shrink-0 w-full" data-name="Card/Vertical">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="img">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
            </div>
            <div className="absolute h-[39px] left-0 right-0 bottom-0" data-name="Tag">
              <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white" data-name="Gradient" />
              <Tag2 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Copy2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[320px] relative" data-name="Card/Vertical">
        <div className="aspect-[343/420] relative rounded-[16px] shrink-0 w-full" data-name="Card/Vertical">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="img">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg3} />
            </div>
            <div className="absolute h-[39px] left-0 right-0 bottom-0" data-name="Tag">
              <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white" data-name="Gradient" />
              <Tag3 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Copy3 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[56px] text-white uppercase w-full">Restaurant-grade hardware that hustles as hard as you do</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Bg2() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip top-0 w-[330px]" data-name="BG">
      <div className="absolute bg-[#b6fb6f] h-[56px] left-[-12px] top-0 w-[382px]" data-name="Default" />
      <div className="absolute bg-[#333] h-[56px] left-[-82px] opacity-80 top-0 w-[82px]" data-name="Hover" />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.71]">Shop devices</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[200px] px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <Label2 />
    </div>
  );
}

function Bg3() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip top-0 w-[620px]" data-name="BG">
      <div className="absolute bg-[rgba(0,0,0,0.8)] h-[56px] left-[-12px] top-0 w-[620px]" data-name="Default" />
      <div className="absolute bg-white h-[56px] left-[-82px] opacity-80 top-0 w-[82px]" data-name="Hover" />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.71]">Explore Flex</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <Label3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10 />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Pair">
        <div className="bg-[#b6fb6f] h-[56px] min-w-[200px] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit]">
            <Bg2 />
            <Button2 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="bg-[rgba(0,0,0,0.8)] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
            <Bg3 />
            <Button3 />
          </div>
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function ProductInfoMini() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[524px]" data-name="product info - Mini">
      <Frame11 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-white w-[376px]" data-name="info">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] min-w-full relative shrink-0 text-[40px] uppercase w-[min-content]">CLOVER Flex</p>
      <div className="flex flex-col font-['Graphik:Regular'] justify-center leading-[0] relative shrink-0 text-[16px] w-[376px]">
        <p className="leading-[1.3]">A mobile POS for orders tableside.</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#b6fb6f] content-stretch flex flex-col items-center py-[4px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="content">
      <p className="font-['Graphik:Medium'] leading-[1.3] not-italic relative shrink-0 text-[#040] text-[16px] text-center whitespace-nowrap">Flex</p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="bottom">
      <Info1 />
      <div className="content-stretch flex gap-[16px] h-[120px] items-end relative shrink-0" data-name="Module/Hardware/Carousel">
        <div className="flex flex-row items-end self-stretch">
          <div className="content-stretch flex flex-col h-full items-start justify-end overflow-clip relative rounded-[8px] shrink-0 w-[120px]" data-name="Module/Hardware/Carousel/Card">
            <div className="h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="img">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImg4} />
                <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                  <img alt="" className="absolute left-[-36.57%] max-w-none size-[181.03%] top-[-48.39%]" src={imgImg5} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end self-stretch">
          <div className="bg-[#b6fb6f] h-full relative rounded-[8px] shrink-0 w-[120px]" data-name="Module/Hardware/Carousel/Card">
            <div className="content-stretch flex flex-col items-start justify-end overflow-clip relative rounded-[inherit] size-full">
              <Content2 />
              <div className="h-[120px] pointer-events-none relative rounded-[8px] shrink-0 w-full" data-name="img">
                <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImg4} />
                  <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                    <img alt="" className="absolute left-[-13.2%] max-w-none size-[123.92%] top-[-11.44%]" src={imgImg6} />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#b6fb6f] border-solid inset-0 rounded-[8px]" />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#b6fb6f] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
        <div className="flex flex-row items-end self-stretch">
          <div className="content-stretch flex flex-col h-full items-start justify-end overflow-clip relative rounded-[8px] shrink-0 w-[120px]" data-name="Module/Hardware/Carousel/Card">
            <div className="h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="img">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImg4} />
                <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                  <img alt="" className="absolute left-[-12.62%] max-w-none size-[125.23%] top-[-15.27%]" src={imgImg7} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end self-stretch">
          <div className="content-stretch flex flex-col h-full items-start justify-end overflow-clip relative rounded-[8px] shrink-0 w-[120px]" data-name="Module/Hardware/Carousel/Card">
            <div className="h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="img">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImg4} />
                <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                  <img alt="" className="absolute h-[101.77%] left-[-1.8%] max-w-none top-0 w-[103.6%]" src={imgImg8} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end self-stretch">
          <div className="content-stretch flex flex-col h-full items-start justify-end overflow-clip relative rounded-[8px] shrink-0 w-[120px]" data-name="Module/Hardware/Carousel/Card">
            <div className="h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="img">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImg4} />
                <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                  <img alt="" className="absolute left-[-5.71%] max-w-none size-[120.48%] top-[-2.68%]" src={imgImg9} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[783px] relative rounded-[16px] shrink-0 w-full" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImage} />
        <div className="absolute inset-0 rounded-[16px]" style={{ backgroundImage: "linear-gradient(-65.6265deg, rgba(0, 0, 0, 0) 51.074%, rgba(17, 5, 3, 0.5) 80.531%)" }} />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[64px] relative size-full">
        <ProductInfoMini />
        <Bottom />
      </div>
    </div>
  );
}

function Headline5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[56px] text-center uppercase w-full">Run the numbers</p>
    </div>
  );
}

function Copy4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="copy">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[1.1] relative shrink-0 text-[#040] text-[18px] w-full">Devices shipped</p>
      <p className="font-['Graphik:Regular'] leading-[1.3] relative shrink-0 text-[#4b4b4b] text-[16px] w-full">{`Used by small businesses across restaurants, retail, and the service industry. `}</p>
    </div>
  );
}

function Copy5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="copy">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[1.1] relative shrink-0 text-[#040] text-[18px] w-full">POS provider</p>
      <p className="font-['Graphik:Regular'] leading-[1.3] relative shrink-0 text-[#4b4b4b] text-[16px] w-full">Named “Best in Class” by Javelin’s 2025 Small Business Point of Sale System Scorecard.</p>
    </div>
  );
}

function Copy6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="copy">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[1.1] relative shrink-0 text-[#040] text-[18px] w-full">Annualized processing volume</p>
      <p className="font-['Graphik:Regular'] leading-[1.3] relative shrink-0 text-[#4b4b4b] text-[16px] w-full">A testament to Clover’s robust and reliable processing capabilities.</p>
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Stats">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[156px] items-start justify-center min-h-px min-w-px not-italic relative text-center" data-name="Module/Stat/Card">
        <p className="font-['PP_Formula:Condensed_Black'] leading-[0.885] relative shrink-0 text-[#040] text-[92px] uppercase w-full">9M+</p>
        <Copy4 />
      </div>
      <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 1">
                <line id="divider" opacity="0.5" stroke="var(--stroke-0, #004400)" x2="156" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[156px] items-start justify-center min-h-px min-w-px not-italic relative text-center" data-name="Module/Stat/Card">
        <p className="font-['PP_Formula:Condensed_Black'] leading-[0.885] relative shrink-0 text-[#040] text-[92px] uppercase w-full">#9</p>
        <Copy5 />
      </div>
      <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 1">
                <line id="divider" opacity="0.5" stroke="var(--stroke-0, #004400)" x2="156" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[156px] items-start justify-center min-h-px min-w-px not-italic relative text-center" data-name="Module/Stat/Card">
        <p className="font-['PP_Formula:Condensed_Black'] leading-[0.885] relative shrink-0 text-[#040] text-[92px] uppercase w-full">$999B+</p>
        <Copy6 />
      </div>
    </div>
  );
}

function Blur() {
  return <div className="-translate-y-1/2 absolute backdrop-blur-[12px] h-[783px] left-0 right-0 top-1/2" data-name="Blur" />;
}

function QuotationMarks() {
  return (
    <div className="h-[18px] relative shrink-0 w-[23.999px]" data-name="Quotation Marks">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9989 18">
        <g id="Quotation Marks">
          <path d={svgPaths.p36486980} fill="var(--fill-0, #B6FB6F)" id="Vector" />
          <path d={svgPaths.p30df0000} fill="var(--fill-0, #B6FB6F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function QuoteBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[122px] items-start relative shrink-0 w-[622px]" data-name="Quote Block">
      <QuotationMarks />
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic overflow-hidden relative shrink-0 text-[56px] text-ellipsis text-white uppercase w-[622px]">I consider clover our third arm ... allowing us to focus on business not paperwork.</p>
    </div>
  );
}

function Img() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[64px]" data-name="img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImg4} />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[185.5%] left-[-49.18%] max-w-none top-[-39.07%] w-[200%]" src={imgImg10} />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[1.3] min-h-px min-w-px not-italic relative text-white whitespace-nowrap">
      <p className="font-['Graphik:Medium'] relative shrink-0 text-[16px]">Robert Cucco</p>
      <p className="font-['Graphik:Regular'] relative shrink-0 text-[14px]">Table 87</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <Img />
      <Frame9 />
    </div>
  );
}

function LargePrimaryMain() {
  return (
    <div className="content-stretch flex items-center justify-center py-[16px] relative rounded-[8px] shrink-0" data-name="Large / Primary / Main">
      <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15.75px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" id="Ellipse 92" r="11" stroke="var(--stroke-0, #B6FB6F)" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute inset-[36.48%_32.26%_33.35%_40.92%]" data-name="arrow-right">
          <div className="absolute inset-[3.91%_6.46%_3.91%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01949 6.67309">
              <path d={svgPaths.p332ed00} fill="var(--fill-0, #B6FB6F)" id="arrow-right" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="image 669">
      <Frame12 />
      <LargePrimaryMain />
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full" data-name="cta">
      <div className="bg-[rgba(0,0,0,0.8)] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[424px]" data-name="Card/Testimonial">
        <Image1 />
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="absolute content-stretch flex flex-col h-[783px] items-start justify-between inset-x-[24px] overflow-clip p-[56px] rounded-[16px] top-[24px]" data-name="Testimonials">
      <Blur />
      <QuoteBlock />
      <Cta />
    </div>
  );
}

function Bg4() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip top-0 w-[330px]" data-name="BG">
      <div className="absolute bg-[#b6fb6f] h-[56px] left-[-12px] top-0 w-[382px]" data-name="Default" />
      <div className="absolute bg-[#333] h-[56px] left-[-82px] opacity-80 top-0 w-[82px]" data-name="Hover" />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.71]">Learn more</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-1/4 left-[21.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.857px_-8px] mask-size-[32px_32px] right-[21.43%] top-1/4" style={{ maskImage: `url('${imgGroup1}')` }}>
      <div className="absolute inset-[-8.33%_-10.31%_-8.33%_-7.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1285 14">
          <g id="Group 1">
            <path d={svgPaths.p7598e00} id="line-3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p7703540} fill="var(--stroke-0, #333333)" id="Vector 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[200px] px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <Label4 />
      <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
        <Group4 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[524px]" data-name="content">
      <p className="font-['Graphik:Regular'] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[16px] w-[min-content]">Drive revenue and deliver more to customers with commission-free online ordering, delivery management, and easy integration with third-party delivery apps.</p>
      <div className="bg-[#b6fb6f] h-[56px] min-w-[200px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit]">
          <Bg4 />
          <Button4 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start justify-between min-h-px min-w-px relative" data-name="header">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#333] text-[56px] uppercase w-[632px]">All of your online orders, in one place</p>
      <Content3 />
    </div>
  );
}

function TopContent1() {
  return (
    <div className="h-[93px] relative shrink-0 w-full" data-name="topContent">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[56px] relative size-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Header1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag4() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] inset-[0_2.38%_17.95%_2.38%] items-center justify-center px-[8px] py-[4px] rounded-[44px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Tag label</p>
      </div>
    </div>
  );
}

function Headline6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative self-stretch text-[#333] text-[18px]">Third-party integrations</p>
    </div>
  );
}

function Copy7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Headline6 />
        <p className="font-['Graphik:Regular'] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Connect to leading online ordering platforms and streamline your sales processes for maximum efficiency.</p>
      </div>
    </div>
  );
}

function Tag5() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] inset-[0_2.38%_17.95%_2.38%] items-center justify-center px-[8px] py-[4px] rounded-[44px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Tag label</p>
      </div>
    </div>
  );
}

function Headline7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative self-stretch text-[#333] text-[18px]">Custom website</p>
    </div>
  );
}

function Copy8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Headline7 />
        <p className="font-['Graphik:Regular'] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Add online ordering to your website with zero hassle for integrated menu management, order processing, and inventory tracking.</p>
      </div>
    </div>
  );
}

function Tag6() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] inset-[0_2.38%_17.95%_2.38%] items-center justify-center px-[8px] py-[4px] rounded-[44px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Tag label</p>
      </div>
    </div>
  );
}

function Headline8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative self-stretch text-[#333] text-[18px]">Hosted checkout</p>
    </div>
  );
}

function Copy9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Headline8 />
        <p className="font-['Graphik:Regular'] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">Power smooth transactions with a secure, customizable, and mobile-friendly checkout page.</p>
      </div>
    </div>
  );
}

function Tag7() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] inset-[0_2.38%_17.95%_2.38%] items-center justify-center px-[8px] py-[4px] rounded-[44px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Altform:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[1.2]">Tag label</p>
      </div>
    </div>
  );
}

function Headline9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Headline">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative self-stretch text-[#333] text-[18px]">Pickup and delivery</p>
    </div>
  );
}

function Copy10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copy">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] relative w-full">
        <Headline9 />
        <p className="font-['Graphik:Regular'] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#4b4b4b] text-[14px] w-[min-content]">{`Streamline operations with a single system for online ordering, menu management, and order processing. `}</p>
      </div>
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Cards">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[320px] relative" data-name="Card/Vertical">
        <div className="aspect-[343/420] relative rounded-[16px] shrink-0 w-full" data-name="Card/Vertical">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="img">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg11} />
            </div>
            <div className="absolute h-[39px] left-0 right-0 bottom-0" data-name="Tag">
              <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white" data-name="Gradient" />
              <Tag4 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Copy7 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[320px] relative" data-name="Card/Vertical">
        <div className="aspect-[343/420] relative rounded-[16px] shrink-0 w-full" data-name="Card/Vertical">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCardVertical} />
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name="img" />
            <div className="absolute h-[39px] left-0 right-0 bottom-0" data-name="Tag">
              <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white" data-name="Gradient" />
              <Tag5 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Copy8 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[320px] relative" data-name="Card/Vertical">
        <div className="aspect-[343/420] relative rounded-[16px] shrink-0 w-full" data-name="Card/Vertical">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="img">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg12} />
            </div>
            <div className="absolute h-[39px] left-0 right-0 bottom-0" data-name="Tag">
              <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white" data-name="Gradient" />
              <Tag6 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Copy9 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[320px] relative" data-name="Card/Vertical">
        <div className="aspect-[343/420] relative rounded-[16px] shrink-0 w-full" data-name="Card/Vertical">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="img">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg13} />
            </div>
            <div className="absolute h-[39px] left-0 right-0 bottom-0" data-name="Tag">
              <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-white" data-name="Gradient" />
              <Tag7 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Copy10 />
      </div>
    </div>
  );
}

function Blur1() {
  return <div className="-translate-y-1/2 absolute backdrop-blur-[12px] h-[634px] left-0 right-0 top-[calc(50%+27px)]" data-name="Blur" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%)" }} />;
}

function Copy11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-white w-[524px]" data-name="copy">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] relative shrink-0 text-[56px] uppercase w-full">{`Go premium with clover hospitality `}</p>
      <p className="font-['Graphik:Regular'] leading-[1.3] relative shrink-0 text-[16px] w-full">{`Clover Hospitality delivers an upgraded POS solution for bars and restaurants with extra features like advanced table management, enhanced customer profiles, and omnichannel capabilities. `}</p>
    </div>
  );
}

function Bg5() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip top-0 w-[330px]" data-name="BG">
      <div className="absolute bg-[#b6fb6f] h-[56px] left-[-12px] top-0 w-[382px]" data-name="Default" />
      <div className="absolute bg-[#333] h-[56px] left-[-82px] opacity-80 top-0 w-[82px]" data-name="Hover" />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.71]">Learn more</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-1/4 left-[21.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.857px_-8px] mask-size-[32px_32px] right-[21.43%] top-1/4" style={{ maskImage: `url('${imgGroup1}')` }}>
      <div className="absolute inset-[-8.33%_-10.31%_-8.33%_-7.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1285 14">
          <g id="Group 1">
            <path d={svgPaths.p7598e00} id="line-3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p7703540} fill="var(--stroke-0, #333333)" id="Vector 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[200px] px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <Label5 />
      <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
        <Group5 />
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="h-[580px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]">
        <div className="absolute inset-0 overflow-hidden rounded-tl-[16px] rounded-tr-[16px]">
          <img alt="" className="absolute h-[135%] left-[3.36%] max-w-none top-[-23.7%] w-full" src={imgContent} />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-tl-[16px] rounded-tr-[16px]">
          <img alt="" className="absolute h-[208%] left-[-7.68%] max-w-none top-[-82.73%] w-[129.94%]" src={imgContent1} />
        </div>
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[56px] relative size-full">
          <Blur1 />
          <Copy11 />
          <div className="bg-[#b6fb6f] h-[56px] min-w-[200px] relative rounded-[8px] shrink-0" data-name="Button">
            <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit]">
              <Bg5 />
              <Button5 />
            </div>
            <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function UtilitarianIcons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utilitarian icons">
          <mask height="24" id="mask0_1_7952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_7952)">
            <g id="Group 1">
              <path d={svgPaths.p10fe100} id="line-3" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeWidth="2" />
              <path d="M17.2983 12.0001H4.44115" id="Vector 1" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Driver() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[16px] shrink-0" data-name="Driver">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[24px] tracking-[0.24px] uppercase whitespace-nowrap">SHOP Hospitality</p>
      <UtilitarianIcons />
    </div>
  );
}

function UtilitarianIcons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utilitarian icons">
          <mask height="24" id="mask0_1_7952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_7952)">
            <g id="Group 1">
              <path d={svgPaths.p10fe100} id="line-3" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeWidth="2" />
              <path d="M17.2983 12.0001H4.44115" id="Vector 1" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Driver1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[16px] shrink-0" data-name="Driver">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[24px] tracking-[0.24px] uppercase whitespace-nowrap">SHOP Hospitality</p>
      <UtilitarianIcons1 />
    </div>
  );
}

function UtilitarianIcons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utilitarian icons">
          <mask height="24" id="mask0_1_7952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_7952)">
            <g id="Group 1">
              <path d={svgPaths.p10fe100} id="line-3" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeWidth="2" />
              <path d="M17.2983 12.0001H4.44115" id="Vector 1" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Driver2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[16px] shrink-0" data-name="Driver">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[24px] tracking-[0.24px] uppercase whitespace-nowrap">SHOP Hospitality</p>
      <UtilitarianIcons2 />
    </div>
  );
}

function UtilitarianIcons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utilitarian icons">
          <mask height="24" id="mask0_1_7952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_7952)">
            <g id="Group 1">
              <path d={svgPaths.p10fe100} id="line-3" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeWidth="2" />
              <path d="M17.2983 12.0001H4.44115" id="Vector 1" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Driver3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[16px] shrink-0" data-name="Driver">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[24px] tracking-[0.24px] uppercase whitespace-nowrap">SHOP Hospitality</p>
      <UtilitarianIcons3 />
    </div>
  );
}

function UtilitarianIcons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utilitarian icons">
          <mask height="24" id="mask0_1_7952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_7952)">
            <g id="Group 1">
              <path d={svgPaths.p10fe100} id="line-3" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeWidth="2" />
              <path d="M17.2983 12.0001H4.44115" id="Vector 1" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Driver4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[16px] shrink-0" data-name="Driver">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[24px] tracking-[0.24px] uppercase whitespace-nowrap">SHOP Hospitality</p>
      <UtilitarianIcons4 />
    </div>
  );
}

function UtilitarianIcons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utilitarian icons">
          <mask height="24" id="mask0_1_7952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_7952)">
            <g id="Group 1">
              <path d={svgPaths.p10fe100} id="line-3" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeWidth="2" />
              <path d="M17.2983 12.0001H4.44115" id="Vector 1" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Driver5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[16px] shrink-0" data-name="Driver">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[24px] tracking-[0.24px] uppercase whitespace-nowrap">SHOP Hospitality</p>
      <UtilitarianIcons5 />
    </div>
  );
}

function UtilitarianIcons6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utilitarian icons">
          <mask height="24" id="mask0_1_7952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_7952)">
            <g id="Group 1">
              <path d={svgPaths.p10fe100} id="line-3" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeWidth="2" />
              <path d="M17.2983 12.0001H4.44115" id="Vector 1" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Driver6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[16px] shrink-0" data-name="Driver">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[24px] tracking-[0.24px] uppercase whitespace-nowrap">SHOP Hospitality</p>
      <UtilitarianIcons6 />
    </div>
  );
}

function UtilitarianIcons7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Utilitarian icons">
          <mask height="24" id="mask0_1_7915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_7915)">
            <g id="Group 1">
              <path d={svgPaths.p10fe100} id="line-3" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeWidth="2" />
              <path d="M17.2983 12.0001H4.44115" id="Vector 1" stroke="var(--stroke-0, #004400)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Driver7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[16px] shrink-0" data-name="Driver">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#040] text-[24px] tracking-[0.24px] uppercase whitespace-nowrap">SHOP Hospitality</p>
      <UtilitarianIcons7 />
    </div>
  );
}

function Ticker() {
  return (
    <div className="bg-[#b6fb6f] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Ticker">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Driver />
          <Driver1 />
          <Driver2 />
          <Driver3 />
          <Driver4 />
          <Driver5 />
          <Driver6 />
          <Driver7 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[516px]" data-name="Title">
      <p className="font-['PP_Formula:Condensed_Black'] leading-[1.1] not-italic relative shrink-0 text-[#333] text-[56px] uppercase w-[524px]">Frequently Asked Questions</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="frame">
          <path d="M4 10H16" id="vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Question">
      <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] max-w-[630px] min-h-px min-w-px not-italic relative text-[#333] text-[18px]">What is Clover, and what does it offer for small businesses?</p>
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Functional icons">
        <Frame3 />
      </button>
    </div>
  );
}

function Answer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Answer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[32px] relative w-full">
          <p className="flex-[1_0_0] font-['Graphik:Regular'] leading-[1.3] min-h-px min-w-px not-italic relative text-[#4b4b4b] text-[16px]">Clover is a small business point of sale (POS) company that provides a range of hardware and software solutions to help small businesses manage their transactions, inventory, and more.</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="frame">
          <path d="M4 10H16M10 4V16" id="vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="frame">
          <path d="M4 10H16M10 4V16" id="vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="frame">
          <path d="M4 10H16M10 4V16" id="vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="frame">
          <path d="M4 10H16M10 4V16" id="vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FaqAccordion() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="FAQ Accordion">
      <div className="bg-[#ededed] relative rounded-[8px] shrink-0 w-full" data-name="Accordion">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[24px] relative w-full">
            <Question />
            <Answer />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Accordion">
        <div aria-hidden="true" className="absolute border-[#d5d5d5] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
        <div className="content-stretch flex items-start justify-between p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] max-w-[630px] min-h-px min-w-px not-italic relative text-[#333] text-[18px]">What types of businesses can benefit from using Clover POS systems?</p>
          <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Functional icons">
            <Frame4 />
          </button>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Accordion">
        <div aria-hidden="true" className="absolute border-[#d5d5d5] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
        <div className="content-stretch flex items-start justify-between p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] max-w-[630px] min-h-px min-w-px not-italic relative text-[#333] text-[18px]">{`What are the key features of Clover's POS systems?`}</p>
          <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Functional icons">
            <Frame5 />
          </button>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Accordion">
        <div aria-hidden="true" className="absolute border-[#d5d5d5] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
        <div className="content-stretch flex items-start justify-between p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] max-w-[630px] min-h-px min-w-px not-italic relative text-[#333] text-[18px]">How does Clover handle payment processing, and is it secure?</p>
          <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Functional icons">
            <Frame6 />
          </button>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Accordion">
        <div aria-hidden="true" className="absolute border-[#d5d5d5] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
        <div className="content-stretch flex items-start justify-between p-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Altform:SemiBold',sans-serif] leading-[1.1] max-w-[630px] min-h-px min-w-px not-italic relative text-[#333] text-[18px]">{`Can I customize the Clover POS system to suit my business's specific needs?`}</p>
          <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Functional icons">
            <Frame7 />
          </button>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.71]">View more FAQs</p>
      </div>
    </div>
  );
}

function RightIcon() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-name="Right Icon">
      <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
        <div className="absolute bottom-[37.5%] flex items-center justify-center left-1/4 right-1/4 top-[37.5%]" style={{ containerType: "size" }}>
          <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8px_-12px] mask-size-[32px_32px] relative size-full" data-name="arrow down" style={{ maskImage: `url('${imgGroup1}')` }}>
              <div className="absolute inset-[-8.33%_-23.57%_-8.33%_-16.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.41421 14">
                  <path d="M1 1L7 7L1 13" id="arrow down" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[632px] relative shrink-0 w-[626px]" data-name="Box">
      <FaqAccordion />
      <div className="content-stretch flex gap-[4px] items-center pl-[16px] pr-[12px] py-[16px] relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center self-stretch">
          <Text />
        </div>
        <RightIcon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[1440px]" data-name="Container">
      <div className="content-stretch flex items-start justify-between max-w-[inherit] px-[60px] py-[120px] relative w-full">
        <Title />
        <Box />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0.06%_0.24%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[407.661px_100px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.934 27.9315">
        <g id="Group">
          <path d={svgPaths.p1fbc7380} fill="var(--fill-0, #004400)" id="Vector" />
          <path d={svgPaths.p34a98980} fill="var(--fill-0, #004400)" id="Vector_2" />
          <path d={svgPaths.p4087600} fill="var(--fill-0, #004400)" id="Vector_3" />
          <path d={svgPaths.p25122300} fill="var(--fill-0, #004400)" id="Vector_4" />
          <path d={svgPaths.p32ee6b00} fill="var(--fill-0, #004400)" id="Vector_5" />
          <path d={svgPaths.p2d29080} fill="var(--fill-0, #004400)" id="Vector_6" />
          <path d={svgPaths.p2d973400} fill="var(--fill-0, #004400)" id="Vector_7" />
          <path d={svgPaths.p1af7dc80} fill="var(--fill-0, #004400)" id="Vector_8" />
          <path d={svgPaths.p2497d600} fill="var(--fill-0, #004400)" id="Vector_9" />
          <path d={svgPaths.p31958500} fill="var(--fill-0, #004400)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.06%_0_0]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-name="Content">
      <div className="h-[28px] overflow-clip relative shrink-0 w-[115px]" data-name="Main/Purple">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[80px] relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Payments() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Payments">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[18px] tracking-[-1px] w-full">Payments</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">In person</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Online</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Over the phone</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">By invoice</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Payment processing</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Payments security</p>
    </div>
  );
}

function Software() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Software">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[18px] tracking-[-1px] w-full">{`Software & Services`}</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Online ordering</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">eCommerce</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Business management</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Employee management</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Inventory</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Appointments</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Reservations</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Gift cards</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Customer engagement</p>
    </div>
  );
}

function BusinessTypes() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Business Types">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[18px] tracking-[-1px] w-full">Business Types</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Full Service Restaurants</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Quick Service Restaurants</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Retail</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Personal Services</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Professional Services</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Home and field Services</p>
    </div>
  );
}

function Devices() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Devices">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[18px] tracking-[-1px] w-full">Devices</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Go reader</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Flex</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Mini</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Station Solo</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Station Duo</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Kitchen Display System</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Accessories</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Device finance / Subscriptions</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">{`Smartphone & tablet`}</p>
    </div>
  );
}

function LinksRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Links Row 1">
      <Payments />
      <Software />
      <BusinessTypes />
      <Devices />
    </div>
  );
}

function Integrations() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Integrations">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[18px] tracking-[-1px] w-full">Integrations</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">App Market</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Developers [dashboard]</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Clover Connect</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Integration services</p>
    </div>
  );
}

function CashFlow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Cash Flow">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[18px] tracking-[-1px] w-full">Cash Flow</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Clover Capital</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Rapid Deposit</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Clover Credit Card</p>
    </div>
  );
}

function Resources() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Resources">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[18px] tracking-[-1px] w-full">Resources</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Help Center</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Blog</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Small Business Guides</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">FAQs</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Contact Sales</p>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="About">
      <p className="font-['Altform:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[18px] tracking-[-1px] w-full">About</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Contact Us</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">Careers</p>
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] relative shrink-0 text-[14px] w-full">About Clover</p>
    </div>
  );
}

function LinksRow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Links Row 2">
      <Integrations />
      <CashFlow />
      <Resources />
      <About />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center not-italic relative shrink-0 text-[#333] w-[1440px]" data-name="Content">
      <LinksRow />
      <LinksRow1 />
    </div>
  );
}

function Links() {
  return (
    <div className="relative shrink-0 w-full" data-name="Links">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[80px] py-[60px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function CountrySelector() {
  return (
    <div className="content-stretch flex gap-[8px] h-[23px] items-center relative shrink-0" data-name="Country Selector">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Player button">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 21.3333">
              <path d={svgPaths.p24641a80} id="Vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_58.33%_37.5%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-11.11%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 7.33333">
              <path d="M0.666667 6.66667V0.666667" id="Vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_41.67%_37.5%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-11.11%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 7.33333">
              <path d="M0.666667 6.66667V0.666667" id="Vector" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Graphik:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[1.29]">Pause Animations</p>
      </div>
    </div>
  );
}

function UiElements() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="UI Elements">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="UI Elements">
          <path d={svgPaths.p229d480} fill="var(--fill-0, #4B4B4B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CountrySelector1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[23px] items-center relative shrink-0" data-name="Country Selector">
      <UiElements />
      <div className="flex flex-col font-['Graphik:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[1.29]">United States (English)</p>
      </div>
    </div>
  );
}

function IconFqcebook() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="icon-fqcebook">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="icon-fqcebook">
          <path d={svgPaths.p22803740} fill="var(--fill-0, #4B4B4B)" id="facebook" />
        </g>
      </svg>
    </div>
  );
}

function IconInstagram() {
  return (
    <div className="h-[20px] relative shrink-0 w-[21px]" data-name="icon-instagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="icon-instagram">
          <path d={svgPaths.p1e0faf00} fill="var(--fill-0, #4B4B4B)" id="instagram" />
        </g>
      </svg>
    </div>
  );
}

function IconYoutube() {
  return (
    <div className="h-[15px] relative shrink-0 w-[22px]" data-name="icon-youtube">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
        <g id="icon-youtube">
          <path clipRule="evenodd" d={svgPaths.p36bd93c0} fill="var(--fill-0, #4B4B4B)" fillRule="evenodd" id="Mask" />
        </g>
      </svg>
    </div>
  );
}

function IconLinkedin() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="icon-linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="icon-linkedin">
          <path d={svgPaths.p2c7b8700} fill="var(--fill-0, #4B4B4B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0_3.71%_0_0.64%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0435 20">
        <g id="Group">
          <path d={svgPaths.p2159f000} fill="var(--fill-0, #4B4B4B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconGithub() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="icon-github">
      <Group6 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="social-icons">
      <IconFqcebook />
      <div className="h-[20px] relative shrink-0 w-[19px]" data-name="Socials">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.594px] left-1/2 top-[calc(50%-0.14px)] w-[21.677px]" data-name="X">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6774 19.5944">
            <path d={svgPaths.p307b0700} fill="var(--fill-0, #4B4B4B)" id="X" />
          </svg>
        </div>
      </div>
      <IconInstagram />
      <IconYoutube />
      <IconLinkedin />
      <IconGithub />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between w-[1440px] min-h-px min-w-px relative" data-name="Content">
      <CountrySelector />
      <CountrySelector1 />
      <SocialIcons />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="relative shrink-0 w-full" data-name="Social Links">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.2)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] py-[28px] relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Graphik:Regular'] h-full items-start justify-between max-w-[728px] min-h-px min-w-px relative text-[#333]" data-name="Left">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[22px]">© 2023 Clover Network, Inc.</p>
      </div>
      <p className="leading-[1.29] relative shrink-0 w-full">All pricing presented on clover.com is for new merchant acquiring customers only. Merchants currently processing on First Data systems and merchants that have processed on First Data systems during the previous 90 days are not eligible for offers and pricing on clover.com. When applying for the Clover Account experience without hardware, the monthly software fee is waived for 30 days. After the 30-day trial period, the cost for Virtual Terminal is $14.95 per month when no other software plan is in effect. Trial period and monthly cost is subject to change. Terms and conditions apply.</p>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col font-['Altform:Regular',sans-serif] gap-[16px] items-end leading-[1.57] relative shrink-0 text-[#5d5d5d] text-right w-[207px]" data-name="Links">
      <p className="relative shrink-0 w-full">Terms of Service</p>
      <p className="relative shrink-0 w-full">Privacy Policy</p>
      <p className="relative shrink-0 w-full">Accessibility</p>
      <p className="relative shrink-0 w-full">Manage Cookies</p>
      <p className="relative shrink-0 w-full">Modern Slavery Statement</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between w-[1440px] min-h-px min-w-px not-italic relative self-stretch text-[14px]" data-name="Content">
      <Left />
      <Links1 />
    </div>
  );
}

function Legal() {
  return (
    <div className="h-[270px] relative shrink-0 w-full" data-name="Legal">
      <div className="content-stretch flex items-start justify-between px-[80px] py-[48px] relative size-full">
        <Content8 />
      </div>
    </div>
  );
}

function MainFooterContent() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[72px] relative shrink-0 w-full" data-name="Main Footer Content">
      <Logo />
      <Links />
      <SocialLinks />
      <Legal />
    </div>
  );
}

function Footnote() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footnote">
      <div aria-hidden="true" className="absolute border-[#5d5d5d] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[48px] relative w-full">
          <div className="font-['Graphik:Regular'] leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] w-[1440px] whitespace-pre-wrap">
            <p className="leading-[1.29] mb-0">{`*Promotion available for new Clover Business Solutions merchants who have not previously had a Clover account or processed with First Data Merchant Solutions LLC. Clover accounts are subject to approval, including credit approval. `}</p>
            <p className="leading-[1.29] mb-0">&nbsp;</p>
            <p className="leading-[1.29] mb-0">Selecting a Clover point-of-sale credit card processing device does not convey or guarantee approval. Clover devices are only shipped after the application is approved. To be eligible, merchant must: (1) apply for the account through our Clover Sales team, (2) choose a Clover Hardware Subscription or purchase equipment, (3) be credit approved no later than 8/31/23, (4) activate account by submitting a batch of $25 or more in sales within 30 calendar days from approval date, (5) Processing $10,000 or greater in card transactions within the first four billing cycles.</p>
            <p className="leading-[1.29] mb-0">&nbsp;</p>
            <p className="leading-[1.29] mb-0">Additional fees may apply to certain Clover apps, services or activated accounts. Promotional offer excludes Clover Go, Virtual Terminal (Clover Account) and Payeezy. Eligibility is determined at our sole discretion. Limit of one reward per business relationship, regardless of the number of business locations. Offer is not valid with any other offer and is subject to change without notice. Requires a 3-year contract. All other terms and conditions apply. Offer expires August 31, 2023. All pricing and promotions presented on clover.com are for new merchant acquiring customers only. Merchants currently processing on First Data systems and merchants that have processed on First Data systems during the previous 90 days are not eligible for offers and pricing on clover.com.</p>
            <p className="leading-[1.29] mb-0">&nbsp;</p>
            <p className="leading-[1.29] mb-0">When applying for the Clover Account experience without hardware, the monthly software fee is waived for 90 days. After the 90-day trial period, the cost for Virtual Terminal is $14.95 per month when no other software plan is in effect. Trial period and monthly cost is subject to change. Terms and conditions apply.</p>
            <p className="leading-[1.29]">First Data Merchant Services, LLC, doing business as Clover Business Solutions, is a registered ISO of Pathward N.A., Sioux Falls, SD; and Wells Fargo Bank N.A., Concord, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="products">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{`Food & beverage`}</p>
    </div>
  );
}

function Resources1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="resources">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Services</p>
    </div>
  );
}

function Products1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="products">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Retail</p>
    </div>
  );
}

function Resources2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="resources">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Products</p>
    </div>
  );
}

function Resources3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="resources">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Resources</p>
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-center relative shrink-0" data-name="Links 1">
      <Products />
      <Resources1 />
      <Products1 />
      <Resources2 />
      <Resources3 />
    </div>
  );
}

function LogoLinks() {
  return (
    <div className="content-stretch flex h-[46px] items-center relative shrink-0" data-name="Logo & Links 4">
      <Links2 />
    </div>
  );
}

function Pricing() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pricing">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Log In</p>
    </div>
  );
}

function Pricing1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pricing">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Support</p>
    </div>
  );
}

function Pricing2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pricing">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Pricing</p>
    </div>
  );
}

function Pricing3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pricing">
      <p className="font-['Altform:Regular',sans-serif] leading-[1.57] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{`Shop `}</p>
    </div>
  );
}

function Bg6() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip top-0 w-[330px]" data-name="BG">
      <div className="absolute bg-[#b6fb6f] h-[56px] left-[-12px] top-0 w-[382px]" data-name="Default" />
      <div className="absolute bg-[#333] h-[56px] left-[-82px] opacity-80 top-0 w-[82px]" data-name="Hover" />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Altform:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.71]">Contact us</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <Label6 />
    </div>
  );
}

function Links3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Links 4">
      <Pricing />
      <Pricing1 />
      <Pricing2 />
      <Pricing3 />
      <div className="relative shrink-0 size-[32px]" data-name="Utilitarian icons/shopping cart">
        <div className="absolute flex inset-[21.88%_18.75%_21.88%_18.83%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.027px_-7px] mask-size-[32px_32px] relative size-full" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
              <div className="absolute inset-[-4.17%_-3.76%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4729 19.5">
                  <path d={svgPaths.pecefe80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#b6fb6f] h-[48px] relative rounded-[8px] shrink-0 w-[119px]" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <Bg6 />
          <Button6 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="frame">
          <path d={svgPaths.p17b7e980} id="vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

export default function HomePageRestaurantsDesktop() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-center relative w-full min-w-[1440px]" data-name="Home_Page_Restaurants_Desktop">
      <div className="content-stretch flex flex-col h-[calc(100vh/var(--design-scale,1))] items-center px-[80px] pt-[160px] relative shrink-0 w-full overflow-hidden" data-name="Module/LandingPageHero">
        <div className="absolute inset-0 w-full h-full">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <Content />
        </div>
      </div>
      <div className="bg-[#b6fb6f] content-stretch flex h-[64px] items-center justify-between px-[80px] py-[8px] relative shrink-0 w-full" data-name="Navigation/Secondary">
        <div aria-hidden="true" className="absolute border-[rgba(0,68,0,0.2)] border-b border-solid inset-0 pointer-events-none shadow-[0px_2px_8px_0px_rgba(0,0,0,0.05)]" />
        <TabTabs />
        <div className="hidden backdrop-blur-[2px] content-stretch flex gap-[10px] items-center justify-center p-[4px] relative shrink-0" data-name="Navigation/Callout">
          <Info />
          <div className="relative shrink-0 size-[24px]" data-name="Utilitarian icons">
            <Group2 />
          </div>
        </div>
      </div>
      <div className="bg-[#ededed] content-stretch flex flex-col gap-[40px] items-center justify-center overflow-clip pb-[80px] pt-[120px] px-[24px] relative shrink-0 w-full" data-name="Module/RecircCards">
        <TopContent />
        <Cards />
      </div>
      <div className="bg-[#ededed] relative shrink-0 w-full" data-name="Module/HardwareHighlight">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
            <Image />
          </div>
        </div>
      </div>
      <div className="bg-[#b6fb6f] relative shrink-0 w-full" data-name="Module/GridStat">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[80px] items-center justify-center px-[80px] py-[120px] relative w-full">
            <Headline5 />
            <Stats />
          </div>
        </div>
      </div>
      <div className="bg-[#b6fb6f] h-[831px] relative shrink-0 w-full" data-name="Module/TestimonialShowcase">
        <Testimonials />
      </div>
      <div className="bg-[#ededed] content-stretch flex flex-col gap-[40px] items-center justify-center overflow-clip pb-[80px] pt-[120px] px-[24px] relative shrink-0 w-full" data-name="Module/RecircCards">
        <TopContent1 />
        <Cards1 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Footer">
        <MainFooterContent />
        <Footnote />
      </div>
      <div className="absolute content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] top-0 w-full" data-name="Navigation/Primary">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavigationPrimary} />
        <LogoLinks />
        <Links3 />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="Quatrefoil Logomark/Clover green">
          <div className="absolute inset-[0_53.28%_53.28%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.212 11.212">
              <path d={svgPaths.pdd38b80} fill="var(--fill-0, #B6FB6F)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_53.28%_53.28%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.212 11.212">
              <path d={svgPaths.p34486870} fill="var(--fill-0, #B6FB6F)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[53.28%_0_0_53.28%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.212 11.212">
              <path d={svgPaths.p134f4e00} fill="var(--fill-0, #B6FB6F)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[53.28%_53.28%_0_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.212 11.212">
              <path d={svgPaths.p1e00b370} fill="var(--fill-0, #B6FB6F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}