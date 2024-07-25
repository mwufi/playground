import Flow from "@/components/blocks/Flow";

export default function Page() {
  return (
    <div className="grid grid-cols-2 h-full">
      <Flow />
      <div className="p-6 border">
        <p className="text-4xl">Sidebar</p>
        <p className="text-gray-500">hello world</p>
      </div>
    </div>
  )
}