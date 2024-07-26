
"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Bot, Globe, Code, Zap, Info } from 'lucide-react'

const menuItems = [
  {
    category: 'AI', items: [
      { name: 'ChatGPT', description: 'Powerful language model for conversation and text generation', icon: <Bot className="w-6 h-6" /> },
      { name: 'Image Generation', description: 'Create unique images from text descriptions', icon: <Zap className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Google', items: [
      { name: 'Search', description: 'Access Google\'s powerful search engine', icon: <Search className="w-6 h-6" /> },
      { name: 'Maps', description: 'Integrate location and mapping services', icon: <Globe className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Development', items: [
      { name: 'Code Snippet', description: 'Insert pre-defined code snippets', icon: <Code className="w-6 h-6" /> },
      { name: 'API Integration', description: 'Connect to various APIs easily', icon: <Zap className="w-6 h-6" /> },
    ]
  },
]

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = menuItems.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0)

  return (
    <div className="flex h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-4xl mx-auto overflow-hidden">
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl">Command Menu</CardTitle>
          <CardDescription>Search or explore categories to find what you need</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="w-1/3 pr-4 border-r">
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
              />
              <Tabs defaultValue={menuItems[0].category} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  {menuItems.map(category => (
                    <TabsTrigger key={category.category} value={category.category}>
                      {category.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {menuItems.map(category => (
                  <TabsContent key={category.category} value={category.category}>
                    <div className="space-y-2">
                      {(searchTerm ? filteredItems.find(c => c.category === category.category)?.items : category.items)?.map(item => (
                        <Button
                          key={item.name}
                          variant="ghost"
                          className="w-full justify-start text-left"
                          onMouseEnter={() => setSelectedItem(item)}
                          onClick={() => console.log(`Selected: ${item.name}`)}
                        >
                          <span className="mr-2">{item.icon}</span>
                          {item.name}
                        </Button>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            <div className="w-2/3">
              {selectedItem ? (
                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    {selectedItem.icon}
                    <span className="ml-2">{selectedItem.name}</span>
                  </h3>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <Info className="w-6 h-6 mr-2" />
                  Hover over an item to see more details
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}