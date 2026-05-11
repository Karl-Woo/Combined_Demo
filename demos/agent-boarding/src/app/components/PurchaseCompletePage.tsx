/**
 * PurchaseCompletePage — matches Figma node 40000776:7375
 * ("Desktop - 10b - GIO'S VERSION").
 *
 * Shown after the 1-second loading state that follows clicking
 * "Checkout now" on BuyThisSetupPage.
 */
import imgStationDuo from '@/assets/station.png';
import imgFlex from '@/assets/flex.png';
import imgTestimonials from '@/assets/testimonials.png';
import { NavigationPrimary } from './NavigationPrimary';

function DownloadIcon() {
  return (
    <svg
      className="size-[20px]"
      viewBox="0 0 19.5 14.7"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.75 0.75V10.35M13.35 6.75L9.75 10.35L6.15 6.75M18.75 10.35V11.55C18.75 12.1865 18.4971 12.797 18.0471 13.2471C17.597 13.6971 16.9865 13.95 16.35 13.95H3.15C2.51348 13.95 1.90303 13.6971 1.45294 13.2471C1.00286 12.797 0.75 12.1865 0.75 11.55V10.35"
        stroke="#228800"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalLinkIcon({ color }: { color: string }) {
  return (
    <svg
      className="size-[20px]"
      viewBox="0 0 19.5 19.5"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.35 0.75H18.75V6.15M18.75 0.75L6.75 12.75M9.15 4.35H1.95C1.63174 4.35 1.32652 4.47643 1.10147 4.70147C0.876428 4.92651 0.75 5.23174 0.75 5.55V17.55C0.75 17.8683 0.876428 18.1735 1.10147 18.3985C1.32652 18.6236 1.63174 18.75 1.95 18.75H13.95C14.2683 18.75 14.5735 18.6236 14.7985 18.3985C15.0236 18.1735 15.15 17.8683 15.15 17.55V10.35"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DollarBillIcon() {
  return (
    <svg
      className="w-[42px] h-[22px]"
      viewBox="0 0 42 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24.6936 12.9465C25.1536 14.0949 26.4143 14.5171 27.1228 14.4819C28.2357 14.4819 29.3766 13.9663 29.3766 12.5951C29.3766 11.616 29.062 10.7151 27.1267 10.7095C25.3909 10.7044 24.7764 9.67704 24.7764 8.82146C24.7764 7.20449 26.1565 6.93464 27.1267 6.93464M27.1267 6.93464C28.6649 6.93464 29.0622 7.68521 29.3766 8.43719M27.1267 6.93464L27.1267 6M27.1271 14.4822L27.1271 15.5M15.6177 21H38.3823C39.828 21 41 19.4682 41 17.5787V4.42128C41 2.53176 39.828 1 38.3823 1H15.6177C14.172 1 13 2.53176 13 4.42128V17.5787C13 19.4682 14.172 21 15.6177 21Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6H5.30266M1 14H3.69734M7.67865 9.94511H2.9813M2.39459 6H2.3209M7.47689 14H8.46768"
        stroke="#228800"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg
      className="size-[42px]"
      viewBox="0 0 42 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 41H41M41 12.4288H1L19.4553 1.45361C19.9161 1.15745 20.4523 1 21 1C21.5478 1 22.0841 1.15745 22.5449 1.45361L41 12.4288Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 18.3333V34.3333H31.6667V18.3333M23.6667 18.3333V34.3333H18.3333V18.3333M10.3333 18.3333V34.3333H5V18.3333"
        stroke="#228800"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandCardIcon() {
  return (
    <svg
      className="size-[42px]"
      viewBox="0 0 42 38"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6284 7.68671C11.7897 5.11067 8.82468 5.87996 8.82468 8.19736C8.82468 9.87669 11.3636 12.0248 12.3345 12.7856C12.507 12.9211 12.7498 12.9211 12.9222 12.7856C13.8931 12.0248 16.4321 9.87669 16.4321 8.19736C16.4321 5.88472 13.4671 5.11067 12.6284 7.68671Z"
        stroke="#228800"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8904 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17H17L17.9981 16.7806M25 6.55855V16.0565M25 6.55855C23.8965 6.37301 22.7562 6.40866 21.6416 6.67926C20.2673 7.03021 18.859 6.25075 18.3691 4.86798C18.1312 4.17399 18.1867 3.4075 18.5217 2.75849C18.8568 2.10948 19.4401 1.63868 20.127 1.46277C24.5919 0.258692 29.3394 1.43804 32.8021 4.61144C36.2647 7.78485 37.9923 12.5397 37.4145 17.306M25 6.55855C26.3831 6.79108 27.7085 7.37104 28.8533 8.27133C30.9116 9.88992 32.1738 12.3768 32.2988 15.06C32.3565 16.4495 31.8953 17.8081 31.0121 18.8511L29.169 21.0373C28.5358 21.7934 27.6299 22.2422 26.6671 22.2765C25.7044 22.3108 24.7712 21.9277 24.0898 21.2184L20.52 17.4872C19.8609 16.7993 18.8996 16.530 17.9981 16.7806M41 35V20L40.993 17.306C40.9916 13.8494 39.1033 10.6944 36.1243 9.17159M17.9981 16.7806C17.0967 17.0313 16.3921 17.7638 16.1497 18.7024C15.9074 19.6409 16.1642 20.6428 16.8233 21.3307L23.3056 28.9888C24.6101 30.3472 25.3431 32.1897 25.3435 34.1111V37"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OfferCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-[#e5e5e5] border-solid flex flex-1 flex-col items-center min-w-px overflow-hidden p-[24px] rounded-[16px]">
      <div className="flex items-center w-full">
        <div className="size-[56px] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[8px] items-start w-full pt-[24px]">
        <p className="font-['Graphik:Semibold',sans-serif] leading-[32px] text-[24px] text-black m-0 w-full">
          {title}
        </p>
        <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] m-0">
          {description}
        </p>
      </div>
      <p className="font-['Graphik:Medium',sans-serif] leading-[20px] text-[#228800] text-[14px] text-center whitespace-nowrap m-0 cursor-pointer pt-[24px]">
        Learn more
      </p>
    </div>
  );
}

export default function PurchaseCompletePage() {
  return (
    <div
      className="bg-white relative w-full"
      style={{ minHeight: 'max(900px, calc(100vh / var(--design-scale, 1)))' }}
      data-name="Purchase complete page"
    >
      <NavigationPrimary />

      <div className="flex flex-col gap-[36px] items-center pb-[40px] w-full max-w-[1281px] mx-auto px-[80px] pt-[36px]">
        {/* Hero section: welcome + testimonial image */}
        <div className="flex gap-[64px] items-center justify-center w-full">
          {/* Left: title + body + buttons */}
          <div className="flex flex-1 flex-col gap-[40px] items-start min-w-px">
            <p className="font-['Graphik:Semibold',sans-serif] leading-[40px] text-[32px] text-black m-0 w-full">
              Congratulations and welcome to Clover!
            </p>
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex flex-col gap-[8px] items-start py-[16px] w-full">
                <p className="font-['Graphik:Regular',sans-serif] leading-[34px] text-[24px] text-black tracking-[0.54px] m-0 whitespace-nowrap">
                  What happens now?
                </p>
                <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] m-0 w-full">
                  You&rsquo;ll receive a welcome email with your Clover account
                  details. Your preferred payment method will be charged for the
                  devices you ordered.
                </p>
              </div>
              <div className="flex gap-[16px] items-start">
                <button
                  type="button"
                  className="bg-white border border-[#727272] border-solid flex gap-[8px] items-center justify-center min-w-[100px] overflow-hidden px-[16px] py-[12px] rounded-[8px] cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                >
                  <p className="font-['Graphik:Medium',sans-serif] leading-[24px] text-[#228800] text-[16px] text-center whitespace-nowrap m-0">
                    Download agreement
                  </p>
                  <DownloadIcon />
                </button>
                <button
                  type="button"
                  className="bg-[#228800] flex gap-[8px] items-center justify-center min-w-[100px] overflow-hidden px-[16px] py-[12px] rounded-[8px] cursor-pointer hover:bg-[#1d7300] transition-colors border-0"
                >
                  <p className="font-['Graphik:Medium',sans-serif] leading-[24px] text-white text-[16px] text-center whitespace-nowrap m-0">
                    Set up your dashboard
                  </p>
                  <ExternalLinkIcon color="white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: testimonial image */}
          <div className="h-[314px] w-[558px] rounded-[16px] overflow-hidden shrink-0">
            <img
              src={imgTestimonials}
              alt=""
              className="size-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* Shipping section */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Graphik:Regular',sans-serif] leading-[34px] text-[24px] text-black tracking-[0.54px] m-0 w-full">
            Shipping information coming soon
          </p>
          <div className="bg-[#f5f5f5] flex flex-col gap-[0px] items-start p-[24px] rounded-[16px] w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-[24px] items-start">
                {/* Station Duo thumb */}
                <div className="border border-[#e5e5e5] border-solid rounded-[12px] size-[160px] bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={imgStationDuo}
                    alt="Station Duo"
                    className="size-full object-contain"
                    draggable={false}
                  />
                </div>
                {/* Flex thumb */}
                <div className="border border-[#e5e5e5] border-solid rounded-[12px] size-[160px] bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={imgFlex}
                    alt="Flex"
                    className="size-full object-contain"
                    draggable={false}
                  />
                </div>
                {/* Item details */}
                <div className="flex flex-col gap-[8px] items-start justify-center self-stretch whitespace-nowrap">
                  <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[20px] text-black m-0">
                    Station Duo + Flex
                  </p>
                  <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] m-0">
                    Quantity: <span className="text-black">4</span>
                  </p>
                  <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] m-0">
                    Status: <span className="text-black">Processing</span>
                  </p>
                  <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] m-0">
                    Shipping via:{' '}
                    <span className="text-black">
                      FedEX - tracking info coming soon
                    </span>
                  </p>
                  <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] m-0">
                    Delivering to:{' '}
                    <span className="text-black">
                      100 Bay st, New York, NY, 10005
                    </span>
                  </p>
                </div>
              </div>
              {/* Track shipment button (disabled) */}
              <button
                type="button"
                disabled
                className="bg-white border border-[#c7c7c7] border-solid flex gap-[8px] items-center justify-center min-w-[100px] overflow-hidden px-[16px] py-[12px] rounded-[8px] cursor-not-allowed"
              >
                <p className="font-['Graphik:Medium',sans-serif] leading-[24px] text-[#c7c7c7] text-[16px] text-center whitespace-nowrap m-0">
                  Track shipment
                </p>
                <ExternalLinkIcon color="#C7C7C7" />
              </button>
            </div>
          </div>
        </div>

        {/* Offers section */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Graphik:Regular',sans-serif] leading-[34px] text-[24px] text-black tracking-[0.54px] m-0 w-full">
            Offers
          </p>
          <div className="flex gap-[24px] items-stretch w-full">
            <OfferCard
              icon={<DollarBillIcon />}
              title="Rapid Deposit"
              description="Get your money on demand. Day or night, weekends or holidays, Rapid Deposit instantly transfers funds from your card sales to keep your cash flow strong."
            />
            <OfferCard
              icon={<BankIcon />}
              title="Clover Capital"
              description="Grow your business with your own sales. Draw from a cash advance with a fixed, one time fee, no interest, and no penalties. Automatically pay back your advance when you make sales."
            />
            <OfferCard
              icon={<HandCardIcon />}
              title="Gift cards"
              description="Drive customer loyalty by attracting more foot traffic, engaging your customers, and boosting brand awareness with Gift cards from Clover."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
