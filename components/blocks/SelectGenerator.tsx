import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { HelpCircle } from "lucide-react"

const SelectGenerator = ({ name, helpMessage, choices, multiple = false }) => {
    return (
        <div className="space-y-2">
            <div className="flex items-center space-x-2">
                <Label htmlFor={name}>{name}</Label>
                {helpMessage && (
                    <HelpCircle className="h-4 w-4 text-muted-foreground" title={helpMessage} />
                )}
            </div>
            <Select multiple={multiple}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={`Select ${name.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                    {choices.map((choice) => (
                        <SelectItem key={choice} value={choice}>
                            {choice}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectGenerator;