import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HelpCircle } from "lucide-react"

const TextBoxGenerator = ({ name, helpMessage, placeholder }) => {
    return (
        <div className="space-y-2">
            <div className="flex items-center space-x-2">
                <Label htmlFor={name}>{name}</Label>
                {helpMessage && (
                    <HelpCircle className="h-4 w-4 text-muted-foreground" title={helpMessage} />
                )}
            </div>
            <Input
                type="text"
                id={name}
                placeholder={placeholder || `Enter ${name.toLowerCase()}`}
                className="w-full"
            />
        </div>
    );
};

export default TextBoxGenerator;