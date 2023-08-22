
const Footer = ({ data }: any) => {

  return (
    <div className="container mx-auto ">
      <div className="divider"></div>
      <footer className="footer p-10 text-base-content justify-between">
        <div>
          <span className="footer-title text-base label-text font-fira-go">
            ჩვენი ვებ-საიტები
          </span>
          <a
            className="link link-hover text-md text-gray-500 font-fira-go"
            target="_blank"
            href="http://visitbatumi.com"
          >
            visitbatumi.com
          </a>
          <a
            className="link link-hover text-md text-gray-500 font-fira-go"
            target="_blank"
            href="http://visitajara.com"
          >
            visitajara.com
          </a>
          <a
            className="link link-hover text-md text-gray-500 font-fira-go"
            target="_blank"
            href="http://Batumievents.com"
          >
            batumievents.com
          </a>
        </div>
        <div>
          <span className="footer-title text-base label-text font-fira-go">
            საკონტაქტო ინფორმაცია
          </span>
          <a
            href={`tel:+995599169909`}
            className="link link-hover text-md text-gray-500 font-fira-go"
          >
            {data.tel}
            {/* (+995) 599 16 99 09 */}
          </a>
          <a
            href={`mailto:${data.email}`}
            className="link link-hover text-md text-gray-500 font-fira-go"
          >
            {data.email}
            {/* infovisitbatumi@gmail.com */}
          </a>
          <a
            href="https://goo.gl/maps/WcNFYv4MUinYN6iB7"
            target="_blank"
            className="link link-hover text-md text-gray-500 font-fira-go"
          >
            84/86 ფარნავაზ მეფის ქუჩა, ბათუმი, საქართველო
          </a>
        </div>
        {/* <div>
                    <span className="footer-title text-base label-text font-fira-go">მობილური აპლიკაციები</span>
                    <a href="https://apps.apple.com/us/app/anbani-tour/id1579766195"
                        className="link link-hover ">
                        <Image
                            width={120}
                            height={50}
                            src="/app-store.webp"
                            alt="" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.helixmob.anbani&hl=en&gl=US&pli=1"
                        className="link link-hover ">
                        <Image
                            width={120}
                            height={50}
                            src="/play-store.webp"
                            alt="" /></a>
                </div> */}
        <div>
          <span className="footer-title text-base label-text font-fira-go">
            ჩვენი სოციალური ქსელები
          </span>
          <div className="grid grid-flow-col gap-5">
            <a
              href="https://www.facebook.com/visitbatumi"
              target="_blank"
              className="m-auto hover:scale-110 transition-all"
            >
              <svg
                fill="#1B74E4"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@Gobatumi"
              target="_blank"
              className="m-auto hover:scale-110 transition-all"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 -3 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-300.000000, -7442.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                        id="youtube-[#168]"
                        fill="#FF0000"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://instagram.com/visitbatumi"
              target="_blank"
              className="m-auto hover:scale-110 transition-all"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#A232AD"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#A232AD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#A232AD"
                />
              </svg>
            </a>
            {/* <a href="https://tiktok.com/visitbatumi" target="_blank" className="m-auto"><img src="./tk1.svg" alt="" width={30} height={30} /></a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
