import React, {FC} from 'react';

interface IType {
    active?: boolean;
    notActive?: boolean;
}

const IconProduct: FC<IType> = ({active, notActive}) => {
    return (
        <>
            {
                active ?
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1250_52470)">
                            <path
                                d="M34 17H31.5V4.875H34V17ZM29.8333 17H27.3333V2.4375H29.8333V17ZM25.6667 17H23.1667V0H25.6667V17ZM21.5 17H19V6.5H21.5V17Z"
                                fill="#6FCF97"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M17.0001 7.27051L28.5743 13.9529V27.3177L17.0001 34.0001L5.42578 27.3177V13.9529L17.0001 7.27051Z"
                                  fill="#D5A889"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M5.42578 13.9526V27.3175L17 33.9999V20.6351L5.42578 13.9526Z" fill="#937661"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M17.0001 7.27051L28.5743 13.9529L17.0001 20.6353L5.42578 13.9529L17.0001 7.27051Z"
                                  fill="#E8BF9D"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.60352 21.9337L12.8232 23.7925V18.2239L9.60352 16.365V21.9337ZM21.1778 9.68262L24.3975 11.5415L12.8232 18.2239L9.60352 16.365L21.1778 9.68262Z"
                                  fill="#EFC7A4"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.60352 16.3652V21.9339L12.8232 23.7927V18.2241L9.60352 16.3652Z" fill="#D5A889"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1250_52470">
                                <rect width="34" height="34.0002" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    : notActive ?
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1250_52506)">
                                <path
                                    d="M25.4915 17C20.7982 16.9953 16.9969 13.1876 17 8.49433C17.0031 3.80102 20.8095 -0.00156191 25.5028 4.8129e-07C30.1961 0.00156384 34 3.80668 34 8.5C33.9972 13.1966 30.1881 17.0019 25.4915 17ZM18.7 8.64619C18.7402 12.3872 21.7949 15.3931 25.5362 15.3731C29.2774 15.3529 32.2996 12.3144 32.2996 8.57309C32.2996 4.83183 29.2774 1.7933 25.5362 1.77309C21.7949 1.75308 18.7402 4.75894 18.7 8.49999V8.64619ZM26.35 12.75H24.65V11.05H26.35V12.75ZM26.35 9.34999H24.65V4.25H26.35V9.34999Z"
                                    fill="#FF8888"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M17.0001 7.27051L28.5743 13.9529V27.3177L17.0001 34.0001L5.42578 27.3177V13.9529L17.0001 7.27051Z"
                                      fill="#D5A889"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.42578 13.9526V27.3175L17 33.9999V20.6351L5.42578 13.9526Z" fill="#937661"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M17.0001 7.27051L28.5743 13.9529L17.0001 20.6353L5.42578 13.9529L17.0001 7.27051Z"
                                      fill="#E8BF9D"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M9.60352 21.9337L12.8232 23.7925V18.2239L9.60352 16.365V21.9337ZM21.1778 9.68262L24.3975 11.5415L12.8232 18.2239L9.60352 16.365L21.1778 9.68262Z"
                                      fill="#EFC7A4"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M9.60352 16.3652V21.9339L12.8232 23.7927V18.2241L9.60352 16.3652Z" fill="#D5A889"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1250_52506">
                                    <rect width="34" height="34.0002" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        :
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1250_52542)">
                                <path
                                    d="M25.5 17C20.8056 17 17 13.1944 17 8.5C17 3.80558 20.8056 0 25.5 0C30.1944 0 34 3.80558 34 8.5C33.9948 13.1923 30.1923 16.9948 25.5 17ZM25.5 1.7C21.7445 1.7 18.7 4.74446 18.7 8.5C18.7 12.2555 21.7445 15.3 25.5 15.3C29.2555 15.3 32.3 12.2555 32.3 8.5C32.2958 4.74621 29.2538 1.70422 25.5 1.7ZM29.75 9.35H24.65V4.25H26.35V7.65H29.75V9.35Z"
                                    fill="#F2994A"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M17.0001 7.27051L28.5743 13.9529V27.3177L17.0001 34.0001L5.42578 27.3177V13.9529L17.0001 7.27051Z"
                                      fill="#D5A889"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.42578 13.9526V27.3175L17 33.9999V20.6351L5.42578 13.9526Z" fill="#937661"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M17.0001 7.27051L28.5743 13.9529L17.0001 20.6353L5.42578 13.9529L17.0001 7.27051Z"
                                      fill="#E8BF9D"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M9.60352 21.9337L12.8232 23.7925V18.2239L9.60352 16.365V21.9337ZM21.1778 9.68262L24.3975 11.5415L12.8232 18.2239L9.60352 16.365L21.1778 9.68262Z"
                                      fill="#EFC7A4"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M9.60352 16.3652V21.9339L12.8232 23.7927V18.2241L9.60352 16.3652Z" fill="#D5A889"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1250_52542">
                                    <rect width="34" height="34.0002" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

            }
        </>


    );
};

export default IconProduct;