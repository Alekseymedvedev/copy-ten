import React, {FC} from 'react';

interface T {
    active?: boolean
}

const IconPartner: FC<T> = ({active}) => {
    return (
        <>
        {
            active ?
                <svg width="48" height="68" viewBox="0 0 48 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4 43H12C12 39.0236 15.2235 35.8 19.2 35.8C23.1765 35.8 26.4 39.0236 26.4 43H24C24 40.349 21.851 38.2 19.2 38.2C16.549 38.2 14.4 40.349 14.4 43ZM32.4 39.4H30V35.8H26.4V33.4H30V29.8H32.4V33.4H36V35.8H32.4V39.4ZM19.2 34.6C16.549 34.6 14.4 32.451 14.4 29.8C14.4 27.149 16.549 25 19.2 25C21.851 25 24 27.149 24 29.8C23.9967 32.4496 21.8496 34.5967 19.2 34.6ZM19.2 27.4C17.8889 27.4013 16.8215 28.4546 16.8027 29.7656C16.7839 31.0766 17.8207 32.16 19.1312 32.1989C20.4418 32.2378 21.541 31.2178 21.6 29.908V30.388V29.8C21.6 28.4745 20.5255 27.4 19.2 27.4Z" fill="url(#paint0_linear_722_55336)"/>
                    <defs>
                        <linearGradient id="paint0_linear_722_55336" x1="24" y1="25" x2="24" y2="43" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EB5757"/>
                            <stop offset="1" stopColor="#F2994A"/>
                        </linearGradient>
                    </defs>
                </svg>

                :
                <svg width="48" height="68" viewBox="0 0 48 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4 43H12C12 39.0236 15.2235 35.8 19.2 35.8C23.1765 35.8 26.4 39.0236 26.4 43H24C24 40.349 21.851 38.2 19.2 38.2C16.549 38.2 14.4 40.349 14.4 43ZM32.4 39.4H30V35.8H26.4V33.4H30V29.8H32.4V33.4H36V35.8H32.4V39.4ZM19.2 34.6C16.549 34.6 14.4 32.451 14.4 29.8C14.4 27.149 16.549 25 19.2 25C21.851 25 24 27.149 24 29.8C23.9967 32.4496 21.8496 34.5967 19.2 34.6ZM19.2 27.4C17.8889 27.4013 16.8215 28.4546 16.8027 29.7656C16.7839 31.0766 17.8207 32.16 19.1312 32.1989C20.4418 32.2378 21.541 31.2178 21.6 29.908V30.388V29.8C21.6 28.4745 20.5255 27.4 19.2 27.4Z" fill="#828282"/>
                </svg>


        }
        </>
    );
};

export default IconPartner;