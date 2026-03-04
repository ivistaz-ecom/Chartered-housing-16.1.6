"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

function DialogOverlay({ className, ...props }) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  title,
  ...props
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl max-h-[90vh] overflow-hidden translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 shrink-0">
          {title ? (
            <DialogPrimitive.Title className="text-xl font-semibold text-[#ed1c24]">
              {title}
            </DialogPrimitive.Title>
          ) : (
            <span />
          )}
          <DialogPrimitive.Close className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-2 disabled:pointer-events-none ml-auto">
            <XIcon className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </div>
        <div className="overflow-y-auto px-6 pb-6 pt-2">{children}</div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

const DialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col gap-1.5", className)} {...props} />
);
const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2", className)}
    {...props}
  />
);
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
