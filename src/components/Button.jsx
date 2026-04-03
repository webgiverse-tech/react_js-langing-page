
const Button = ({ children, theme, className, href}) => {
    const baseClasse = " text-white hover:text-white";
    const themeClasse = 
        theme === " primary" ? "bg-p-3 hover:bg-p-2"
        : theme === "secondary" ? "bg-n-7 hover:bg-p-3"
        : "";

    const renderButton = () =>    {
        return (
            <button className={`button py-3 px-3 lg:py-4 lg:px-6 rounded-lg ${themeClasse} ${baseClasse} ${className}`}>
            {children}
            </button>
        )
        
    }   

    const renderLink = () => (
        <a href={href} className={` button inline-block py-3 px-3 lg:px-6 rounded-lg  ${themeClasse} ${baseClasse} ${className}`}> {children}</a>
    );
 
  return  href ? renderLink() : renderButton(); 
  
};

export default Button;
