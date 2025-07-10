import { Check, X } from "lucide-react";

interface PasswordCriteariaProps{
    password: string
}

const PasswordCritearia =({password}:PasswordCriteariaProps)=>{
    const critearia = [
        {label: "At least 8 character", met: password.length >=8},
        {label: "Contain uppercase letter", met: /[A-Z]/.test(password)},
        {label: "Contain lowercase letter", met: /[a-z]/.test(password)},
        {label: "Contain a number", met: /[\d]/.test(password)},
        {label: "Contain a special character", met: /[^A-Za-z0-9]/.test(password)}
    ];
    return(
        <div className="mt-2 space-y-1">
            {critearia.map((item)=>(
                    <div key={item.label} className="flex items-center text-xs">
                        {item.met ? <Check className="size-4 text-green-500 mr-2"/> : <X className="size-4 text-gray-500 mr-2"/>}
            <span className={item.met ? "text-green-500": "text-gray-400"}>{item.label}</span>
                    </div>
                )
            )}
        </div>
    )
};

export const PasswordStrengthMeter =({password}: PasswordCriteariaProps)=>{
    const getStrenght =(pass: string)=>{
        let strenght = 0;
        if(pass.length >= 8) strenght++;
        if(pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strenght++;
        if(pass.match(/[\d]/)) strenght++;
        if(pass.match(/[^a-zA-Z\d]/)) strenght++;
        return strenght;
    }

    const strength = getStrenght(password);

    const getColor =(strength: number)=>{
        if(strength === 0) return "bg-red-500";
        if(strength === 1) return "bg-red-400";
        if(strength === 2) return "bg-yellow-500";
        if(strength === 3) return "bg-yellow-300";
        return "bg-green-500"
    }

    const getStrength =(strength: number)=>{
        if(strength === 0) return "very weak";
        if(strength === 1) return "weak";
        if(strength === 2) return "fair";
        if(strength === 3) return "good";
        return "strong"
    }
    return(
        <div className="mt-2">
            <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-400"></span>
                <span className="text-xs text-gray-400">{getStrength(strength)}</span>
            </div>
            <div className="flex space-x-1">
                {[...Array(4)].map((_, index)=>(
                    <div key={index} className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${index< strength ? getColor(strength) : "bg-gray-600"}`}></div>
                ))}
            </div>
            <PasswordCritearia password={password}/>
        </div>
    )
}