type Props = {
  className?: string;
  fill?: string;
  children?: never;
};

const LinkedIn = (props: Props) => {
  return (
    <svg
      className={props.className}
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.1207 0C0.299403 0 0 0.299053 0 4.1207V9.8793C0 13.7006 0.299403 14 4.1207 14H9.8793C13.7006 14 14 13.7009 14 9.8793V4.1207C14 0.299053 13.7009 0 9.8793 0H4.1207ZM3.20879 1.4H10.7912C12.4688 1.4 12.6 1.53124 12.6 3.20879V10.7912C12.6 12.4688 12.4684 12.6 10.7912 12.6H3.20879C1.53124 12.6 1.4 12.4684 1.4 10.7912V3.20879C1.4 1.53124 1.53124 1.4 3.20879 1.4ZM3.67568 2.27637C3.10553 2.27637 2.64346 2.73846 2.64346 3.30791C2.64346 3.87736 3.10518 4.34014 3.67568 4.34014C4.24443 4.34014 4.70654 3.87771 4.70654 3.30791C4.70654 2.73916 4.24443 2.27637 3.67568 2.27637ZM9.07676 5.01279C8.21576 5.01279 7.6382 5.48526 7.40195 5.93291H7.37734V5.15498H5.67998V10.85H7.44844V8.03223C7.44844 7.28918 7.59058 6.57002 8.51143 6.57002C9.41933 6.57002 9.43086 7.42031 9.43086 8.08076V10.85H11.2V7.72598C11.2 6.19228 10.8691 5.01279 9.07676 5.01279ZM2.79043 5.15498V10.85H4.56025V5.15498H2.79043Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default LinkedIn;
