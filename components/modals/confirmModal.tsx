"use client";

import {
    AlertDialog,
    AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm?: () => void;
}

export const ConfirmModal = ({
                                 children,
                                 onConfirm
}:ConfirmModalProps) => {

    const handleConfirm = (
        e:React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        onConfirm && onConfirm();
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>
                    Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>

        </AlertDialog>
    );
};

export default ConfirmModal;