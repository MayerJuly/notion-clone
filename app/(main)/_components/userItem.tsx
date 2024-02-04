'use client';
import {ChevronsLeftRight} from "lucide-react";
import {SignOutButton, useUser} from "@clerk/clerk-react";

import {
    Avatar,
    AvatarImage
} from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {ModeToggle} from "@/components/modeToggle";

export const UserItem = () => {
    const {user} = useUser()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div role={'button'} className={'flex items-center text-sm p-3 w-full hover:bg-primary/5'}>
                    <div className="gap-x-2 flex items-center max-w-[150]">
                        <Avatar className={'h-5 w-5'}>
                            <AvatarImage src={user?.imageUrl}/>
                        </Avatar>
                        <span className={'text-start font-medium line-clamp-1'}>
                            {user?.fullName}&apos;s Yotion
                        </span>

                    </div>
                    <ChevronsLeftRight className={'rotate-90 ml-2 text-muted-foreground h-4 w-4'}/>

                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className={'w-60'}
                align={'start'}
                alignOffset={11}
                forceMount
            >
                <div className="flex flex-col space-y-4 p-2">
                    <p
                        className={'text-xs font-medium leading-none text-muted-foreground '}
                    >
                       {user?.emailAddresses[0].emailAddress}
                    </p>
                    <div className="flex items-center gap-x-2">
                        <div className="rounded-md p-1">
                            <Avatar className={'h-8 w-8'}>
                                <AvatarImage src={user?.imageUrl}/>
                            </Avatar>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm line-clamp-1">
                                {user?.fullName}&apos;s Yotion
                            </p>
                        </div>
                        <div className={'ml-auto'}>
                            <ModeToggle/>
                        </div>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className={'w-full cursor-pointer text-muted-foreground'} asChild>
                    <SignOutButton>
                        Log out
                    </SignOutButton>
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
};
