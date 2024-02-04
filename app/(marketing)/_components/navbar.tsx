"use client";

import {useScrollTop} from "@/hooks/useScrollTop";
import {ModeToggle} from "@/components/modeToggle";
import {Logo} from "@/app/(marketing)/_components/logo";
import {cn} from "@/lib/utils";
import {useConvexAuth} from "convex/react";
import {SignInButton, SignUpButton, UserButton} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    const scrolled = useScrollTop()

    return (
        <div className={cn('z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6', scrolled && 'border-b shadow-sm')}>
           <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner/>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode={'modal'}>
                            <Button variant={'ghost'} size={'sm'}>
                                Log in
                            </Button>
                        </SignInButton>
                        <SignUpButton mode={'modal'}>
                            <Button  size={'sm'}>
                                Get Yotion free
                            </Button>
                        </SignUpButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant={'ghost'} size={'sm'} asChild>
                            <Link href="/documents">
                                Open Yotion
                            </Link>

                        </Button>
                        <UserButton
                            afterSignOutUrl='/'
                        />
                    </>
                )}
                <ModeToggle/>
            </div>
        </div>
    );
};

