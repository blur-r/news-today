const footerLinks = [
    { value: "about", label: "About Us" },
    { value: "contact", label: "Contact" },
    { value: "privacy", label: "Privacy Policy" },
    { value: "terms", label: "Terms of Service" },
]
import { useNewsContext } from "../context/AppContext";

const Footer = () => {
    const { darkMode } = useNewsContext();
    return (
        <div className={`p-5 md:p-10 mt-4 ${darkMode ? "bg-[#111C38]" : "bg-white"}`}>
            <div className="flex gap-3 justify-center">
                {footerLinks.map((link) => {
                    return <p className="text-sm">{link.label}</p>
                })}
            </div>

            <div className=" text-sm text-center mt-2">
                &copy; 2024 News Today. All rights reserved.
            </div>
        </div>
    )
}

export default Footer