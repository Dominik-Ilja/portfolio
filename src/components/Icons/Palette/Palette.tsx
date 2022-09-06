type Props = {
  className?: string;
  fill?: string;
  children?: never;
};

const Palette = (props: Props) => {
  return (
    <svg
      className={props.className}
      width="100%"
      height="100%"
      viewBox="0 0 26 25"
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentcolor"
        d="M22.1137 4.56426C20.9106 3.36965 19.481 2.42739 17.9088 1.79275C16.3367 1.15812 14.6536 0.843896 12.9583 0.868532C9.77598 0.860576 6.7208 2.11713 4.4649 4.36178C2.20901 6.60642 0.937193 9.65528 0.929237 12.8376C0.921281 16.02 2.17784 19.0752 4.42248 21.3311C6.66712 23.587 9.71598 24.8588 12.8983 24.8667C13.5841 24.8784 14.2543 24.662 14.8037 24.2516C15.3532 23.8411 15.7508 23.2598 15.9341 22.5989C16.051 22.1216 16.0498 21.6231 15.9306 21.1464C15.8114 20.6697 15.5779 20.2292 15.2502 19.8631C15.1744 19.7769 15.125 19.6707 15.1077 19.5572C15.0905 19.4437 15.1061 19.3277 15.1529 19.2228C15.1996 19.118 15.2755 19.0287 15.3714 18.9657C15.4673 18.9027 15.5793 18.8685 15.6941 18.8672H17.674C19.5374 18.8759 21.3351 18.1793 22.7061 16.9174C24.0772 15.6554 24.92 13.9214 25.0654 12.0637C25.1101 10.6785 24.8713 9.29885 24.3637 8.00927C23.8561 6.71968 23.0905 5.54738 22.1137 4.56426V4.56426ZM17.722 16.4674H15.7421C15.1639 16.4641 14.5972 16.6287 14.1107 16.9411C13.6242 17.2536 13.2388 17.7005 13.0012 18.2277C12.7637 18.7548 12.6842 19.3396 12.7724 19.911C12.8607 20.4825 13.1128 21.016 13.4983 21.447C13.5734 21.5227 13.6264 21.6175 13.6518 21.721C13.6771 21.8246 13.6739 21.9331 13.6423 22.0349C13.5823 22.2869 13.3063 22.4429 12.9343 22.4669C11.5716 22.4495 10.2283 22.142 8.99358 21.5651C7.7589 20.9881 6.66122 20.1549 5.77356 19.1208C4.8859 18.0867 4.2286 16.8755 3.84539 15.5676C3.46218 14.2598 3.36184 12.8854 3.55104 11.5357C3.89322 9.26784 5.0264 7.19402 6.75016 5.68105C8.47393 4.16809 10.6772 3.31347 12.9703 3.26835H13.0663C14.4232 3.25059 15.77 3.50474 17.0271 4.01583C18.2842 4.52691 19.4262 5.28458 20.3858 6.24413C21.1345 6.99335 21.7228 7.88723 22.1148 8.87127C22.5068 9.8553 22.6942 10.9089 22.6656 11.9677C22.5414 13.1953 21.9679 14.3337 21.0555 15.1642C20.143 15.9947 18.9558 16.4588 17.722 16.4674V16.4674Z"
      />
      <path
        fill="currentcolor"
        d="M13.0665 8.06799C14.0605 8.06799 14.8663 7.26217 14.8663 6.26813C14.8663 5.27409 14.0605 4.46826 13.0665 4.46826C12.0724 4.46826 11.2666 5.27409 11.2666 6.26813C11.2666 7.26217 12.0724 8.06799 13.0665 8.06799Z"
      />
      <path
        fill="currentcolor"
        d="M16.966 7.10805C16.6578 7.28607 16.4093 7.55145 16.2519 7.87066C16.0946 8.18987 16.0354 8.54857 16.0818 8.90142C16.1282 9.25427 16.2782 9.58543 16.5128 9.85305C16.7475 10.1207 17.0561 10.3127 17.3999 10.405C17.7436 10.4972 18.107 10.4854 18.444 10.3712C18.7811 10.2569 19.0767 10.0453 19.2935 9.76311C19.5104 9.48089 19.6387 9.14072 19.6622 8.78561C19.6857 8.43049 19.6035 8.07637 19.4258 7.768C19.3077 7.56305 19.1504 7.38339 18.9628 7.23929C18.7753 7.09519 18.5611 6.98947 18.3327 6.92818C18.1042 6.86689 17.8659 6.85122 17.6314 6.88209C17.3969 6.91295 17.1708 6.98973 16.966 7.10805V7.10805Z"
      />
      <path
        fill="currentcolor"
        d="M9.16669 7.10803C8.85833 6.93035 8.5042 6.84808 8.14909 6.87162C7.79397 6.89516 7.45381 7.02345 7.17159 7.24027C6.88936 7.45709 6.67776 7.75272 6.56351 8.08978C6.44927 8.42684 6.43752 8.7902 6.52974 9.13394C6.62196 9.47768 6.81402 9.78636 7.08164 10.021C7.34926 10.2556 7.68042 10.4056 8.03327 10.452C8.38613 10.4985 8.74483 10.4392 9.06403 10.2819C9.38324 10.1245 9.64863 9.87601 9.82665 9.56784C9.94496 9.36303 10.0217 9.1369 10.0526 8.9024C10.0835 8.66789 10.0678 8.4296 10.0065 8.20115C9.94522 7.9727 9.8395 7.75857 9.6954 7.571C9.5513 7.38343 9.37164 7.22611 9.16669 7.10803V7.10803Z"
      />
      <path
        fill="currentcolor"
        d="M6.05854 11.9799C5.76332 12.1792 5.53389 12.4617 5.3993 12.7915C5.2647 13.1213 5.231 13.4836 5.30245 13.8326C5.3739 14.1816 5.54729 14.5015 5.80068 14.7518C6.05406 15.0022 6.37603 15.1718 6.72584 15.239C7.07564 15.3063 7.43753 15.2683 7.7657 15.1297C8.09387 14.9912 8.37356 14.7584 8.56935 14.4608C8.76514 14.1632 8.86822 13.8143 8.86555 13.4581C8.86288 13.1019 8.75458 12.7545 8.55435 12.4599C8.42281 12.2635 8.25365 12.0951 8.05663 11.9646C7.85962 11.834 7.63868 11.7438 7.40658 11.6992C7.17448 11.6545 6.93584 11.6564 6.70445 11.7045C6.47306 11.7527 6.25352 11.8463 6.05854 11.9799V11.9799Z"
      />
    </svg>
  );
};

export default Palette;