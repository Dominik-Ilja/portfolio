type Props = {
  className?: string;
  fill?: string;
  children?: never;
};

const Database = (props: Props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentcolor"
        d="M6.51165 1.02747C2.91762 1.47276 0.694974 2.52953 0.429829 3.93644C0.381621 4.1648 0.381621 5.4385 0.405725 6.7731C0.453933 8.76866 0.489455 9.27358 0.669601 9.59708C0.862433 9.97005 0.862433 10.0297 0.669601 10.5346C0.489455 11.0027 0.476769 11.3643 0.537663 13.3104C0.585871 14.5359 0.682288 15.7258 0.766017 15.9428C0.873851 16.2434 0.873851 16.4109 0.766017 16.6519C0.585872 17.0363 0.573185 20.4261 0.741913 21.4474C0.814225 21.9282 0.970267 22.3012 1.19862 22.5891C2.26808 23.9237 5.10474 24.7166 9.27473 24.8486C14.4546 25.0173 18.4089 24.043 19.3464 22.3722C19.5989 21.9396 19.6103 21.7468 19.6103 19.5482C19.6103 17.6859 19.5748 17.096 19.4187 16.7243C19.2627 16.3272 19.2627 16.1952 19.3832 15.9669C19.491 15.7626 19.5278 15.0661 19.5037 13.4068C19.4796 11.0268 19.4441 10.678 19.1789 10.2936C19.047 10.1007 19.0584 10.0056 19.203 9.70491C19.3591 9.41693 19.3959 8.88791 19.3832 6.78452C19.3718 5.29388 19.3109 4.05696 19.2271 3.82861C18.9024 2.83146 17.4599 1.91805 15.5012 1.44865C13.0971 0.884113 9.20369 0.703968 6.51165 1.02747V1.02747ZM7.06477 2.15782C7.02925 2.21745 7.70163 2.23013 8.60362 2.19334C9.93822 2.14513 13.4587 2.34938 13.3394 2.4699C13.3153 2.49401 12.7749 2.56632 12.1253 2.63863C11.4644 2.71094 10.8275 2.83146 10.6829 2.90251C10.4431 3.03444 10.4431 3.04713 10.6474 3.20317C10.8516 3.3478 10.839 3.35921 10.5269 3.43153C9.54114 3.63578 8.90429 3.88823 8.67594 4.17621C8.09871 4.90948 8.60362 5.64275 9.84181 5.90663C10.7793 6.09946 14.4812 5.97894 15.5024 5.72648C16.6328 5.4385 17.2088 5.11373 17.2088 4.75344C17.2088 4.26121 16.4869 3.89965 14.7451 3.53936C13.819 3.35921 14.4089 3.32242 15.5621 3.50384C16.7038 3.68398 17.6299 4.03286 17.9293 4.41725C18.1463 4.70523 18.1691 4.89807 18.1691 6.98877C18.1691 9.57297 18.1932 9.51208 17.0159 10.0538C15.3096 10.8594 12.5326 11.16 7.71304 11.075C6.79963 11.0509 6.72732 11.0395 6.97978 10.8949C7.23223 10.7503 7.1485 10.7262 6.13867 10.6665C4.73303 10.5828 3.50626 10.2339 2.9303 9.77722C2.23255 9.2241 1.78853 8.22695 1.72891 7.04966C1.66928 5.932 1.88495 4.64561 2.1133 4.72934C2.19703 4.76486 2.37718 4.56061 2.54591 4.26121C3.02672 3.3478 4.07207 2.72236 5.79107 2.28976C6.81232 2.0373 7.16119 2.00178 7.06477 2.15782ZM2.54591 11.1714C2.54591 11.6637 2.78568 11.8679 3.7232 12.1445C7.11298 13.1657 14.7565 13.0338 16.9436 11.9161C17.3889 11.6878 17.4485 11.6155 17.4485 11.2438C17.4485 10.7871 17.569 10.7147 17.857 11.0154C18.0854 11.2438 18.074 11.0395 18.0486 13.5273L18.0372 15.5711L17.6883 15.8958C16.9436 16.5809 14.3594 17.1213 11.198 17.266C7.28044 17.4461 2.7971 16.6773 2.11204 15.703C1.9801 15.5102 1.94331 14.9938 1.94331 13.3598C1.94331 11.5812 1.96741 11.2323 2.14756 11.0408C2.42412 10.7287 2.54464 10.7769 2.54464 11.1727L2.54591 11.1714ZM2.9062 18.0462C3.94013 18.8035 9.07175 19.3085 12.5453 19.0078C14.4558 18.8391 16.1025 18.527 16.8954 18.1781C17.4244 17.9383 17.4485 17.9015 17.4485 17.4448C17.4485 17.1086 17.4967 16.9526 17.6173 16.9526C18.0258 16.9526 18.0854 17.2774 18.0613 19.4886C18.0499 20.69 18.0016 21.7366 17.9775 21.8203C17.8811 22.0601 16.8599 22.565 16.0061 22.782C14.5522 23.1664 13.1935 23.3351 11.0178 23.4074C7.00388 23.5393 3.2297 22.9266 2.20845 21.9777C1.95599 21.7252 1.94458 21.6415 1.94458 19.5495C1.94458 17.4702 1.95599 17.3738 2.22114 17.0972L2.48501 16.8092L2.54464 17.3256C2.59285 17.6859 2.68926 17.8901 2.90493 18.0462H2.9062Z"
      />
    </svg>
  );
};

export default Database;
