import React, {FC} from 'react';

interface T {
    active?: boolean
}

const IconProducts: FC<T> = ({active}) => {
    return (
        <>
            {
                active ?
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 34C19.664 34 16 31.965 16 29.556V18.444C16 16.035 19.664 14 24 14C28.336 14 32 16.035 32 18.444V29.556C32 31.965 28.337 34 24 34ZM18 26.9V29.559C18.07 30.112 20.309 31.781 24 31.781C27.691 31.781 29.931 30.107 30 29.553V26.9C28.1794 27.9554 26.1039 28.4905 24 28.447C21.8961 28.4906 19.8206 27.9554 18 26.9ZM18 21.341V24C18.07 24.553 20.309 26.222 24 26.222C27.691 26.222 29.931 24.548 30 23.994V21.341C28.1795 22.3968 26.104 22.9323 24 22.889C21.896 22.9323 19.8205 22.3968 18 21.341ZM24 16.222C20.308 16.222 18.069 17.896 18 18.451C18.07 19 20.311 20.666 24 20.666C27.689 20.666 29.931 18.992 30 18.438C29.93 17.887 27.689 16.222 24 16.222Z"
                            fill="url(#paint0_linear_722_54391)"/>
                        <defs>
                            <linearGradient id="paint0_linear_722_54391" x1="24" y1="14" x2="24" y2="34"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F2C94C"/>
                                <stop offset="1" stopColor="#F2994A"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    :
                    null
            }
        </>
    );
};

export default IconProducts;