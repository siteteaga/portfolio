export default function OrganicShape({ className = "", fill = "#63320A" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 600"
            className={className}
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d="
            M 80 90
            C 40 200, 60 400, 140 480
            C 260 600, 500 560, 720 540
            C 920 520, 1100 520, 1140 420
            C 1180 300, 1160 120, 1040 80
            C 900 40, 700 60, 520 70
            C 340 80, 160 40, 80 90
            Z
          "
                fill={fill}
            />
        </svg>
    );
}
