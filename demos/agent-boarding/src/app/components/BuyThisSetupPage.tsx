/**
 * BuyThisSetupPage — matches Figma node 40000383:6890 ("Desktop - 10b - GIO'S VERSION").
 *
 * Shown after the user clicks "Looks good. Buy this setup." in the chatbot.
 * The chatbot widget itself is intentionally rendered in its smallest
 * 80 × 80 collapsed state on this page (see App.tsx / ChatbotWidget.tsx).
 *
 * Authored at the project's design width of 1440 px. App.tsx handles the
 * downscale for sub-1440 viewports.
 */
import imgStationDuo from "@/assets/station.png";
import imgFlex from "@/assets/flex.png";
import imgRestaurantGrowth from "@/assets/restaurant growth.png";
import paymentMethodsSvg from "@/assets/Frame 5908.svg";
import { NavigationPrimary } from './NavigationPrimary';

function QtyDropdown({ value }: { value: number }) {
  return (
    <div className="flex items-start gap-[16px] relative">
      <div className="relative h-[48px] w-[74px]">
        <div className="absolute inset-0 bg-white border border-[#c7c7c7] border-solid rounded-[3.5px]" />
        <p className="absolute left-[20px] top-1/2 -translate-y-1/2 font-['Graphik:Regular',sans-serif] leading-[28px] text-[16px] text-black whitespace-nowrap m-0">
          {value}
        </p>
        <svg
          className="absolute right-[9px] top-[19px]"
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 6L0 0h12z" fill="#333" />
        </svg>
      </div>
      <p className="mt-[12px] font-['Graphik:Regular',sans-serif] leading-[28px] text-[14px] text-[#727272] whitespace-nowrap m-0 cursor-pointer">
        Remove
      </p>
    </div>
  );
}

function ItemRow({
  image,
  title,
  description,
  subtotal,
  eachPrice,
  isPlan,
}: {
  image: React.ReactNode;
  title: string;
  description?: string;
  subtotal: string;
  eachPrice?: string;
  isPlan?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full" data-name="item">
      {/* Thin divider */}
      <div className="h-px w-full bg-[#e5e5e5]" />

      <div className="flex items-start justify-between w-[765px]">
        <div className="flex gap-[24px] items-start pl-[8px]">
          {/* Product image */}
          <div className="shrink-0 size-[160px] overflow-hidden">{image}</div>

          {/* Title + meta + qty */}
          <div className="flex flex-col gap-[8px] items-start py-[16px]">
            <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[20px] text-black m-0">
              {title}
            </p>
            {description && (
              <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] m-0">
                {description}
              </p>
            )}
            {!isPlan && <QtyDropdown value={2} />}
          </div>
        </div>

        {/* Subtotal */}
        <div className="flex flex-col gap-[8px] items-end justify-center px-[24px] py-[16px] text-right whitespace-nowrap">
          <p className="font-['Graphik:Regular',sans-serif] leading-[30px] text-[18px] text-black tracking-[0.2025px] m-0">
            {subtotal}
          </p>
          {eachPrice && (
            <p className="font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] m-0">
              {eachPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div
      className="bg-white border border-[#1f1f1f] border-solid flex items-center p-[4px] rounded-[24px] w-full"
      data-name="SegmentedControl"
    >
      <div className="flex flex-[1_0_0] flex-col items-center min-w-[112px] px-[16px] py-[8px] rounded-[24px]">
        <p className="font-['Graphik:Medium',sans-serif] leading-[24px] text-[16px] text-[#5a5a5a] whitespace-nowrap m-0">
          Subscribe
        </p>
      </div>
      <div className="bg-[#1f1f1f] flex flex-[1_0_0] flex-col items-center min-w-[112px] px-[16px] py-[8px] rounded-[24px]">
        <p className="font-['Graphik:Medium',sans-serif] leading-[24px] text-[16px] text-white whitespace-nowrap m-0">
          Purchase
        </p>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex font-['Graphik:Regular',sans-serif] items-start justify-between leading-[24px] text-[16px] text-black w-full whitespace-nowrap">
      <p className="m-0">{label}</p>
      <p className="m-0">{value}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Graphik:Medium',sans-serif] leading-[22px] text-[#727272] text-[12px] tracking-[0.525px] uppercase m-0 w-full">
      {children}
    </p>
  );
}

function PromoBanner() {
  return (
    <div
      className="border border-[#228800] border-solid bg-[#f2fcee] flex gap-[16px] items-start overflow-hidden p-[16px] rounded-[8px] w-full"
      data-name="Promo banner"
    >
      <p className="flex-1 font-['Graphik:Regular',sans-serif] leading-[24px] text-[16px] text-black m-0">
        Promo code{' '}
        <span className="font-['Graphik:Medium',sans-serif]">DISCOUNT20</span>{' '}
        applied.
      </p>
    </div>
  );
}

function OrderSummaryCard({
  onCheckout,
}: {
  onCheckout: () => void;
}) {
  return (
    <div
      className="bg-white flex flex-col gap-[24px] items-center p-[24px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.16)] w-full"
      data-name="Order summary"
    >
      <SegmentedControl />

      {/* DUE TODAY */}
      <div className="flex flex-col gap-[12px] items-start w-full">
        <div className="h-px w-full bg-[#e5e5e5]" />
        <SectionLabel>DUE Today</SectionLabel>
        <SummaryRow label="Station Duo (2)" value="$200.00" />
        <SummaryRow label="Flex Pocket (2)" value="$200.00" />
        <SummaryRow label="Shipping" value="$10.00" />
        <SummaryRow label="Taxes" value="To be calculated" />
      </div>

      {/* MONTHLY FEE */}
      <div className="flex flex-col gap-[12px] items-start w-full">
        <div className="h-px w-full bg-[#e5e5e5]" />
        <SectionLabel>MONTHLY FEE</SectionLabel>
        <SummaryRow label="Restaurant Growth Plan" value="$100.00/mo" />
      </div>

      {/* PROMO CODE */}
      <div className="flex flex-col gap-[12px] items-start w-full">
        <div className="h-px w-full bg-[#e5e5e5]" />
        <SectionLabel>PROMO CODE</SectionLabel>
        <PromoBanner />
      </div>

      {/* Checkout button */}
      <button
        type="button"
        onClick={onCheckout}
        className="bg-[#228800] flex gap-[8px] items-center justify-center min-w-[100px] overflow-hidden px-[16px] py-[12px] rounded-[8px] w-full border-0 cursor-pointer hover:bg-[#1d7300] transition-colors"
      >
        <p className="font-['Graphik:Medium',sans-serif] leading-[24px] text-white text-[16px] text-center whitespace-nowrap m-0">
          Checkout now
        </p>
      </button>

      {/* Payment methods row (bank icon + Visa/Mastercard/Amex/Discover) */}
      <img
        src={paymentMethodsSvg}
        alt="Accepted payment methods"
        className="h-[41px] w-[263px]"
      />
    </div>
  );
}

export default function BuyThisSetupPage({
  onCheckout,
}: {
  onCheckout?: () => void;
}) {
  const handleCheckout = () => {
    onCheckout?.();
  };

  // `--design-scale` is set by App.tsx to the scale-factor applied to the
  // 1440 px authored layout on sub-1440 viewports. Dividing 100vh by it
  // means the authored page height compensates for the CSS scale, so the
  // page fills the full viewport after the transform is applied.
  return (
    <div
      className="bg-white relative w-full"
      style={{ minHeight: 'max(1032px, calc(100vh / var(--design-scale, 1)))' }}
      data-name="Buy this setup page"
    >
      <NavigationPrimary />

      <div className="md:flex md:justify-center md:gap-[40px] md:items-start w-full px-[20px] md:px-[80px] pt-[40px] md:pt-[60px] pb-[80px] max-w-[1440px] mx-auto">
        {/* Left column: title + item list */}
        <div className="flex flex-col gap-[40px] items-start w-full md:w-3/5 lg:max-w-[765px]">
          <p className="font-['Graphik:Semibold',sans-serif] leading-[40px] text-[32px] text-black m-0 w-full">
            Buy this setup
          </p>

          <div className="flex flex-col gap-[4px] items-start w-full">
            {/* Column header */}
            <div className="flex items-center justify-between leading-[28px] px-[24px] text-[#727272] text-[14px] w-full whitespace-nowrap font-['Graphik:Regular',sans-serif]">
              <p className="m-0">Item</p>
              <p className="m-0 text-right">Subtotal</p>
            </div>

            {/* Station Duo */}
            <ItemRow
              image={
                <img
                  src={imgStationDuo}
                  alt="Station Duo"
                  className="size-full object-contain"
                  draggable={false}
                />
              }
              title="Station Duo"
              description="Includes cash drawer"
              subtotal="$200.00"
              eachPrice="each $100.00"
            />

            {/* Flex */}
            <ItemRow
              image={
                <img
                  src={imgFlex}
                  alt="Flex"
                  className="size-full object-contain"
                  draggable={false}
                />
              }
              title="Flex"
              subtotal="$200.00"
              eachPrice="each $100.00"
            />

            {/* Restaurant Growth Plan */}
            <ItemRow
              image={
                <img
                  src={imgRestaurantGrowth}
                  alt="Restaurant Growth Plan"
                  className="size-full object-contain"
                  draggable={false}
                />
              }
              title="Restaurant Growth Plan"
              description="Your plan includes one device. Add more devices for an extra fee."
              subtotal="$100.00/mo"
              isPlan
            />
          </div>
        </div>

        {/* Right column: order summary */}
        <div className="w-full md:w-2/5 lg:max-w-[405px] mt-[40px] md:mt-0 md:sticky md:top-[60px]">
          <OrderSummaryCard onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
}
