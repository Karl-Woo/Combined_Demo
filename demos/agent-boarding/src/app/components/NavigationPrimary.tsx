import cloverLogoSvg from '@/assets/Clover green.svg';

function CartIcon() {
  return (
    <svg
      className="size-[24px]"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4h2l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.5L22 8H6"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.4" stroke="black" strokeWidth="1.5" />
      <circle cx="18" cy="20" r="1.4" stroke="black" strokeWidth="1.5" />
    </svg>
  );
}

export function NavigationPrimary() {
  return (
    <div
      className="border-[#ededed] border-b border-solid flex h-[80px] items-center justify-between px-[80px] relative w-full bg-white"
      data-name="Navigation/Primary"
    >
      <div className="flex h-[46px] items-center">
        <div className="flex gap-[24px] h-[24px] items-center">
          {['Food & beverage', 'Services', 'Retail', 'Products', 'Resources'].map(
            (label) => (
              <p
                key={label}
                className="font-['Altform:SemiBold',sans-serif] leading-[1.57] text-[14px] text-black whitespace-nowrap m-0"
              >
                {label}
              </p>
            ),
          )}
        </div>
      </div>

      <div className="flex gap-[16px] items-center justify-end">
        {['Log In', 'Support', 'Pricing', 'Shop'].map((label) => (
          <p
            key={label}
            className="font-['Altform:SemiBold',sans-serif] leading-[1.57] text-[14px] text-black whitespace-nowrap m-0"
          >
            {label}
          </p>
        ))}
        <div className="size-[32px] flex items-center justify-center">
          <CartIcon />
        </div>
        <div
          className="bg-[#b6fb6f] border border-[#333] border-solid flex h-[48px] items-center justify-center overflow-hidden rounded-[8px] w-[119px]"
          data-name="Contact us"
        >
          <p className="font-['Altform:SemiBold',sans-serif] leading-[1.71] text-[14px] text-[#333] text-center whitespace-nowrap m-0">
            Contact us
          </p>
        </div>
      </div>

      <img
        src={cloverLogoSvg}
        alt="Clover"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24px]"
      />
    </div>
  );
}
