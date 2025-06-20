import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Footer({isDark}) {
    return <div id="Footer" className="mt-20">
            <div className="text-center">
                <Image src={isDark?assets.logo_dark:assets.logo} alt="" className="w-36 mx-auto mb-2"/>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={isDark? assets.mail_icon_dark :assets.mail_icon} alt="" className="w-6"/>
                    christianndulue47@gmail.com
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>&copy; 2025 william Mark. All right Reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a target="_blank" href="">Github</a>
                    </li>
                    <li>
                        <a target="_blank" href="">LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" href="">Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
}

