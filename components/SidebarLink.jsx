import { useRouter } from "next/router";

function SidebarLink({ Icon, text, active }) {
    const router = useRouter();
    return (
        <div
            className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-md space-x-2 hoverAnimation ${
              active && "font-bold"
            }`}
            onClick={() => active && router.push("/")}
        >
            <Icon className="h-5" />
            <span className="hidden xl:inline">{text}</span>
        </div>
    );
}

export default SidebarLink;
