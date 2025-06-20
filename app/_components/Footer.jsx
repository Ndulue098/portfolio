import { assets } from "@/assets/assets";
import Image from "next/image";
import Logo from "./Logo";

export default function Footer({isDark}) {
    return <div id="Footer" className="mt-20">
            <div className="text-center">
                <Logo/>
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={isDark? assets.mail_icon_dark :assets.mail_icon} alt="" className="w-6"/>
                    christianndulue47@gmail.com
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>&copy; 2025 Ndulue Christian. All right Reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a target="_blank" href="https://github.com/Ndulue098">Github</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/christian-ndulue-9b95a9228/">LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://x.com/Ndulue47">Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
}

