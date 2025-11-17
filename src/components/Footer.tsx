const footerLinks = [
    { value: "about", label: "About Us" },
    { value: "contact", label: "Contact" },
    { value: "privacy", label: "Privacy Policy" },
    { value: "terms", label: "Terms of Service" },
]

const Footer = () => {
    return (
        <div className="bg-white p-5 md:p-10 mt-4">
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