import React, { useState } from 'react';
import { Menu, Save, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

const ActionNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectPath, setProjectPath] = useState('');
    const [title, setTitle] = useState('User Email → Company Research');
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        console.log('Saving project to:', projectPath);
        setIsModalOpen(false);
    };

    const handleTitleClick = () => {
        setIsEditing(true);
    };

    const handleTitleBlur = () => {
        setIsEditing(false);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <Menu className="h-6 w-6" />
                <Button variant="ghost">Sign-In</Button>
                <Button variant="ghost">Book a Demo</Button>
            </div>

            {isEditing ? (
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={handleTitleBlur}
                    className="max-w-xs"
                    autoFocus
                />
            ) : (
                <h1 className="text-xl font-semibold cursor-pointer" onClick={handleTitleClick}>
                    {title}
                </h1>
            )}

            <div className="flex items-center space-x-4">
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                        <Button variant="ghost">
                            <Save className="h-5 w-5 mr-2" />
                            Save
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Save Project</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <Label htmlFor="projectPath">Where do you want to save the project?</Label>
                            <Input
                                id="projectPath"
                                value={projectPath}
                                onChange={(e) => setProjectPath(e.target.value)}
                                placeholder="Enter project path"
                            />
                            <Button onClick={handleSave}>Save</Button>
                        </div>
                    </DialogContent>
                </Dialog>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button>
                                <Play className="h-5 w-5 mr-2" />
                                Run
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Run project</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </nav>
    );
};

export default ActionNav;