import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuSeparator,
//   DropdownMenuLabel,
//   DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
// import { Avatar } from "@radix-ui/react-avatar";
import React from "react";

function UserItems() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            role="button"
            className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
          >
            <Avatar className="h-8 w-8 rounded-full bg-slate-200 mr-2 ">
              <AvatarImage src="/images/empdty.jpg" />
              <AvatarFallback className="m-auto text-muted-foreground">
                AY
              </AvatarFallback>
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              Amit Yadav&apos;s Workspace
            </span>
          </div>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}

export default UserItems;
