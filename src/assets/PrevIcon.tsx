export const PrevIcon = (props: any) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <path
                d="M11 1 3 9l8 8"
                stroke={props.stroke}
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
            />
        </svg>
    );
};
