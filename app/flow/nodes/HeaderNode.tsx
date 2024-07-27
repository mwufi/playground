'use client'

import { useState } from 'react'
import { Handle, Position } from '@xyflow/react';
import { Download, X, HelpCircle } from 'lucide-react';
import { useHotkeys } from 'react-hotkeys-hook';

const HeaderNode = ({ data }) => {
    const [dev, setDev] = useState(false)
    useHotkeys('d', () => {
        setDev(!dev)
    })
    const [formValues, setFormValues] = useState({
        defaultValue: data.defaultValue || 'maxbrodeur@hubspot.com',
        inputName: data.inputName || 'user_email',
        showAsUserInput: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    return (
        <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${dev ? 'w-96' : 'w-96'}`}>
            <div className="flex items-center justify-between p-3 bg-blue-100 rounded-t-lg border-b border-gray-200">
                <div className="flex items-center">
                    <Download className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="font-semibold text-gray-800">User Email</span>
                </div>
                <div className="flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                    <X className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>
            </div>

            {dev ? (
                <div className="p-4">
                    <pre className="bg-gray-50 p-3 rounded text-xs overflow-x-auto">
                        {JSON.stringify(formValues, null, 2)}
                    </pre>
                </div>
            ) : (
                <div className="p-4 space-y-4">
                    <div>
                        <label className="text-sm text-gray-700 flex items-center mb-1">
                            Default value <HelpCircle className="w-4 h-4 text-gray-400 ml-1 cursor-pointer" />
                        </label>
                        <input
                            type="text"
                            name="defaultValue"
                            value={formValues.defaultValue}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-700 flex items-center mb-1">
                            Input name <HelpCircle className="w-4 h-4 text-gray-400 ml-1 cursor-pointer" />
                        </label>
                        <input
                            type="text"
                            name="inputName"
                            value={formValues.inputName}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="showAsUserInput"
                            name="showAsUserInput"
                            checked={formValues.showAsUserInput}
                            onChange={handleInputChange}
                            className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="showAsUserInput" className="text-sm text-gray-700 flex items-center cursor-pointer">
                            Show as user input <HelpCircle className="w-4 h-4 text-gray-400 ml-1" />
                        </label>
                    </div>
                </div>
            )}

            <Handle
                type="target"
                position={Position.Top}
                style={{
                    width: '20px',
                    height: '20px',
                    background: '#3B82F6',
                    borderRadius: '4px',
                    border: '3px solid #3B82F6',
                    boxShadow: '0 0 10px #3B82F6',
                    zIndex: -1
                }}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                style={{
                    width: '20px',
                    height: '20px',
                    background: '#FF00FF',
                    borderRadius: '4px',
                    border: '3px solid #FF66FF',
                    boxShadow: '0 0 10px #FF00FF',
                    zIndex: -1
                }}
            >
                <div className="absolute w-[300px] left-[-30px] top-4 bg-white/30 p-2 rounded-lg">
                    country
                    <p className="text-sm">type: text</p>
                </div>
            </Handle>
        </div>
    );
};

export default HeaderNode;