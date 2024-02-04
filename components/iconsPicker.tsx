"use client";

import {useTheme} from "next-themes";
import EmojiPicker, {Theme} from "emoji-picker-react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

interface IconsPickerProps {
    onChange: (icon:string) => void;
    children: React.ReactNode;
    asChild?: boolean;
}
const themeMap = {
    "light": Theme.LIGHT,
    "dark": Theme.DARK

}
export const IconsPicker = ({onChange, children, asChild}:IconsPickerProps) => {
    const {resolvedTheme} = useTheme();
    const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap

    const theme = themeMap[currentTheme]




    return (
        <Popover>
            <PopoverTrigger asChild={asChild}>
                {children}
            </PopoverTrigger>
            <PopoverContent className={'p-0 w-full border-none shadow-none'}>
                <EmojiPicker
                    height={350}
                    theme={theme}
                    onEmojiClick={(data) => onChange(data.emoji)}
                >
                </EmojiPicker>
            </PopoverContent>


        </Popover>
    );
};

