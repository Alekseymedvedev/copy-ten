const IconAccount = ({icon, active}: any) => {

    return (
        <>
            {
                active ?
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M32 32H16C14.8954 32 14 31.1046 14 30V18C14 16.8954 14.8954 16 16 16H32C33.1046 16 34 16.8954 34 18V30C34 31.1046 33.1046 32 32 32ZM16 24V30H32V24H16ZM16 18V20H32V18H16Z"
                            fill="url(#paint0_linear_722_55206)"/>
                        <defs>
                            <linearGradient id="paint0_linear_722_55206" x1="24" y1="16" x2="24" y2="32"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6FCF97"/>
                                <stop offset="1" stopColor="#27AE60"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    :
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M32 32H16C14.8954 32 14 31.1046 14 30V18C14 16.8954 14.8954 16 16 16H32C33.1046 16 34 16.8954 34 18V30C34 31.1046 33.1046 32 32 32ZM16 24V30H32V24H16ZM16 18V20H32V18H16Z"
                            fill="#828282"/>
                    </svg>

            }

        </>

    );
};

export default IconAccount;