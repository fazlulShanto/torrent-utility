import { Popover, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { GearFill } from "react-bootstrap-icons";

export default function GearSettings({ children, position, className }) {
    return (
        // <div className="">
        <Popover className="relative w-full">
            {({ open }) => (
                <>
                    <Popover.Button className="focus:outline-none">
                        <GearFill
                            className="text-green-400 animate-spin-slow"
                            size={28}
                        />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-300"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            className={`absolute z-[999999] ${className}`}
                        >
                            {children}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
        // </div>
    );
}
