import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';


const PopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="p-4">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="transition-transform duration-200 ease-in-out hover:scale-110"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] transition-all duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <DialogHeader>
            <DialogTitle>Menu Options</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              onClick={() => console.log('Option 1 clicked')}
              className="transition-all duration-200 ease-in-out hover:scale-105"
            >
              Option 1
            </Button>
            <Button
              onClick={() => console.log('Option 2 clicked')}
              className="transition-all duration-200 ease-in-out hover:scale-105"
            >
              Option 2
            </Button>
            <Button
              onClick={() => console.log('Option 3 clicked')}
              className="transition-all duration-200 ease-in-out hover:scale-105"
            >
              Option 3
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PopupMenu;